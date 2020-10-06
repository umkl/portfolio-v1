package routes

import (
	"backend/cmd/monolithic/repository"
	"fmt"
	"net/http"
)

// const Exported = "10"

// func ConnectToContribution() {
// 	fmt.Printf("hello")
// 	// http.ListenAndServe(":8000", nil)
// }

// func HandleContribution() {
// 	http.HandleFunc("/contribution", hello)
// }

func getContributions(w http.ResponseWriter, req *http.Request) {
	repository.GetTestData()
	// fmt.Fprintf(w, col.Find())
}

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "hello")
}
