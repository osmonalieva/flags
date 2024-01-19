let header = document.querySelector(".header");
let hero = document.querySelector(".hero");
let search = document.querySelector(".search");
let btnsearch = document.querySelector(".btn");
let all = document.querySelector(".all");
let az = document.querySelector(".az");
let za = document.querySelector(".za");
let population = document.querySelector(".population");
let Asia = document.querySelector(".Asia");
let Europe = document.querySelector(".Europe");
// let slect = document.querySelector("#select");

let API = "https://restcountries.com/v3.1/all";

getData();

function getData() {
  fetch(API)
    .then((data) => data.json())
    .then((flags) => {
      flags.forEach((el) => {
        let image = document.createElement("img");
        let country = document.createElement("h3");
        let people = document.createElement("h4");
        let regin = document.createElement("h5");
        let block = document.createElement("div");

        image.src = el.flags.png;
        country.innerHTML = el.capital;
        people.innerHTML = el.population;
        regin.innerHTML = el.region;

        image.classList.add("image");
        block.classList.add("block");

        block.append(image);
        block.append(country);
        block.append(people);
        block.append(regin);
        console.log(el);
        hero.append(block);
      });
    });
}
function searchFlag() {
  fetch(`https://restcountries.com/v3.1/name/${search.value}`).then((data) =>
    data.json().then((flag) => {
      flag.forEach((el) => {
        let image = document.createElement("img");
        let country = document.createElement("h3");
        let people = document.createElement("h4");
        let regin = document.createElement("h5");
        let block = document.createElement("div");

        image.src = el.flags.png;
        country.innerHTML = el.capital;
        people.innerHTML = el.population;
        regin.innerHTML = el.region;

        image.classList.add("image");
        block.classList.add("block");

        block.append(image);
        block.append(country);
        block.append(people);
        block.append(regin);
        hero.append(block);
      });
      // console.log(flag);
    })
  );
}
function Population() {
  fetch(API).then((data) =>
    data.json().then((flags) => {
      flags.sort((a, b) => b.population - a.population);
      flags.forEach((el) => {
        let image = document.createElement("img");
        let country = document.createElement("h3");
        let people = document.createElement("h4");
        let regin = document.createElement("h5");
        let block = document.createElement("div");

        image.src = el.flags.png;
        country.innerHTML = el.capital;
        people.innerHTML = el.population;
        regin.innerHTML = el.region;

        image.classList.add("image");
        block.classList.add("block");

        block.append(image);
        block.append(country);
        block.append(people);
        block.append(regin);
        hero.append(block);
      });
    })
  );
}
function alphavit() {
  fetch(API).then((data) =>
    data.json().then((flags) => {
      flags.sort((a, b) => b.name.common.localeCompare(a.name.common));
      flags.forEach((el) => {
        let image = document.createElement("img");
        let country = document.createElement("h3");
        let people = document.createElement("h4");
        let regin = document.createElement("h5");
        let block = document.createElement("div");

        image.src = el.flags.png;
        country.innerHTML = el.capital;
        people.innerHTML = el.population;
        regin.innerHTML = el.region;

        image.classList.add("image");
        block.classList.add("block");

        block.append(image);
        block.append(country);
        block.append(people);
        block.append(regin);
        hero.append(block);
      });
    })
  );
}
function Regioon() {
  fetch(API).then((data) =>
    data.json().then((flags) => {
      flags.forEach((el) => {
        if (el.region == "Asia") {
          let image = document.createElement("img");
          let country = document.createElement("h3");
          let people = document.createElement("h4");
          let regin = document.createElement("h5");
          let block = document.createElement("div");

          image.src = el.flags.png;
          country.innerHTML = el.capital;
          people.innerHTML = el.population;
          regin.innerHTML = el.region;

          image.classList.add("image");
          block.classList.add("block");

          block.append(image);
          block.append(country);
          block.append(people);
          block.append(regin);
          hero.append(block);
        }
      });
    })
  );
}
function Bishkek() {
  fetch(API).then((data) =>
    data.json().then((flags) => {
      flags.forEach((el) => {
        if (el.name.common == "Kyrgyzstan") {
          let image = document.createElement("img");
          let country = document.createElement("h3");
          let people = document.createElement("h4");
          let regin = document.createElement("h5");
          let block = document.createElement("div");

          image.src = el.flags.png;
          country.innerHTML = el.capital;
          people.innerHTML = el.population;
          regin.innerHTML = el.region;

          image.classList.add("image");
          block.classList.add("block");

          block.append(image);
          block.append(country);
          block.append(people);
          block.append(regin);
          hero.append(block);
        }
      });
    })
  );
}
function Region() {
  fetch(API).then((data) =>
    data.json().then((flags) => {
      flags.forEach((el) => {
        if (el.region == "Europe") {
          let image = document.createElement("img");
          let country = document.createElement("h3");
          let people = document.createElement("h4");
          let regin = document.createElement("h5");
          let block = document.createElement("div");

          image.src = el.flags.png;
          country.innerHTML = el.capital;
          people.innerHTML = el.population;
          regin.innerHTML = el.region;

          image.classList.add("image");
          block.classList.add("block");

          block.append(image);
          block.append(country);
          block.append(people);
          block.append(regin);
          hero.append(block);
        }
      });
    })
  );
}
function alphavitReverse() {
  fetch(API).then((data) =>
    data.json().then((flags) => {
      flags.sort((a, b) => a.name.common.localeCompare(b.name.common));
      flags.forEach((el) => {
        let image = document.createElement("img");
        let country = document.createElement("h3");
        let people = document.createElement("h4");
        let regin = document.createElement("h5");
        let block = document.createElement("div");

        image.src = el.flags.png;
        country.innerHTML = el.capital;
        people.innerHTML = el.population;
        regin.innerHTML = el.region;

        image.classList.add("image");
        block.classList.add("block");

        block.append(image);
        block.append(country);
        block.append(people);
        block.append(regin);
        hero.append(block);
      });
    })
  );
}
// slect.addEventListener("change", (e) => {
//   let item = e.target.value;
//   if (item == "population") {
//     hero.innerHTML = "";
//     Population();
//   } else if (item == "za") {
//     hero.innerHTML = "";
//     alphavit();
//   } else if (item == "az") {
//     hero.innerHTML = "";
//     alphavitReverse();
//   } else if (item == "Asia") {
//     hero.innerHTML = "";
//     Regioon();
//   } else if (item == "Europe") {
//     hero.innerHTML = "";
//     Region();
//   } else if (item == "Bishkek") {
//     hero.innerHTML = "";
//     Bishkek();
//   }
// });

btnsearch.addEventListener("click", () => {
  searchFlag();
  hero.innerHTML = "";
});
all.addEventListener("click", () => {
  search.value = "";
  hero.innerHTML = "";
  getData();
});
az.addEventListener('click',()=>{
  hero.innerHTML = "";
  alphavitReverse();
})
za.addEventListener('click',()=>{
  hero.innerHTML = "";
  alphavit();
})
population.addEventListener('click',()=>{
  hero.innerHTML = "";
  Population();
})
Asia.addEventListener('click',()=>{
  hero.innerHTML = "";
  Regioon();
})
Europe.addEventListener('click',()=>{
  hero.innerHTML = "";
  Region();
})
