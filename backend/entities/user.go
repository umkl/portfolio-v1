package entities

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID      primitive.ObjectID `bson:"_id"`
	Heading string             `bson:"Heading"`
	// CreatedAt   time.Time `json:"created_at"`
	// UpdatedAt   time.Time `json:"updated_at"`
	Description string `bson:"Description"`
}
