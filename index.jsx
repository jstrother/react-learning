var React = require('react');
var ReactDOM = require('react-dom');

var Person = function() {
	var name = 'Derek Zoolander';
	var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
	var job = 'Male Model';
	return (
		<div className="person">
			<div className="person-name">{name}</div>
			<img className="person-img" src={imgeUrl} />
			<div className="person-job">
				{job}
			</div>
		</div>
	);
};

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Person />, document.getElementByID('app'));
});