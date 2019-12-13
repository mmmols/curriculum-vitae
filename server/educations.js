const uuidv4 = require("./helpers");

const educations = [
  {
    id: uuidv4(),
    school: "Erhvervsakademi SydVest",
    education: "PBA Web Development",
    started_at: "2015",
    ended_at: "2017"
  },
  {
    id: uuidv4(),
    school: "Erhvervsakademi SydVest",
    education: "AP Degree Multimeida Design & Communication",
    started_at: "2013",
    ended_at: "2015"
  },
  {
    id: uuidv4(),
    school: "VUC Vest",
    education: "HF",
    started_at: "2008",
    ended_at: "2010"
  }
];

module.exports = educations;
