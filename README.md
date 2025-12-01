## ShoppyGlobe — Backend ##

(Node.js + Express + MongoDB)

## Features

Register / Login (JWT based)

List products (GET /api/products)

Product detail (GET /api/products/:id)

Add item to cart (protected) (POST /api/cart)

List user cart items (protected) (GET /api/cart)

Update cart item quantity (protected) (PUT /api/cart/:id)

Remove cart item (protected) (DELETE /api/cart/:id)

Simple authorization: users can only update/delete their own cart items

Simple error handling middleware

## Prerequisites

Node.js 

npm 

MongoDB:

Local MongoDB server

## Install

Clone repo :

git clone 
cd ShoppyGlobe-backend


## Install dependencies:

npm install

Run the server

Start the server (dev):

npm start

## Testing with Thunder Client :

Register: POST /api/register → capture user created.

Login: POST /api/login → copy token.

Set header for protected requests:

Key: Authorization

Value: JWT <token> 

Add to cart: POST /api/cart with productId & quantity.

Get cart: GET /api/cart to confirm items.

Update/Delete: PUT /api/cart/:id / DELETE /api/cart/:id

Author

Shivam Swaroop Dubey