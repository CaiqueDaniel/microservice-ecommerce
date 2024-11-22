package domain

type OrderRepository interface {
	Save(entity Order)
	All() []Order
	Get(id string) Order
}
