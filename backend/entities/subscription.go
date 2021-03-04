package entities

import "go.mongodb.org/mongo-driver/bson/primitive"

type Subscription struct {
	ID    primitive.ObjectID `bson:"_id"`
	Email string             `bson:"Email"`
}
