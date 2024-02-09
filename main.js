const ogLinks = [
  "https://github.com/RaqDeku/SSE",
  "https://github.com/RaqDeku/Authentication-API",
  "https://github.com/RaqDeku/nodejs-clean-code",
  "https://github.com/RaqDeku/Go-Authentication-API",
  "https://github.com/RaqDeku/Create-Store-API",
];
const github = "https://cors-anywhere.herokuapp.com/";

function displayLink() {
  ogLinks.forEach((link) => {
    fetch(github + link)
      .then((response) => response.text())
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const title = doc
          .querySelector('meta[property="og:title"]')
          .getAttribute("content")
          .split(": ")[0];
        const description = doc
          .querySelector('meta[property="og:description"]')
          .getAttribute("content")
          .split("-")[0];
        const image = doc
          .querySelector('meta[property="og:image"]')
          .getAttribute("content");

        const ogDiv = document.createElement("div");
        ogDiv.classList.add("project-link");
        ogDiv.innerHTML = `
      <h2>${title}</h2>
      <p>${description}</p>
      <a href="${link}">
      <img src="${image}">
      </a>
      `;

        document.getElementById("ogDiv").appendChild(ogDiv);
      })
      .catch((err) => console.log(err));
  });
}

const projectLinks = document.querySelectorAll(".project-link");
const projectContent = document.querySelector(".project-content");

projectLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const scrollLeft = index * listOfCardElements[0].offsetWidth;
    projectContent.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  });
});

displayLink();

document.getElementById("year").innerHTML = new Date().getFullYear();
