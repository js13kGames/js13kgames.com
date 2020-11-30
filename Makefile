.PHONY: migrate start stop types

start:
	docker-compose down \
	&& docker-compose up -d web

stop:
	docker-compose down

migrate:
	docker-compose build migrator \
	&& docker-compose run --rm migrator -n -defaultSchema=public -schemas=public -url=jdbc:postgresql://db:5432/postgres -user=postgres -password=postgres migrate

types:
	docker-compose exec web /web/bin/generate_types.sh
