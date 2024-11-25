package order_test

import (
	"order-api/internal/core/modules/order/application"
	"order-api/internal/infrastructure/order/persistence"
	"testing"

	"github.com/google/uuid"
)

func TestItShouldBeAbleToCreateAOrder(t *testing.T) {
	repository := persistence.NewMemoryOrderRepository()
	sut := application.NewCreateOrderUseCase(repository)

	sut(application.CreateOrderUseCaseInput{
		PaymentMethod: "credit card",
		Products:      []string{uuid.New().String()},
	})

	if len(repository.All()) == 0 {
		t.Error("order was not created")
		return
	}
}

func TestItShouldNotBeAbleToCreateAInvalidOrder(t *testing.T) {
	repository := persistence.NewMemoryOrderRepository()
	sut := application.NewCreateOrderUseCase(repository)

	sut(application.CreateOrderUseCaseInput{
		PaymentMethod: "invalid",
		Products:      []string{},
	})

	if len(repository.All()) != 0 {
		t.Error("order should not have been created")
		return
	}
}
