api-product-dev:
	docker compose up -d
	docker logs ecommerce-microservices-product-api-1 -f

api-product-dev-sh:
	docker exec -it ecommerce-microservices-product-api-1 sh

api-product-dev-down:
	docker compose down