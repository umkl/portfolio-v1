package main

import (
	"backend/cmd/monolithic/repository"
)

//main function of server.go just executes the route handler and starts the server with the port
func main() {
	// routes.HandleRoutes()
	repository.ConnectToMongoDB()
	repository.GetTestData()
	// http.ListenAndServe(":"+constants.PORT, nil)
}
