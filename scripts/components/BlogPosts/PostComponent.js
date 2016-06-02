var React = require('react');
var Backbone = require('backbone');
var PostObject = require('../../posts');

module.exports = React.createClass({
	setInitialState:function(){
		return{
			postContent:[],
			postId:[]
		};
	},
	componentWillMount: function(){
		this.setState({postId: this.props.blogNumber});
		this.setState({postContent: PostObject(this.props.blogNumber)});
	},
	componetDidMount:function(){

	},
	render:function(){
		console.log(PostObject(this.state.postId));
		console.log(this.state.postId);
		let backBoundClick = this.onBackPost;
		let nextBoundClick = this.onNextPost;
		return(
			<div className="fullPost">
				<h1>{this.state.postContent.title}</h1>
				<h4>{this.state.postContent.date}</h4>
				<div>{this.state.postContent.body}</div>
				<div>
					<span onClick={backBoundClick}>Back</span>
					<span onClick={nextBoundClick}>Next</span>
				</div>
			</div>
		);
	},
	onNextPost:function(){
			this.state.postId++;
			this.setState({postContent:PostObject(this.state.postId)});
			console.log(this.state.postContent);
			
	},
	onBackPost:function(){
			this.state.postId--;
			this.setState({postContent:PostObject(this.state.postId)});
			console.log(this.state.postContent);
			
	}
});