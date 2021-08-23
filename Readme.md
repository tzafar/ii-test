# Products API
This API lets you create products, order, add products to orders and export the data periodically

## Local setup
1. Download the repository
2. `cd` in that directory where the code is downloaded
3. place the provided `.env` file in the root directory
4. run `npm run start`

## Endpoints
### Create a product
Url:
 
```http://localhost:3000/products```

Request type: `POST`

Request body:
```
{
    "name": "Iphone",
    "price": 3000
}
```
Response

```$xslt
{
    "name": "Iphone",
    "price": 3000,
    "status": "active",
    "merchant_id": 1
}
```
### List all products
Url:
 
```http://localhost:3000/products```

Request type: `GET`

Response

```$xslt
[
    {
        "id": 1,
        "name": "Iphone",
        "merchant_id": 1,
        "price": 1000,
        "status": "active",
        "created_at": "2021-08-21T17:45:50.000Z"
    },
    {
        "id": 2,
        "name": "Ipad",
        "merchant_id": 1,
        "price": 250,
        "status": "active",
        "created_at": "2021-08-21T17:48:20.000Z"
    }
]
```

### Create an Order
Url:
 
```http://localhost:3000/orders```

Request Type: `POST`

Request body:
```
{
   "userId": 11,
   "status": "incomplete"
}
```
Response

```$xslt
{
    "user_id": 11,
    "status": "incomplete"
}
```

### List products in an Order
Url: 
 
```
http://localhost:3000/products/search?orderId=1
```
Request Type: `GET`

Response

```
[
    {
        "id": 1,
        "name": "Iphone",
        "price": 3000
    },
    {
        "id": 2,
        "name": "Iphone",
        "price": 3000
    }
]
```

### Add a product to an order
Url: 
 
```
http://localhost:3000/orders/addproduct
```
Request Type: `POST`

Request body:

```
{
   "orderId": 1,
   "productId": 1,
   "quanitty":2
}
```

Response

```
{
    "id": 0,
    "order_id": 1,
    "product_id": 1,
    "quantity": 1
}
```

### Export order data
```
http://localhost:3000/orders/airtable
```
Request Type: `GET`

Response

```
Http 200
```

## Scheduling
There is  scheduler configured in `scheduler.js` that runs every Monday 7am UTC to export the orders data to Airtable, Getting http 200 means that the data is exported successfully

