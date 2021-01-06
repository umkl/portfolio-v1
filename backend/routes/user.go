package routes

import (
	"fmt"
	"net/http"
)

func provideLogin(w http.ResponseWriter, req *http.Request) {
	var err error

	w.Header().Set("Content-Type", "application/json")
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	if err = req.ParseForm(); err != nil {
		fmt.Printf("error occurred")
	}

	fmt.Println("GET params were:", req.URL.Query())
	emailVal := req.Form.Get("email")
	fmt.Printf("\n email %v", emailVal)
	fmt.Printf("\n formvalue email %v", req.FormValue("email"))

}

// w.Header().Set("Content-Type", "application/json")
// w.Header().Add("Access-Control-Allow-Origin", "*")
// w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
// w.Header().Add("Access-Control-Allow-Headers", "*")

// if err := r.ParseForm(); err != nil {
// 	fmt.Fprintf(w, "ParseForm() err: %v", err)
// 	return
// }
// fmt.Fprintf(w, "Post from website! r.PostForm: %v\n", r.PostForm)

// req.ParseForm()
// fmt.Println(req.ParseForm())
// email := req.PostForm.Get("email")
// password := req.PostForm.Get("password")
// fmt.Println(email)
// fmt.Println(password)
