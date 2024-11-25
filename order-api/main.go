package main

import (
	"order-api/internal/core/modules/order/application"
	"order-api/internal/infrastructure/order/delivery"
	"order-api/internal/infrastructure/order/persistence"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	repository := persistence.NewMemoryOrderRepository()

	delivery.RegisterOrderRoutes(
		e,
		application.NewCreateOrderUseCase(repository),
		application.NewListOrderUseCase(repository),
	)

	e.Logger.Fatal(e.Start(":1323"))
}
