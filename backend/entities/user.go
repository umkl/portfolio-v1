package entities

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID       primitive.ObjectID `bson:"_id"`
	email    string             `bson:"Heading"`
	password string             `bson:"Password"`
	// country  string             `bson:"Country"`
	// CreatedAt   time.Time `json:"created_at"`
	// UpdatedAt   time.Time `json:"updated_at"`
}
