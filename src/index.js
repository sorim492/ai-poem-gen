function showPoem(response){
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event){
    event.preventDefault();

    //API
    let insInput = document.querySelector("#user-ins"); 

    let apiKey = '81733468770ef6bb5cfa54d03392t9o2';
    let prompt = `User instructions: Generate a poem about ${insInput.value}`;
    let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML and separate each line with <br/>. without title. Make sure to follow the user instructions. Sign the poem with 'Shecodes AI' inside a <strong> element at the end of the poem";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden")
    poemElement.innerHTML = `<div class="generating"> Generating a poem for you about ${insInput.value}... ⏲ </div>`;
    
    axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-gen-form");
poemFormElement.addEventListener("submit", generatePoem);