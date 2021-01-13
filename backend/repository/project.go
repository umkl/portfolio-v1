package repository

import (
	"backend/cmd/monolithic/entities"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

// func getProjectCollection(client *mongo.Client) *mongo.Collection {
// 	collection := client.Database("Ungar").Collection("Projects")

// 	return collection
// }

const projectCollection = "Projects"

var project entities.Project

func GetAllProjects() ([]*entities.Project, error) {
	filter := bson.D{{}}

	p, err := filterProjects(filter)
	if err != nil {
		log.Fatal(err)
	}

	return p, err
}

// func PushProjects(contributionToPush entities.Project) {
// 	// Test1 := entities.Contribution{primitive.ObjectID{}, "head", "desc"}

// 	// insertResult, err := getProjectCollection(ungarClient).InsertOne(context.TODO(), contributionToPush)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	fmt.Println("Inserted a single document:", insertResult.InsertedID)
// }

func filterProjects(filter interface{}) ([]*entities.Project, error) {
	var cont []*entities.Project

	cur, err := ungarClient.Database("Ungar").Collection(projectCollection).Find(ctx, filter)
	if err != nil {
		fmt.Printf("err in filterProjects1: %v", err)
		return cont, err
	}

	defer cur.Close(ctx)

	for cur.Next(ctx) {
		var c entities.Project
		err := cur.Decode(&c)

		if err != nil {
			fmt.Printf("err in filterProjects2: %v", err)
			return cont, err
		}
		cont = append(cont, &c)
	}

	if err := cur.Err(); err != nil {
		fmt.Printf("err in filterProjects3: %v", err)
		return cont, err
	}

	if len(cont) == 0 {
		return cont, mongo.ErrNoDocuments
	}
	return cont, nil
}
