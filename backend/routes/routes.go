package routes

import "net/http"

func HandleRoutes() {
	http.HandleFunc("/contribution", getContributions)
	// http.HandleFunc("/getContributions", getContributions)
}
