/*jslint node: true */
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var BlogListComponent = require('./components/BlogListComponent.js');
var HeaderComponent = require('./components/HeaderComponent.js');
var FooterComponent = require('./components/FooterComponent.js');

var main = document.getElementById('main');
var header = document.getElementById('header');
var footer = document.getElementById('footer');
var Router = Backbone.Router.extend({
	routes:{
		'':'blogList',
		'blogPost':'blogPost'

	},
	blogList: function(){
		ReactDOM.render(<BlogListComponent />,main);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(<HeaderComponent router={r}/>, header);
ReactDOM.render(<FooterComponent router={r}/>, footer);