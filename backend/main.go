package main

import (
	"context"
	"errors"
	"log"
	"os"
	"time"
	"fmt"

	"github.com/urfave/cli/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"gopkg.in/gookit/color.v1"
)

var collection *mongo.Collection //collection global variable for mongo
var ctx = context.TODO()         //give operation specific which depends on how fast the operation is

type Contribution struct {
	ID          primitive.ObjectID `bson:"_id"`
	CreatedAt   time.Time          `bson:"created_at"`
	UpdatedAt   time.Time          `bson:"updated_at"`
	Description string             `bson:"text"`
}

func main() {
	app := &cli.App{
		Name:  "Ungar",
		Usage: "Adding entries to the Ungar Database predominantly for Contributions ",
		Commands: []*cli.Command{
			{
				Name:    "add",
				Aliases: []string{"a"},
				Usage:   "add a task to the list",
				Action: func(c *cli.Context) error {
					str := c.Args().First()
					if str == "" {
						return errors.New("Cannot add an empty task")
					}

					contribution := &Contribution{
						ID:          primitive.NewObjectID(),
						CreatedAt:   time.Now(),
						UpdatedAt:   time.Now(),
						Description: str,
					}

					return createContribution(contribution)
				},
			},
			{
				Name: "all",
				Aliases: []string{"l"},
				Usage: "list all tasks ",
				Action: func(c *cli.Context) error{
					contributions, err := getAll()
					if err != nil{
						if err == mongo.ErrNoDocuments {
							fmt.Print("Nothing to see here.\nRun `add 'task'`to add a task")
							return nil   
						}
						return err
					}
					printContributions(contributions)
					return nil
				},
			},
		},
	}

	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}

}

func init() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/") //connecting to db
	client, err := mongo.Connect(ctx, clientOptions)                         //connecting to the db using unsetted TODO context and the clientOptions we defined earlier
	if err != nil {                                                          //catching the mongodb connect error
		log.Fatal(err)
	}

	err = client.Ping(ctx, nil) //what does ping???
	if err != nil {
		log.Fatal(err)
	}

	collection = client.Database("ungar").Collection("contributions")
}

func createContribution(contribution *Contribution) error {
	_, err := collection.InsertOne(ctx, contribution)
	return err
}

func getAll() ([]*Contribution, error) {
	filter := bson.D{{}}
	return filterTasks(filter)
}

func filterTasks(filter interface{}) ([]*Contribution, error) {
	var contributions []*Contribution

	cursor, err := collection.Find(ctx, filter)
	if err != nil {
		return contributions, err
	}

	for cursor.Next(ctx) {
		var c Contribution
		err := cursor.Decode(&c) //Marshalling: from memory to usable file formats
		if err != nil {
			return contributions, err
		}
		contributions = append(contributions, &c)
	}
	if err := cursor.Err(); err != nil {
		return contributions, err
	}

	cursor.Close(ctx)

	if len(contributions) == 0 {
		return contributions, mongo.ErrNoDocuments
	}

	return contributions, nil
}

func printContributions(contributions []*Contribution) {
	for i, v := range contributions {
    	color.Green.Printf("%d: %s\n", i+1, v.Description)
    }
}