package entities

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID       primitive.ObjectID `bson:"_id"`
	Email    string             `bson:"Email"`
	Password string             `bson:"Password"`
	// country  string             `bson:"Country"`
	// CreatedAt   time.Time `json:"created_at"`
	// UpdatedAt   time.Time `json:"updated_at"`
}

// func getProperty(u *User, property string) string {
// 	return u[property]
// }
