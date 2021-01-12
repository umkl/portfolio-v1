package service

import (
	"backend/cmd/monolithic/entities"
	"backend/cmd/monolithic/repository"
	"fmt"
	"strings"
)

func ValidateUser(email string, password string) (us *entities.User, e error) {
	u, e := repository.GetAllUsers()

	if e != nil {
		return nil, e
	}

	for _, user := range u {
		// fmt.Printf("%v", in)
		fmt.Printf("%v", user)
		fmt.Printf("%v:%v", user.Email, user.Password)
		if strings.Compare(email, user.Email) == 0 && strings.Compare(password, user.Password) == 0 {
			return user, e
		}
	}
	return nil, e

}
