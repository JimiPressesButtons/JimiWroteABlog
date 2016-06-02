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
var PostComponent = require('./components/BlogPosts/PostComponent.js');

var main = document.getElementById('main');
var header = document.getElementById('header');
var footer = document.getElementById('footer');
var Router = Backbone.Router.extend({
	routes:{
		'':'blogList',
		'aug2416':'Post1',
		'blogPost':'blogPost'

	},
	blogList: function(){
		ReactDOM.render(<BlogListComponent router={router}/>,main);
	},
	blogPost: function(){
		ReactDOM.render(<PostComponent router={router} blogNumber={0}/>,main);
	}
});

var router = new Router();
Backbone.history.start();

ReactDOM.render(<HeaderComponent router={router}/>, header);
ReactDOM.render(<FooterComponent router={router}/>, footer);