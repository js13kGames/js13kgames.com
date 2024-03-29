.PHONY: migrate start stop types logs admin bash

start:
	docker-compose down \
	&& docker-compose up -d web

stop:
	docker-compose down

admin:
	docker-compose up -d admin

migrate:
	docker-compose build migrator \
	&& docker-compose run --rm migrator -n -defaultSchema=public -schemas=public -url=jdbc:postgresql://db:5432/postgres -user=postgres -password=postgres migrate

types:
	docker-compose exec web /web/bin/generate_types.sh

logs:
	docker-compose logs -f web

bash:
	docker-compose exec web /bin/bash
