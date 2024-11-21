package order_test

import (
	"order-api/internal/core/modules/order/domain"
	"testing"
)

func TestItShouldBeAbleToCreateAValidPaymentMethod(t *testing.T) {
	var payment *domain.PaymentMethod

	payment = domain.NewPaymentMethod("credit card")

	if payment == nil {
		t.Error("Payment credit card not created")
		return
	}

	payment = domain.NewPaymentMethod("debit card")

	if payment == nil {
		t.Error("Payment debit card not created")
		return
	}

	payment = domain.NewPaymentMethod("money")

	if payment == nil {
		t.Error("Payment money not created")
		return
	}
}

func TestItShouldNotBeAbleToCreateAInvalidValidPaymentMethod(t *testing.T) {
	payment := domain.NewPaymentMethod("undefined")

	if payment != nil {
		t.Error("Invalid payment created")
		return
	}
}
