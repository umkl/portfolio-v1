package routes

import (
	"fmt"
	"net/http"
)

var (
	email    string
	password string
)

func provideLogin(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	var err error
	if err = r.ParseForm(); err != nil {
		fmt.Printf("error occurred")
	}

	email = r.Form.Get("email")
	password = r.Form.Get("password")
	// user, err := service.ValidateUser(email, password)

	if err != nil {
		fmt.Println("error occurred")
		fmt.Printf("%e", err)
	}
	// fmt.Println("………………")
	// fmt.Println(user)
	// fmt.Println(user)
	// fmt.Println("………………")

	// // json.NewEncoder(w).Encode(user)
	// fmt.Println(user.Password)
}
