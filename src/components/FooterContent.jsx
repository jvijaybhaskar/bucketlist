import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className = 'container'>				
					<span> Pending Dev tasks </span>

					
	 				<ul>
	 					<li> Done:Delete list item </li>
	 					<li> Done:Update status based on action </li>
	 					<li> Done:Added react-bootstrap module and basic layout to page </li>
	 					<li> Limit Entry of items to list </li>
	 					<li> Provision to add more details to the list (tags, priority, target date) </li>
	 					<li> Edit bucket list </li>
						<li> Auto hide status messages</li>
						<li> Persist/Update list in backend</li>
						<li> Improve look and feel</li>
						<li> View/Modify details of individual item</li>
					</ul>
				</div>
			</footer>
		);
	}
}

export default Footer;