package application

import (
	"order-api/internal/core/modules/order/domain"
)

func NewCreateOrderUseCase(repository domain.OrderRepository) CreateOrderUseCase {
	return func(input CreateOrderUseCaseInput) error {
		order, err := domain.NewOrder(input.PaymentMethod)

		if err != nil {
			return err
		}

		repository.Save(*order)

		return nil
	}
}

type CreateOrderUseCase func(input CreateOrderUseCaseInput) error

type CreateOrderUseCaseInput struct {
	PaymentMethod string
	Products      []string
}
