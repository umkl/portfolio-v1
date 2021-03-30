package repository

import (
	"backend/cmd/monolithic/entities"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func SaveSubscription(sub *entities.Subscription) error {
	log.Print(sub)
	res, err := getSubscriptionCollection(ungarClient).InsertOne(ctx, sub)

	log.Print("res result:", res)

	allSubs, e := GetAllSubscriptions()
	if e != nil {
		log.Print(e)
	}
	for _, in := range allSubs {
		fmt.Print(in)
	}

	return err
}

func getSubscriptionCollection(client *mongo.Client) *mongo.Collection {
	collection := client.Database("Ungar").Collection("Subscriptions")
	return collection
}

func GetAllSubscriptions() ([]*entities.Subscription, error) {
	// exampleData = entities.Contribution{1, "HeadingData", "DescriptionData"}
	// var exampleData entities.Contribution
	filter := bson.D{{}}
	// mc, err := getContributionCollection(ungarClient).Find(context.TODO(), filter)
	p, err := filterSubscriptions(filter)
	if err != nil {
		log.Print(err)
	}
	// fmt.Printf("Found a document: %+v\n", exampleData)
	// filter := bson.D{{}}
	// return filterContributions(filter)
	return p, err
}

// var subscriptions entities.User

// func GetAllSubscriptions() ([]*entities.Subscription, error) {
// 	filter := bson.D{{}}

// 	u, err := filterSubscription(filter)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	return u, err
// }

func filterSubscriptions(filter interface{}) ([]*entities.Subscription, error) {
	var subscriptions []*entities.Subscription

	cur, err := getSubscriptionCollection(ungarClient).Find(ctx, filter)
	if err != nil {
		return subscriptions, err
	}

	for cur.Next(ctx) {
		var s entities.Subscription
		err := cur.Decode(&s)
		if err != nil {
			return subscriptions, err
		}
		subscriptions = append(subscriptions, &s)
	}

	if err := cur.Err(); err != nil {
		return subscriptions, err
	}

	cur.Close(ctx)

	if len(subscriptions) == 0 {
		fmt.Print("found no subs")
		return subscriptions, mongo.ErrNoDocuments
	}
	return subscriptions, nil
}
