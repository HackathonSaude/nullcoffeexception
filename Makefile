up:
	docker-compose up -d

kill:
	docker-compose kill

rm: kill
	docker-compose rm -f

restart: rm up

connect-app:
	docker exec -it app bash

connect-db:
	docker exec -it db bash
