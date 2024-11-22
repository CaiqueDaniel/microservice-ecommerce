package persistence

import (
	"order-api/internal/core/modules/order/domain"
)

type MemoryOrderRepository struct {
	items map[string]*domain.Order
}

func NewMemoryOrderRepository() domain.OrderRepository {
	return &MemoryOrderRepository{items: map[string]*domain.Order{}}
}

func (repository *MemoryOrderRepository) Save(entity domain.Order) {
	repository.items[entity.GetId()] = &entity
}

func (repository *MemoryOrderRepository) All() []domain.Order {
	result := make([]domain.Order, 0)

	for _, item := range repository.items {
		result = append(result, *item)
	}

	return result
}

func (repository *MemoryOrderRepository) Get(id string) domain.Order {
	return *repository.items[id]
}
