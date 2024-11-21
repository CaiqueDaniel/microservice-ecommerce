package order_test

import (
	"order-api/internal/core/modules/order/domain"
	"testing"
)

func TestItShouldBeAbleToCreateAOrder(t *testing.T) {
	order, err := domain.NewOrder("credit card")

	if err != nil {
		t.Error("Should not have returned a error")
		return
	}

	if order == nil {
		t.Error("Order was not created")
		return
	}

	if order.GetStatus() != "pending" {
		t.Error("Order created with wrong status")
		return
	}
}

func TestItShouldNotBeAbleToCreateAOrderWithInvalidPaymentMethod(t *testing.T) {
	order, err := domain.NewOrder("invalid")

	if err == nil {
		t.Error("Should have returned a error")
		return
	}

	if order != nil {
		t.Error("Order was created")
		return
	}
}
