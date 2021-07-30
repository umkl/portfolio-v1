package routes

import (
	"backend/cmd/monolithic/entities"
	"backend/cmd/monolithic/repository"
	"encoding/json"
	"log"
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
	w.Header().Set("Content-Type", "application/json")
	w.Header().Add("Access-Control-Allow-Origin", "*")
	w.Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Add("Access-Control-Allow-Headers", "*")

	keys, ok := req.URL.Query()["key"]
	if !ok || len(keys[0]) < 1 {
		log.Println("key is missing but I will give you all")
		r, e := repository.GetAllContributions()
		if e != nil {
			log.Fatal(e)
		}
		json.NewEncoder(w).Encode(r)
		return
	} else {
		key := keys[0]
		log.Println("URL parameter is ", string(key))
		r, e := repository.GetContribution(string(key))
		if e != nil {
			json.NewEncoder(w).Encode(entities.Error{"notfound"})
		} else {
			json.NewEncoder(w).Encode(r)
		}

	}

}

// type User struct {
// 	ID    int    `json:"id"`
// 	Name  string `json:"name"`
// 	Email string `json:"email"`
// 	Phone string `json:"phone"`
// }

// func jsonHandler(w http.ResponseWriter, r *http.Request) {

// 	w.Header().Set("Content-Type", "application/json")
// 	user := User{
// 		Id:    1,
// 		Name:  "John Doe",
// 		Email: "johndoe@gmail.com",
// 		Phone: "000099999",
// 	}

// 	json.NewEncoder(w).Encode(user)
// }

// Creating and initializing
// the anonymous structure
// Element := struct {
// 	name      string
// 	branch    string
// 	language  string
// 	Particles int
// }{
// 	name:     "Pikachu",
// 	branch:   "ECE",
// 	language: "C++",
// }
// user := struct {
// 	Id: int,
// 	Name: string,
// 	Email: string,
// 	Phone: string,
// 	}{
// 	Id: 1,
// 	Name: "John Doe",
// 	Email: "johndoe@gmail.com",
// 	Phone: "000099999",}
