package order_test

import (
	"order-api/internal/core/modules/order/application"
	"order-api/internal/core/modules/order/domain"
	"order-api/internal/infrastructure/order/persistence"
	"testing"
)

func TestItShouldBeAbleToListOrders(t *testing.T) {
	repository := persistence.NewMemoryOrderRepository()
	sut := application.NewListOrderUseCase(repository)
	order, _ := domain.NewOrder("money")

	repository.Save(*order)
	result := sut()

	if len(result) == 0 {
		t.Error("no item was listed")
		return
	}
}
