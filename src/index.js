let breedsList = document.querySelector("#dog-breeds")

let breedDropDown = document.getElementById("breed-dropdown")


document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
        const breedsData = Object.keys(data.message);

        breedsData.forEach(breedName => {
            let card = document.createElement("li");
            card.innerText = `${breedName}`;
            breedsList.appendChild(card);

            card.addEventListener("click", () => {
                card.style.color = "red";
            });
        });

        breedDropDown.addEventListener("change", () => {
            const selectedLetter = breedDropDown.value.toLowerCase();
            const filteredBreeds = breedsData.filter(breed => breed.startsWith(selectedLetter));

            updateBreedsList(filteredBreeds);
        });
    });

    function updateBreedsList(breeds) {
        
        breedsList.innerHTML = "";

        breeds.forEach(breedName => {
            let card = document.createElement("li");
            card.innerText = breedName;
            breedsList.appendChild(card);

            card.addEventListener("click", () => {
                card.style.color = "red";
            });
        });
    }
});
  






































// fetch("https://dog.ceo/api/breeds/image/random/4")
// .then (res => res.json())
// .then (data => {
//     const links = data.message;
//     links.forEach(link => {
//         let card = document.createElement("li")
//         card.innerHTML = `
//         <img src="${link}">`            
//         boo.appendChild(card)