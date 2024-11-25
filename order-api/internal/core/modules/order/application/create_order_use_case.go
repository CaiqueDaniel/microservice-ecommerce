package application

import (
	"order-api/internal/core/modules/order/domain"
)

func CreateOrderUseCase(repository domain.OrderRepository) func(input CreateOrderUseCaseInput) error {
	return func(input CreateOrderUseCaseInput) error {
		order, err := domain.NewOrder(input.PaymentMethod)

		if err != nil {
			return err
		}

		repository.Save(*order)

		return nil
	}
}

type CreateOrderUseCaseInput struct {
	PaymentMethod string
	Products      []string
}
