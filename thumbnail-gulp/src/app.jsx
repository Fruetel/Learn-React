var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
	thumbnailData: [{
		title:'Show Courses',
		number:12,
		header:'Learn React',
		description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		imageUrl:'http://idealkraft.de/wp-content/uploads/2015/04/idealkraft-logo-2015.png'
	}, {
		title:'Show Courses',
		number:25,
		header:'Learn Gulp 2',
		description:'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		imageUrl:'http://lorempixel.com/400/200/'
	}]
}

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
