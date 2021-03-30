package repository

import (
	"backend/cmd/monolithic/entities"

	"go.mongodb.org/mongo-driver/mongo"
)

func SaveSubscription(sub *entities.Subscription) error {
	_, err := ungarClient.Database("Ungar").Collection("Subscriptions").InsertOne(ctx, sub)
	return err
}

func getSubscriptionCollection(client *mongo.Client) *mongo.Collection {
	collection := client.Database("Ungar").Collection("Subscriptions")
	return collection
}

var subscriptions entities.User

// func GetAllSubscriptions() ([]*entities.Subscription, error) {
// 	filter := bson.D{{}}

// 	u, err := filterSubscription(filter)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	return u, err
// }

func filterSubscription(filter interface{}) ([]*entities.Subscription, error) {
	var subscription []*entities.Subscription

	cur, err := getUserCollection(ungarClient).Find(ctx, filter)
	if err != nil {
		return subscription, err
	}

	for cur.Next(ctx) {
		var s entities.Subscription
		err := cur.Decode(&s)
		if err != nil {
			return subscription, err
		}
		subscription = append(subscription, &s)
	}

	if err := cur.Err(); err != nil {
		return subscription, err
	}

	cur.Close(ctx)

	if len(subscription) == 0 {
		return subscription, mongo.ErrNoDocuments
	}
	return subscription, nil
}
