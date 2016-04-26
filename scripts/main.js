/*jslint node: true */
"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;

var BlogListComponent = require('./components/BlogListComponent.js');

var main = document.getElementById('main');
var nav = document.getElementById('nav');
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
