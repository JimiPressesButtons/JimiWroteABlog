var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	render:function(){
		return(
			<div>
				<div className='row'>
					<div className='four columns'>
						<p>Jimi Stitts</p>

					</div>
					<div className='four columns'>
						<p>JimiTookPictures</p>
						<p>JimiTweeted</p>
						<p>JimiPressesButtons</p>
					</div>
				</div>
			</div>
		);
	}
});