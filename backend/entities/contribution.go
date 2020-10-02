package entities

import "time"

type contribution struct {
	ID          int       `json:"ID"`
	Heading     string    `json:"Heading"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
	Description string    `json:"Description"`
}
