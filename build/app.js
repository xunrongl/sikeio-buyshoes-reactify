//App component
"use strict";

var App = React.createClass({
	displayName: "App",

	//render virtual DOM
	render: function render() {
		return React.createElement(
			"div",
			{ className: "site" },
			React.createElement(
				"div",
				{ className: "bg" },
				React.createElement("div", { className: "bg__img" })
			),
			React.createElement(
				"div",
				{ className: "site__main" },
				React.createElement(
					"div",
					{ className: "site__left-sidebar" },
					React.createElement(SiteTitle, null)
				),
				React.createElement(
					"div",
					{ className: "site__content" },
					React.createElement(Products, null)
				)
			),
			React.createElement(
				"div",
				{ className: "site__right-sidebar" },
				React.createElement(Cart, null),
				React.createElement(Checkout, null)
			),
			React.createElement(
				"a",
				{ className: "site__right-sidebar-toggle" },
				React.createElement("img", { src: "img/arrow-icon.svg" })
			)
		);
	}
});

window.onload = function () {
	//replace '#roor' with App component
	React.render(React.createElement(App, null), document.querySelector("#root"));
};

//SiteTitle component
var SiteTitle = React.createClass({
	displayName: "SiteTitle",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "title" },
			React.createElement(
				"h2",
				null,
				"Buy Me Shoes"
			),
			React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
		);
	}
});

//products data
var products = {
	"jameson-vulc": {
		id: "jameson-vulc",
		name: "Jameson Vulc",
		price: 64.99,
		imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
		gender: "man"
	},

	"marana-x-hook-ups": {
		id: "marana-x-hook-ups",
		name: "Marana X Hook-Up",
		price: 79.99,
		imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
		gender: "man"
	},

	"jameson-e-lite": {
		id: "jameson-e-lite",
		name: "Jameson E-Lite",
		price: 69.99,
		imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
		gender: "man"
	},

	"jameson-e-lite-julian-davidson-4": {
		id: "jameson-e-lite-julian-davidson-4",
		name: "Jameson E-Lite Julian Davidson",
		price: 74.99,
		imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
		gender: "man"
	},

	"scout-womens-6": {
		id: "scout-womens-6",
		name: "Scout Women's",
		imagePath: "img/shoes/scout-womens-6-teal-orig.png",
		price: 59.99,
		gender: "woman"
	},

	"scout-womens-coco-ho-5": {
		id: "scout-womens-coco-ho-5",
		name: "Scout Women's Coco Ho",
		imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
		price: 59.99,
		gender: "woman"
	},

	"jameson-2-womens-8": {
		id: "jameson-2-womens-8",
		name: "Jameson 2 Women's",
		imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
		price: 59.99,
		gender: "woman"
	},

	"corby-womens-2": {
		id: "corby-womens-2",
		name: "Corby Women's",
		imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
		price: 44.99,
		gender: "woman"
	}
};

//Products component
var Products = React.createClass({
	displayName: "Products",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "products" },
			Object.keys(products).map(function (item, index) {
				return React.createElement(Product, { key: index, product: products[item] });
			})
		);
	}
});

//Product component
var Product = React.createClass({
	displayName: "Product",

	render: function render() {
		var _props$product = this.props.product;
		var name = _props$product.name;
		var price = _props$product.price;
		var imagePath = _props$product.imagePath;

		return React.createElement(
			"div",
			{ className: "product" },
			React.createElement(
				"div",
				{ className: "product__display" },
				React.createElement(
					"div",
					{ className: "product__img-wrapper" },
					React.createElement("img", { className: "product__img", src: imagePath })
				),
				React.createElement(
					"div",
					{ className: "product__control" },
					React.createElement(
						"a",
						{ className: "product__add" },
						React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
					)
				),
				React.createElement(
					"div",
					{ className: "product__price" },
					"$" + price
				),
				React.createElement(
					"div",
					{ className: "product__description" },
					React.createElement(
						"div",
						{ className: "product__name" },
						name
					),
					React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
				)
			)
		);
	}
});

//cart items data
var cartItems = {
	"jameson-vulc": {
		id: "jameson-vulc",
		quantity: 1
	},

	"marana-x-hook-ups": {
		id: "marana-x-hook-ups",
		quantity: 2
	},

	"scout-womens-6": {
		id: "scout-womens-6",
		quantity: 2
	},

	"scout-womens-coco-ho-5": {
		id: "scout-womens-coco-ho-5",
		quantity: 1
	},

	"jameson-2-womens-8": {
		id: "jameson-2-womens-8",
		quantity: 1
	}
};

//Cart component
var Cart = React.createClass({
	displayName: "Cart",

	componentDidMount: function componentDidMount() {
		var $content = document.querySelector(".cart__content");
		Ps.initialize($content);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "cart" },
			React.createElement(
				"h3",
				{ className: "cart__title" },
				"Shopping Cart"
			),
			React.createElement(
				"div",
				{ className: "cart__content" },
				React.createElement(
					"h3",
					{ className: "cart__title cart__title--spacer" },
					"Shopping Cart"
				),
				Object.keys(cartItems).map(function (item, index) {
					return React.createElement(CartItem, { key: index, cartItem: cartItems[item], product: products[item] });
				})
			)
		);
	}
});

//CartItem component
var CartItem = React.createClass({
	displayName: "CartItem",

	render: function render() {
		var item = this.props.cartItem;
		var _props$cartItem = this.props.cartItem;
		var id = _props$cartItem.id;
		var quantity = _props$cartItem.quantity;
		var _products$id = products[id];
		var name = _products$id.name;
		var price = _products$id.price;
		var imagePath = _products$id.imagePath;

		return React.createElement(
			"div",
			{ className: "cart-item" },
			React.createElement(
				"div",
				{ className: "cart-item__top-part" },
				React.createElement(
					"div",
					{ className: "cart-item__image" },
					React.createElement("img", { src: imagePath })
				),
				React.createElement(
					"div",
					{ className: "cart-item__top-part__middle" },
					React.createElement(
						"div",
						{ className: "cart-item__title" },
						name
					),
					React.createElement(
						"div",
						{ className: "cart-item__price" },
						quantity > 1 ? "$" + price + " x " + quantity : "$" + price
					)
				),
				React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
			),
			React.createElement(QuantityControl, { item: item, variant: "gray" })
		);
	}
});

//Checkout component
var Checkout = React.createClass({
	displayName: "Checkout",

	render: function render() {

		var subtotal = 0;
		for (var item in cartItems) {
			subtotal += products[item].price * cartItems[item].quantity;
		}

		return React.createElement(
			"div",
			{ className: "checkout" },
			React.createElement("hr", { className: "checkout__divider" }),
			React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" }),
			React.createElement(
				"div",
				{ className: "checkout__line" },
				React.createElement(
					"div",
					{ className: "checkout__line__label" },
					"Subtotal"
				),
				React.createElement(
					"div",
					{ className: "checkout__line__amount checkout__line__amount--strikeout" },
					"$" + subtotal
				)
			),
			React.createElement(
				"a",
				{ className: "checkout__button" },
				React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
				React.createElement(
					"div",
					{ className: "checkout__button__label" },
					"Checkout"
				)
			)
		);
	}
});

//Quantity Control component
var QuantityControl = React.createClass({
	displayName: "QuantityControl",

	render: function render() {
		var quantity = this.props.item.quantity;

		return React.createElement(
			"div",
			{ className: "cart-item__qty" },
			React.createElement(
				"div",
				{ className: "adjust-qty" },
				React.createElement(
					"a",
					{ className: "adjust-qty__button" },
					"-"
				),
				React.createElement(
					"div",
					{ className: "adjust-qty__number" },
					quantity
				),
				React.createElement(
					"a",
					{ className: "adjust-qty__button" },
					"+"
				)
			)
		);
	}
});
