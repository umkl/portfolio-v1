package entities

import "go.mongodb.org/mongo-driver/bson/primitive"

type Project struct {
	ID    primitive.ObjectID `bson:"_id"`
	Title string             `bson:"Title"`
	// CreatedAt   time.Time `json:"created_at"`
	// UpdatedAt   time.Time `json:"updated_at"`
	Description string `bson:"Description"`
}

// func (c Contribution) String() string {
// 	return fmt.Sprintf("%b", c)
// }

// type Test struct {
// 	Name string
// 	Age  int
// 	City string
// }
