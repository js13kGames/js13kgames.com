.PHONY: migrate start stop

start:
	docker-compose down \
	&& docker-compose up -d web

stop:
	docker-compose down

migrate:
	docker-compose build migrator \
	&& docker-compose run --rm migrator -n -defaultSchema=public -schemas=public -url=jdbc:postgresql://db:5432/postgres -user=postgres -password=postgres migrate
