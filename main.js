const ogLinks = ["https://github.com/RaqDeku/SSE"];

function displayLink() {
  ogLinks.forEach((link) => {
    fetch(link)
      .then((response) => response.text())
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        console.log(doc);
      });
  });
}

displayLink();
