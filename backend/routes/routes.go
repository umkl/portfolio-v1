package routes

import (
	"net/http"
)

func HandleRoutes() {
	http.HandleFunc("/api/contributions", getContributions)
	http.HandleFunc("/api/projects", getProjects)
	http.HandleFunc("/api/login", provideLogin)
	http.HandleFunc("/api/subscribe", provideSubscription)
	// http.HandleFunc("/json", jsonHandler)
	// http.HandleFunc("/del", deleteContribution)
}
