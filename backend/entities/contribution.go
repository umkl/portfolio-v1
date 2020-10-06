package entities

type Contribution struct {
	ID      int    `json:"ID"`
	Heading string `json:"Heading"`
	// CreatedAt   time.Time `json:"created_at"`
	// UpdatedAt   time.Time `json:"updated_at"`
	Description string `json:"Description"`
}

type Test struct {
	Name string
	Age  int
	City string
}
