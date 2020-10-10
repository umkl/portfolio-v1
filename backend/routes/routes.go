package routes

import (
	"net/http"
)

func HandleRoutes() {
	http.HandleFunc("/contributions", getContributions)
	http.HandleFunc("/json", jsonHandler)
	// http.HandleFunc("/getContributions", getContributions)
}
