package repository

import (
	"backend/cmd/monolithic/entities"
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func getProjectCollection(client *mongo.Client) *mongo.Collection {
	collection := client.Database("Ungar").Collection("Projects")

	return collection
}

var project entities.Project

func GetAllProjects() ([]*entities.Project, error) {
	filter := bson.D{{}}

	p, err := filterProjects(filter)
	if err != nil {
		log.Fatal(err)
	}

	return p, err
}

func PushProjects(contributionToPush entities.Project) {
	// Test1 := entities.Contribution{primitive.ObjectID{}, "head", "desc"}

	insertResult, err := getProjectCollection(ungarClient).InsertOne(context.TODO(), contributionToPush)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Inserted a single document:", insertResult.InsertedID)
}

func filterProjects(filter interface{}) ([]*entities.Project, error) {
	var cont []*entities.Project

	cur, err := getProjectCollection(ungarClient).Find(ctx, filter)
	if err != nil {
		return cont, err
	}

	for cur.Next(ctx) {
		var c entities.Project
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
