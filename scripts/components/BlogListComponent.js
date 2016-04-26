var React =require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render:function(){
		return(
			<div class='post-float'>
				<p class='post-meta'> April 26, 2016</p>
				<h3><a class='post-link' href='/2016/04/26/hello'> The first post</a> </h3>
				<p>Learning to just jump in</p>
			</div>


		);
	}

});