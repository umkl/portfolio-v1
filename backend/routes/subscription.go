package routes

import (
	"backend/cmd/monolithic/entities"
	"backend/cmd/monolithic/repository"
	"fmt"
	"net/http"
)

var (
	subscriptionEmail string
)

func provideSubscription(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	var err error
	if err = r.ParseForm(); err != nil {
		fmt.Printf("error occurred")
	}

	subscriptionEmail = r.Form.Get("email")

	if err != nil {
		fmt.Println("error occurred")
		fmt.Printf("%e", err)
	}

	su := entities.Subscription{Email: subscriptionEmail}

	repository.SaveSubscription(&su)
}
