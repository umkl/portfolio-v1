package main

import (
	"backend/cmd/monolithic/repository"
	"backend/cmd/monolithic/routes"
	"fmt"
	"log"
	"net/http"
)

// main function of server.go just executes the route handler and starts the server with the port
func main() {
	fmt.Println("started")
	repository.ConnectToMongoDB()
	routes.HandleRoutes()

	// repository.GetTestData()
	// res, err := repository.GetAll()
	// if err != nil {
	// 	fmt.Println("error:", err)
	//
	// if res != nil {
	// 	fmt.Printf("not nil")
	// }
	// for _, c := range res {
	// 	fmt.Printf(c)
	// }
	if err := http.ListenAndServe("localhost:8080", nil); err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
	// repository.PushContribution(entities.Contribution{primitive.NewObjectID(), "head", "desc"})
	// repository.GetAllContributions()
	// defer repository.DisconnectFromMongoDB()
}

// // repository.GetTestData()
// res, err := repository.GetAll()
// if err != nil {
// 	fmt.Println("error:", err)
// }
// if res != nil {
// 	fmt.Printf("not nil")
// }
// // for _, c := range res {
// // 	fmt.Printf(c)
// // }
// // http.ListenAndServe(":"+constants.PORT, nil)
