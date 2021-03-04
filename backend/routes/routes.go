package routes

import (
	"net/http"
)

func HandleRoutes() {
	http.HandleFunc("/contributions", getContributions)
	// http.HandleFunc("/json", jsonHandler)
	// http.HandleFunc("/del", deleteContribution)
	http.HandleFunc("/projects", getProjects)
	http.HandleFunc("/login", provideLogin)
	http.HandleFunc("/subscribe", provideSubscription)
}
