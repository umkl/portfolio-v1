package repository

import (
	"backend/cmd/monolithic/entities"
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var exampleData entities.Contribution

// func addTestData(client *mongo.Client) {
// 	test := entities.Contribution{
// 		11,
// 		"lopm",
// 		// time.,
// 		// time.Time,
// 		"sadfasd",
// 	}
// 	insertContribution(test)
// }

// func insertContribution(con entities.Contribution) error {
// 	insertResult, err := getContributionCollection(ungarClient).InsertOne(context.TODO(), con)
// 	fmt.Println("Inserted a single document:", insertResult.InsertedID)
// 	return err
// }

func getContributionCollection(client *mongo.Client) *mongo.Collection {
	collection := client.Database("ungar").Collection("contributions")
	return collection
}

// var filter []primitive.E = bson.D{{"ID", "22"}}

var res entities.Contribution

func GetAll() {
	// exampleData = entities.Contribution{1, "HeadingData", "DescriptionData"}
	filter := bson.D{{"Heading", "this is the heading"}}

	err := getContributionCollection(ungarClient).FindOne(context.TODO(), filter).Decode(&exampleData)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Found a document: %+v\n", exampleData)
	// filter := bson.D{{}}
	// return filterContributions(filter)
}

func filterContributions(filter interface{}) ([]*entities.Contribution, error) {
	var cont []*entities.Contribution

	cur, err := getContributionCollection(ungarClient).Find(ctx, filter)
	if err != nil {
		return cont, err
	}

	for cur.Next(ctx) {
		var c entities.Contribution
		err := cur.Decode(&c)
		if err != nil {
			return cont, err
		}
		cont = append(cont, &c)
	}

	if err := cur.Err(); err != nil {
		return cont, err
	}

	cur.Close(ctx)

	if len(cont) == 0 {
		return cont, mongo.ErrNoDocuments
	}
	return cont, nil
}
