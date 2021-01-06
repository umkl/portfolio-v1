package routes

import (
	"net/http"
)

func HandleRoutes() {
	http.HandleFunc("/contributions", getContributions)
	http.HandleFunc("/json", jsonHandler)
	http.HandleFunc("/projects", getProjects)
	http.HandleFunc("/login", provideLogin)
	// http.HandleFunc("/del", deleteContribution)
}
