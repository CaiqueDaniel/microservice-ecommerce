dev:
	docker compose up -d

api-product-dev-sh:
	docker exec -it ecommerce-microservices-product-api-1 sh

api-order-dev-sh:
	docker exec -it ecommerce-microservices-order-api-1 sh

dev-down:
	docker compose down