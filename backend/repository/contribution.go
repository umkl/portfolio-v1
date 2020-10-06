package repository

import (
	"backend/cmd/monolithic/entities"
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func addTestData(client *mongo.Client) {
	test := entities.Contribution{
		11,
		"lopm",
		// time.,
		// time.Time,
		"sadfasd",
	}
	insertContribution(test)
}

func insertContribution(con entities.Contribution) error {
	insertResult, err := GetContributionCollection(ungarClient).InsertOne(context.TODO(), con)
	fmt.Println("Inserted a single document:", insertResult.InsertedID)
	return err
}

func GetContributionCollection(client *mongo.Client) *mongo.Collection {
	collection := client.Database("ungar").Collection("contributions")
	return collection
}

var filter []primitive.E = bson.D{{"ID", "22"}}

var res entities.Contribution

func GetAll() {
	filter := bson.D{{}}
	return filterContributions(filter)
	fmt.Printf("We found a document: %+v\n", res)
}

func filterContributions(filter interface{}) {

}
