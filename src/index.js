function generatePoem(event){
event.preventDefault();

new Typewriter('#poem', {
    strings: "the poem will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-gen-form");
poemFormElement.addEventListener("submit", generatePoem);