const { Assignment } = require('../models');

const assignmentData = [
  {
    assignment_title: 'Weather Forecast',
    assignment_github_link: 'https://github.com/Susanne85/weatherDashboard',
    assignment_deploy_link: 'https://susanne85.github.io/weatherDashboard/',
    assignment_nav_id: 'weatherForecast',
    assignment_img: 'images/weather.jpg',
    assignment_text: 'This application displays the current weather and five day forecast for a city or town in Australia.',
    assignment_list: 'Openweather API for retrieving the current weather details for a locatio,Use of promises to retrieve data from third parties,Using local storage to save the towns/cities.'
  },
  {  
    assignment_title: 'Tech Blog',
    assignment_github_link: 'https://github.com/Susanne85/cmsblog',
    assignment_deploy_link: 'https://powerful-scrubland-18358.herokuapp.com/',
    assignment_nav_id: 'techBlog',
    assignment_img: 'images/dreamtime_picture.jpg',
    assignment_text: 'An application that allows a person to view blogs and comments about technical concepts.  If a user logins in then they will be able to add a comment to a blog that they created or that was created by another user, as well as update or delete their blogs.',
    assignment_list: 'Application implements Mode-View-Controller architecture, Express handlebars for templates of views,Client/Server processing to record data in a server database',
  },
  {
    assignment_title: 'Easy Appointment Tracker',
    assignment_github_link: 'https://github.com/ShaneCurtis84/Easy-Appointment-Tracker-2.0',
    assignment_deploy_link: 'https://afternoon-beyond-55572.herokuapp.com/',
    assignment_nav_id: 'easyAppointmentTracker',
    assignment_img: 'images/app-icon.png',
    assignment_text: 'This application allows a user to quickly enter information about an appointment such as who the appointment is for, who the appointment is with, appointment location and notes.  Users are able to edit or delete appointments.',
    assignment_list: 'Bulma as the CSS framework,Express Handlebars,Google Placeholder API for auto completing of an address,Google map location API for displaying an address,Application implements Mode-View-Controller architecture',
  },
];

const seedAssignment = () => Assignment.bulkCreate(assignmentData,{
  returning: true});

module.exports = seedAssignment;
