//*TODO: Base (Projects) ==== JS Modules ==== */
const main = document.querySelector("#idMain");
const landing = document.querySelector("#idLanding");
const home = document.querySelector("#idHome");
const idStart = document.getElementById("btnStart"); 

//** === Next Page */
document.addEventListener("DOMContentLoaded", () => {
  idStart.addEventListener("click", (e) => {
    e.preventDefault();
    
    const nextPage = this.getAttribute("href"); 
    //home = this.getAttribute("href");

    main.classList.add("display-out");
    main.addEventListener("transitioned", () => {
      window.location.href = nextPage;
    })
  })
}); 