## Демо каталога c использованием Laravel, GraphQL, GraphQL Code Generator, Vue Apollo и ElasticSearch

### Установка
1. Выполнить `cp .env-example .env` и, при необходимости, изменить переменные окружения  
2. Установка пакетов `composer install`
3. Запуск приложения в docker `./vendor/bin/sail up`
4. Изменить переменные окружения DB_HOST и ELASTICSEARCH_HOST на те, что выведет команда `docker inspect -f {{range.NetworkSettings.Networks}}{{.Gateway}}{{end}} <container-name>`. Например, в моем случае команда `docker inspect -f {{range.NetworkSettings.Networks}}{{.Gateway}}{{end}} laravel-vue-spa-demo-catalog_mysql_1` выдала `172.22.0.1`, поэтому в .env файле необходимо указать `DB_HOST=172.22.0.1`
5. Выполнить миграции и засеять БД данными `./vendor/bin/sail artisan migrate:fresh --seed`
6. Запустить индексацию товаров `./vendor/bin/sail artisan elasticsearch:reindex-items`
7. Установка пакетов `npm ci`
8. Сборка `npm run development`

После этого демо будет доступно по адресу APP_URL:APP_HOST
