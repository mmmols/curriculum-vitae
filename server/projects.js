const uuidv4 = require("./helpers");

const projects = [
  {
    id: uuidv4(),
    title: 'Tester Projects',
    'url': 'https://tester.com/'
  },
  {
    id: uuidv4(),
    title: 'Subscription and Payment Module',
    'url': 'https://helsebixen.dk/'
  },
  {
    id: uuidv4(),
    title: 'Campaign SaaS in Laravel and React'
  },
  {
    id: uuidv4(),
    title: 'Supplier SaaS in Laravel and React/Redux'
  }

];

module.exports = projects;
