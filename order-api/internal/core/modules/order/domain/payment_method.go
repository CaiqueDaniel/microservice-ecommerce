package domain

import "slices"

const (
	credit = "credit card"
	debit  = "debit card"
	money  = "money"
)

type PaymentMethod struct {
	value string
}

func NewPaymentMethod(value string) *PaymentMethod {
	if !slices.Contains([]string{credit, debit, money}, value) {
		return nil
	}

	return &PaymentMethod{value: value}
}

func (entity *PaymentMethod) ToString() string {
	return entity.value
}
