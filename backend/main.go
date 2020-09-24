package main

import (
	"context"
	"log"
	"os"
	"time"

	"github.com/urfave/cli"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Task struct {
	ID        primitive.ObjectID `bson:"_id"`
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
	Text      string             `bson:"text"`
	Completed bool               `bson:"completed"`
}

func main() {
	app := &cli.App{
		Name:     "ungar",
		Usage:    "backend for ungar",
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

                    task := &Task{
                        ID:        primitive.NewObjectID(),
                        CreatedAt: time.Now(),
                        UpdatedAt: time.Now(),
                        Text:      str,
                        Completed: false,
                    }

                    return createTask(task)
                },
		},
	}
	err := app.Run(os.Args)
	if err != nil {
		log.Fatal(err)
	}
}

var collection *mongo.Collection
var ctx = context.TODO()

func init() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/")
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	collection = client.Database("ungar").Collection("posts")
}

func createTask(task *Task) error {
	_, err := collection.InsertOne(ctx, task)
	return err
}
