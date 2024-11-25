package delivery

import (
	"net/http"
	"order-api/internal/core/modules/order/application"

	"github.com/labstack/echo/v4"
)

func RegisterOrderRoutes(
	instance *echo.Echo,
	createOrder application.CreateOrderUseCase,
	listOrders application.ListOrderUseCase,
) {
	instance.POST("orders", func(c echo.Context) error { return create(c, createOrder) })
	instance.GET("orders", func(c echo.Context) error { return list(c, listOrders) })
}

func create(context echo.Context, execute application.CreateOrderUseCase) error {
	err := execute(application.CreateOrderUseCaseInput{
		PaymentMethod: context.FormValue("paymentMethod"),
		Products:      []string{},
	})

	if err != nil {
		return context.String(http.StatusBadRequest, err.Error())
	}

	return context.String(http.StatusCreated, "")
}

func list(context echo.Context, execute application.ListOrderUseCase) error {
	return context.JSON(http.StatusOK, execute())
}
