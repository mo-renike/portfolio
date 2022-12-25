import fitness from "../../Assets/img/fitness.png";
import amala from "../../Assets/img/amala.png";
import github from "../../Assets/img/githubs.png";
import edutech from "../../Assets/img/edutech.png";

export const ProjectsData = [
  {
    id: 1,
    name: "Fitness App",
    det: "A React based app that displays gym execrises with corresponding gifs and a details page. React, SCSS, WebAPIs",
    code: "https://github.com/mo-renike/fitness",
    live: "https://fitnessexercises.netlify.app",
    img: fitness,
  },
  {
    id: 2,
    name: "Everything Amala",
    det: "Fetch all my github repos using the github API. Implement sort, error-boundary, nested routes, pagination and search functionality.",
    code: "https://github.com/mo-renike/everything-amala",
    live: "https://everything-amala.vercel.app/",
    img: amala,
  },
  {
    id: 3,
    name: "GitHub Repos",
    det: "A React-Based Web Application to find amala spots closest to user location, reviews, opening hours and more details using Google Places API and Geolocation API.",
    code: "https://github.com/mo-renike/ALTSch-FE-Exam",
    live: "https://altsch-fe-exam.vercel.app/",
    img: github,
  },
  {
    id: 4,
    name: "Edutech Website",
    det: "Implementation of a figma website design using HTML, Sass and Vanilla Javascript",
    code: "https://github.com/mo-renike/edutech",
    live: "https://mo-renike.github.io/edutech/",
    img: edutech,
  },
];
