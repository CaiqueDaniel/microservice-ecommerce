package domain

import (
	"errors"

	"github.com/google/uuid"
)

const (
	pending  = "pending"
	finished = "finished"
	canceled = "canceled"
)

type Order struct {
	id            uuid.UUID
	status        string
	paymentMethod *PaymentMethod
	products      []*Product
}

func NewOrder(paymentMethod string) (*Order, error) {
	order := &Order{
		id:            uuid.New(),
		status:        pending,
		paymentMethod: NewPaymentMethod(paymentMethod),
		products:      make([]*Product, 0),
	}

	if order.paymentMethod == nil {
		return nil, errors.New("invalid payment provided")
	}

	return order, nil
}

func (entity *Order) GetId() string {
	return entity.id.String()
}

func (entity *Order) GetStatus() string {
	return entity.status
}

func (entity *Order) GetPaymentMethod() string {
	return entity.paymentMethod.ToString()
}
