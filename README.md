# Node.js Mysql Rest Api
Node.JS ES6 ile geliştirilmiş bir Rest Api projesidir. Veritabanı olarak MySQL kullanılmıştır. (Veritabanı kurulumu için adımları takip ediniz.)

# Database Configuration
Database olarak sık kullanılan Nordwind örnek veritabanı kullanılmıştır. Mysql için aşağıdaki repositoryi inceleyniz.

[Mysql Nordwind Database](https://github.com/dalers/mywind)

```javascript
const mysqlConnection = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "1",
    database: "northwind",
    port: "3306"
});
```

# Customers

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /customers | `GET` | Empty | List all customers. |
| /customers | `POST` | {company: 'A Company', first_name:'Özgür', lastname:'SARIOĞLAN' } | Create a new customer. |
| /customers/:id | `GET` | Empty | Get a customer. |
| /customers/:id | `PUT` | {company: 'B Company', first_name:'Ali', lastname:'SARIOĞLAN'} | Update a customer with new info. |
| /customers/:id | `DELETE` | Empty | Delete a customer. |


# Other Endpoints

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /customers | `GET` | Empty | List all customers. |
| /customers/:id | `GET` | Empty | Get a customer. |
| /employees | `GET` | Empty | List all employees. |
| /employees/:id | `GET` | Empty | Get a employee. |
| /invoices | `GET` | Empty | List all invoices. |
| /invoices/:id | `GET` | Empty | Get a invoice. |
| /orders | `GET` | Empty | List all orders. |
| /orders/:id | `GET` | Empty | Get a order. |
| /products | `GET` | Empty | List all products. |
| /products/:id | `GET` | Empty | Get a product. |


# Demo
[Live demo on Heroku (Soon)](#)

iyi eğlenceler!