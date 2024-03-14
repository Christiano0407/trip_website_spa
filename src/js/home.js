//** ====== ======== Home Page ======== ====== */
import {dataBase} from "../data/dataBase.json";
const cardsScroll = document.querySelector("#idCardScroll");
const cardsDestiny = document.querySelector("#idCardsDestiny");
const main = document.querySelector("#idMainPage"); 
const tripPage = document.querySelector("#idTrip");
const tripInfo = document.querySelector("#idTripInfo");
const btnReturn = document.querySelector(".trip__search--return");

//*? ======== Cards Principal Trip ========= */
dataBase.forEach(trip => {
  const card = document.createElement("div"); 
  card.classList.add("card"); 
  card.innerHTML = `
    <div class="card__img">
      <figure class="card-figure">
        <img class="cards-images" src=${trip.image} alt="card-images-scroll">
      </figure>
      <a class="card__save"><i class="fa-regular fa-bookmark"></i><span class="">Save</span></a>
    </div>
    <div class="card__text">
      <div class="text-top">
        <p class="text-paragraph">${trip.name}</p>
        <a class="text-icon"><i class="fa-regular fa-star"></i><span class="text-num">4.5</span></a>
      </div>
      <div class="trip-see">
        <a><i class="fa-solid fa-location-dot"></i> <span class="text-info">${trip.description}</span></a>
        <button id="idBtnSee" class="btn-trip">See More</button>
      </div>
    </div>
  `
  cardsScroll.appendChild(card); 
});

const $tripBtn = document.querySelectorAll(".btn-trip");
console.log($tripBtn);

//** ====== Changes Display Page ====== */
document.addEventListener("DOMContentLoaded", () => {
    $tripBtn.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault(); 
       // const nextPage = btn.getAttribute("href"); 

        if(tripPage) {
          main.classList.add("inactive"); 
          tripPage.classList.remove("inactive"); 
        } else {
          main.classList.remove("inactive");
          tripPage.classList.add("inactive");
        // -Solo cuando pasas a otro HTML (Page) -
         /*  const nextPageUrl = btn.getAttribute("href"); 
          window.location.href = nextPageUrl; */ 
        /*   main.addEventListener("transitioned", () => {
            window.location.href = nextPage;
         });  */
        }
      }); 
    }); 
}); 

//*? ====== Cards Travel Destiny ====== */
dataBase.forEach( destiny => {
  const cards =  document.createElement("div"); 
  cards.classList.add("cards");
  cards.innerHTML = `
      <div class="destiny__img">
        <figure class="destiny__figure">
            <img class="destiny-image" src=${destiny.image} alt=${destiny.name}>
        </figure>
      </div>
      <div class="destiny__text">
        <div class="destiny-name">
        <span>${destiny.name}</span>
        <a class="destiny-icon"><i class="fa-solid fa-star"></i><span>${destiny.stars}</span></a>
        </div>
        <a class="icons-trip"> <span>${destiny.description}</span><a/>
        <div class="destiny-price">
          <span class="prices-trip">${destiny.price}</span>
          <a class="price-icon"><i class="fa-solid fa-bookmark"></i></a>
        </div>
      </div>
  `;

  cardsDestiny.appendChild(cards); 
});

//*? === Card - Click(Change Page): Information === */
dataBase.forEach(infoCard => {
  tripInfo.innerHTML = `
  <section class="section__infoCard">
    <div class="infoCard__principal">
      <figure class="infoCard-figure">
        <img class="infoCard-img" src=${infoCard.image}>
      </figure>
    </div>

    <div class="infoCard__grid">
      <figure class="grid-figure">
        <img class="grid-img" src=${infoCard.image}>
      </figure>
      <figure class="grid-figure">
        <img class="grid-img" src=${infoCard.image}>
      </figure>
      <figure class="grid-figure">
        <img class="grid-img" src=${infoCard.image}>
      </figure>
      <figure class="grid-figure">
        <img class="grid-img" src=${infoCard.image}>
     </figure>
    </div>
  </section>
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  btnReturn.addEventListener("click", (e) => {
    e.preventDefault();
    if(main.classList.contains("inactive")) {
      tripPage.classList.add("inactive");
      main.classList.remove("inactive"); 
    }else {
      main.classList.add("inactive"); 
      tripPage.classList.remove("inactive");
    }
  }); 
}); 