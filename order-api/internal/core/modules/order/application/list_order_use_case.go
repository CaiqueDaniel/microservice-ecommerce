package application

import (
	"order-api/internal/core/modules/order/domain"
)

func ListOrderUseCase(repository domain.OrderRepository) func() []ListOrderUseCaseOutput {
	return func() []ListOrderUseCaseOutput {
		return toOutput(repository.All())
	}
}

func toOutput(orders []domain.Order) []ListOrderUseCaseOutput {
	result := make([]ListOrderUseCaseOutput, 0)

	for _, order := range orders {
		products := make([]ProductListOrderUseCaseOutput, 0)

		for _, product := range order.GetProducts() {
			products = append(products, ProductListOrderUseCaseOutput{
				Id:       product.Id.String(),
				Name:     product.Name,
				Price:    product.Price,
				Quantity: product.Quantity,
			})
		}

		result = append(result, ListOrderUseCaseOutput{
			Id:            order.GetId(),
			Status:        order.GetStatus(),
			PaymentMethod: order.GetPaymentMethod(),
			Products:      products,
		})
	}

	return result
}

type ListOrderUseCaseOutput struct {
	Id            string
	Status        string
	PaymentMethod string
	Products      []ProductListOrderUseCaseOutput
}

type ProductListOrderUseCaseOutput struct {
	Id       string
	Name     string
	Price    float32
	Quantity uint8
}
