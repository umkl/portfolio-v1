package repository

import (
	"backend/cmd/monolithic/entities"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func getUserCollection(client *mongo.Client) *mongo.Collection {
	collection := client.Database("Ungar").Collection("Users")
	return collection
}

var users entities.User

func GetAllUsers() ([]*entities.User, error) {
	filter := bson.D{{}}

	u, err := filterUsers(filter)
	if err != nil {
		log.Fatal(err)
	}

	return u, err
}

// func pushUsers(contributionToPush entities.Project) {
// 	// Test1 := entities.Contribution{primitive.ObjectID{}, "head", "desc"}

// 	insertResult, err := getProjectCollection(ungarClient).InsertOne(context.TODO(), contributionToPush)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	fmt.Println("Inserted a single document:", insertResult.InsertedID)
// }

func filterUsers(filter interface{}) ([]*entities.User, error) {
	var user []*entities.User

	cur, err := getUserCollection(ungarClient).Find(ctx, filter)
	if err != nil {
		return user, err
	}

	for cur.Next(ctx) {
		var c entities.User
		err := cur.Decode(&c)
		if err != nil {
			return user, err
		}
		user = append(user, &c)
	}

	if err := cur.Err(); err != nil {
		return user, err
	}

	cur.Close(ctx)

	if len(user) == 0 {
		return user, mongo.ErrNoDocuments
	}
	return user, nil
}
