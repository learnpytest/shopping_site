# front-end-vue-alphashop
A web application for an online shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Usage
#### checkout page
This page includes two parts:
- checkout forms
- chart for products

##### Checkout forms
- There are three forms as below to fill up until completing checkout process:
  - shipping address form (enter consignee and shipping address for your goods)
  - shipping method (choose shipping method such as courier)
  - payment form (enter your credit card information to complete payment)
- You can only fill up one form at a time.  By clicking next step button under the checkout forms, you will go to the next form
- Before submitting the payment form, you can return to previous form to edit again by clicking the previous step button
- The cost of shipment will change based on what you choose for shipping method

##### Chart for products
The chart for products contains below information:
  - list of all products
  - shipment cost
  - total price
- On the list of all products, it shows each product details include:
  - product name
  - quantity of order
  - price
- The shipment cost will change based on the shipment method that you choose in the checkout form
- You can adjust the quantity of order for each product here and will see the total price change accordingly