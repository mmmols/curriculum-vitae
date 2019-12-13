const uuidv4 = require("./helpers");

const companies = [
  {
    id: uuidv4(),
    title: "Firtal",
    started_at: "Nov 2017",
    ended_at: "Present",
    position: "Software Developer"
  },
  {
    id: uuidv4(),
    title: "Nobrainer Web",
    started_at: "May 2017",
    ended_at: "Jul 2017",
    position: "Frontend Developer"
  },
  {
    id: uuidv4(),
    title: "Misena ApS",
    started_at: "Aug 2016",
    ended_at: "Nov 2016",
    position: "Web Developer"
  },
  {
    id: uuidv4(),
    title: "Ideaweb ApS",
    started_at: "Jan 2015",
    ended_at: "Mar 2015",
    position: "Web Developer"
  }
];

module.exports = companies;
