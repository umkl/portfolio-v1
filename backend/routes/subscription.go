package routes

import (
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

	fmt.Println("---")
	fmt.Println(subscriptionEmail)
	fmt.Println("---")
}
