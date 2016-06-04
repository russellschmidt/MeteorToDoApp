import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';

import './task.js';

import './body.html';
 
Template.body.helpers({
  tasks() {
  	return Tasks.find({});
  },
});

Template.body.events({
	'submit .new-task'(event) {
		//console.log(event);
		event.preventDefault();

		const target = event.target;
		const text = target.text.value;

		Tasks.insert({
			text,
			createdAt: new Date(),
		});

		target.text.value = '';
	},
});

Template.body.helpers({
	tasks() {
		return Tasks.find({}, { sort: { createdAt: -1 } });
	}
})