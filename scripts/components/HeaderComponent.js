var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.router.on('route',()=>{
			this.forceUpdate();
		});
	},
	render:function(){
		return(
			<div>
				<div>
				<img className='headerFace'src='./assets/Face.png' />
				jimiwroteablog
				</div>
				<nav className='nav'>
					<ul>
						<li><a href=''>DICK</a></li>
						<li><a href=''>TANGO</a></li>
						<li><a href=''>ROGER</a></li>
						<li><a href=''>ROCKHOLD</a></li>
					</ul>	
				</nav>
			</div>
		);
	}
});