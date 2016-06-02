var React = require('react');
var Backbone = require('backbone');
var PostObject = require('../../posts');

module.exports = React.createClass({
	setInitialState:function(){
		return{
			postContent:[],
			currentPost:[]
		};
	},
	componentWillMount: function(){
		this.setState({currentPost: this.props.blogNumber});
		
	},
	componetDidMount:function(){
		this.setState({postContent: PostObject(this.state.currentPost)});
	},
	render:function(){
		console.log(this.state.currentPost);
		let boundClick = this.onNextPost.bind(this);
		return(
			<div className="fullPost">
				<h1>{this.state.postContent.title}</h1>
				<h4>{this.state.postContent.date}</h4>
				<div>{this.state.postContent.body}</div>
				<div>
					<span>Back</span>
					<span onClick={boundClick}>Next</span>
				</div>
			</div>
		);
	},
	onNextPost:function(){
			this.state.currentPost++;
			console.log(this.state.currentPost);
			console.log(this.state.post)
			
	}
});