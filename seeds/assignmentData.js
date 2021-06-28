const { Assignment } = require('../models');

const assignmentData = [
  {  
    assignment_title: 'Random Password Generator',
    assignment_github_link: 'https://github.com/Susanne85/generatePasswordModal',
    assignment_deploy_link: 'https://susanne85.github.io/generatePasswordModal/',
    assignment_nav_id: 'randomPasswordGenerator',
    assignment_img: 'images/dreamtime_picture.jpg',
    assignment_text: 'The user selects the required character sets and length for the generated password. It concatenates all the requested character sets into one string and then uses the random math function to generate a password.',
    assignment_list: 'Modal html structure,utilises random math function to generate password, error checking to ensure that at least one character set is selected and that the password length is between 8 and 128',
  },
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
    assignment_title: 'Easy Appointment Tracker',
    assignment_github_link: 'https://github.com/ShaneCurtis84/Easy-Appointment-Tracker-2.0',
    assignment_deploy_link: 'https://afternoon-beyond-55572.herokuapp.com/',
    assignment_nav_id: 'easyAppointmentTracker',
    assignment_img: 'images/app-icon.png',
    assignment_text: 'This application allows a user to quickly enter information about an appointment.',
    assignment_list: 'Bulma as the CSS framework,Express Handlebars,Google Placeholder API for auto completing of an address,Google map location API for displaying an address',
  },
];

const seedAssignment = () => Assignment.bulkCreate(assignmentData,{
  returning: true});

module.exports = seedAssignment;
