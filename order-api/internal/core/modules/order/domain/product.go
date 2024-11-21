package domain

import (
	"github.com/google/uuid"
)

type Product struct {
	Id       uuid.UUID
	Name     string
	Price    float32
	Quantity uint8
}
