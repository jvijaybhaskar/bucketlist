import React from 'react';

class TodoStatus extends React.Component {
	render() {
		return (
			<div>
				<span> 
					{this.props.status} 
				</span>
				{ this.props.status != "" &&
					<a href="#" onClick={this.props.onStatusClear} > Clear Status </a>
				}
			</div>
		);
	}
}

export default TodoStatus;