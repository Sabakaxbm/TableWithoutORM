# Тестовое задание для 

## Запуск Backend:
  1) Установить БД POSTGRESQL
  2) Открыть папку backend и в файле .env настроить конфигурацию бд 
     <div style="background: gray; padding: 10px; border: 1px solid black; color: black">Стандартные настройки:<br/> POSTGRESQL_USER=postgres<br/>
     POSTGRESQL_HOST=localhost<br/>
     POSTGRESQL_DATABASE=test<br/>
     POSTGRESQL_PASSWORD=admin<br/>
     POSTGRESQL_PORT=5454</div><br/>
  3) Открыть в консоли папку проекта ".../TableTest/backend" и запустить npm install
  4) Команда запуска npm run dev

### Методы Backend:


GET http://localhost:5501/api/distance.
<br/>
Опционально: params: { limit, page }}. 
<br/> 
Вернет все записи и количество страниц

POST http://localhost:5501/api/distance.
<br/>
Обязательно BODY:
{<br/>
"date": number | string, <br/>
"distance": number, <br/>
"amount": number, <br/>
"name": string <br/>
}. 
<br/>
Создаст новую запись в бд

###  Cтэк Backend:
     Express
     Typescript
     ajv
     pg


## Запуск Front-End:
   1) Открыть в консоли папку проекта ".../TableTest/frontend" и запустить npm install
   2) Команда запуска npm run dev

###  Cтэк Front-End:
     React
     Typescript
     Axios
     Styled-components
