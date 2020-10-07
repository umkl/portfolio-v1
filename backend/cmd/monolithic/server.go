package main

import (
	"backend/cmd/monolithic/repository"
)

//main function of server.go just executes the route handler and starts the server with the port
func main() {
	// routes.HandleRoutes()
	repository.ConnectToMongoDB()
	repository.GetAll()
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
