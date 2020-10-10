package main

import (
	"backend/cmd/monolithic/constants"
	"backend/cmd/monolithic/repository"
	"backend/cmd/monolithic/routes"
	"net/http"
)

//main function of server.go just executes the route handler and starts the server with the port
func main() {

	repository.ConnectToMongoDB()
	routes.HandleRoutes()

	// repository.GetTestData()
	// res, err := repository.GetAll()
	// if err != nil {
	// 	fmt.Println("error:", err)
	// }
	// if res != nil {
	// 	fmt.Printf("not nil")
	// }
	// for _, c := range res {
	// 	fmt.Printf(c)
	// }
	http.ListenAndServe(":"+constants.PORT, nil)
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
