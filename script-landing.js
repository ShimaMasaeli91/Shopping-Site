"use strict";

// the reason i'm using a data attribute here instead of a class is because it makes working with javascript so much easier because you don't have to worry about overlap between your classes and your javascript
const buttons = document.querySelectorAll("[data-carousel-button]");

// whenever we click on this button all i want to do is essentially just swap to the next image so in order to determine if we're going to go to the next image of the previous image inside of our html where we have our data carousel for buttons we can actually set a value for these
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // this (button.dataset.carouselButton) is going to access the property that we set in our html (which is either prev or next)
    // we just say hey if that is equal to next then we want to return the value one (next image), otherwise return the value negative one (previous image)
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    // then I want to get all my slides. what we're doing is going from our button to this carousel and then from the carousel i want to select this slide container (ul with the property of data-slides)
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    // so now i can get the active slide! so i can say const active slide is equal to my slides. i just want to get this slide here that has that data active attribute on it (which we already have on our very first slide).
    const activeSlide = slides.querySelector("[data-active]");

    //and then i want to get the new index! the new index is super straightforward. first we need to convert our slides to an array (the children of them). so we're going to say dot dot dot slides dot children (this will convert to an array). then what i want to do is i want to get the index of my active slide in that array and i just want to add in that the offset which is either going to be negative 1 so it'll subtract 1 or positive 1 so it'll add 1. then since this is going to loop so once we get to our last image we want to loop back to the beginning and if we go from our beginning image backwards we want to go to our last image, we're going to have a few ifs.
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    // our new index here, is less than zero so if we're going backwards past our first image well i just want to go to our last image so we'll say new index is equal to our slides dot children dot length minus one (this is going to be the index of our very last element). and now here if our new index is greater than or equal to our length of our slide (so slides dot children dot length this means that we've passed the very last slide) so i want to just loop back over to start at the very first slide and this just makes sure it's going to be a continuous loop of images
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    // then what we can do is we can say slides.children we want to get the one at the new index and we can set the data set dot active equal to true.
    slides.children[newIndex].dataset.active = true;

    // then we can use this delete keyword here to delete the active data set from our current active slide
    // so all this code does is add the data set active class or attribute to our currently new active slide and this removes it from the active slide that was active before
    delete activeSlide.dataset.active;
  });
});

const bookGroups = document.querySelectorAll(".book-group");

bookGroups.forEach((bookGroup) => {
  let bookContainer = bookGroup.querySelector("[data-book-container]");

  let detailedModal = bookGroup.querySelector("[data-detailed-modal]");

  let closeBtn = detailedModal.querySelector("[data-close-btn]");

  const openDetailsModal = function () {
    detailedModal.style.display = "block";
  };

  const closeDetailsModal = function () {
    detailedModal.style.display = "none";
  };

  bookContainer.addEventListener("click", openDetailsModal);
  closeBtn.addEventListener("click", closeDetailsModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !detailedModal.classList.contains("hidden")) {
      closeDetailsModal();
    }
  });
});

// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
// ) {}
// let searchField = document.querySelector("[data-search-field]");
// console.log(searchField);
// searchField = searchField.placeholder = "Search...";
const acountCart = document.querySelector("[data-acount-cart]");
acountCart.style.display = "none";
const menuIcon = document.querySelector("[data-menu-area]");
const modal = document.querySelector(".modal-menu-mobile");
const overlay = document.querySelector("[data-overlay]");
const btnClose = document.querySelector(".close-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
menuIcon.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// var heroSection = document.querySelector("[data-hero-section]");

// var colors = [
//   "#CAF0F8",
//   "#ADE8F4",
//   "#90E0EF",
//   "#48CAE4",
//   "#00B4D8",
//   "#0096C7",
//   "#0077B6",
//   "#023E8A",
//   "#0077B6",
//   "#0096C7",
//   "#00B4D8",
//   "#48CAE4",
//   "#90E0EF",
//   "#ADE8F4",
// ];
// var i = 0;

// function changeColor() {
//   heroSection.style.background = colors[i];

//   i++;
//   if (i === colors.length) {
//     i = 0;
//   }
//   heroSection.style.transition = "background-color 3s ease-in-out";
// }

// setInterval(changeColor, 1000);

// const grid = document.querySelector(".grid-best-sellers");
// const bookGroupElements = document.querySelectorAll(".book-group");

// let visibleBookGroups = 3;

// function showBookGroups() {
//   for (let i = 0; i < visibleBookGroups; i++) {
//     bookGroupElements[i].style.display = "block";
//   }
// }

// function hideLoadingSnippet() {
//   const loadingSnippet = document.querySelector(".loading");
//   if (loadingSnippet) {
//     loadingSnippet.style.display = none;
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // Add the loadingSnippet element to the DOM
//   const loadingSnippet = document.createElement("div");
//   loadingSnippet.classList.add("loading");
//   loadingSnippet.innerHTML =
//     "<img src='images/loading.gif' alt='Loading icon'>";

//   // Wait until the document.body element is available
//   document.addEventListener("DOMContentLoaded", function () {
//     loadingSnippet.appendChild(document.body);
//   });

//   hideLoadingSnippet();
// });

// grid.addEventListener("scroll", function () {
//   if (grid.scrollTop + grid.clientHeight >= grid.scrollHeight - 100) {
//     visibleBookGroups += 3;
//     showBookGroups();
//   }
// });

// const pagination = document.querySelector(".pagination");
// const prevButton = pagination.querySelector(".prev");
// const nextButton = pagination.querySelector(".next");
// const numberButtons = pagination.querySelectorAll(".number");

// let currentPage = 1;

// prevButton.addEventListener("click", () => {
//   currentPage--;
//   updatePagination();
// });

// nextButton.addEventListener("click", () => {
//   currentPage++;
//   updatePagination();
// });

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     currentPage = button.textContent;
//     updatePagination();
//   });
// });

// function updatePagination() {
//   numberButtons.forEach((button) => {
//     button.classList.remove("active");
//   });

//   numberButtons[currentPage - 1].classList.add("active");

//   if (currentPage === 1) {
//     prevButton.disabled = true;
//   } else {
//     prevButton.disabled = false;
//   }

//   if (currentPage === numberButtons.length) {
//     nextButton.disabled = true;
//   } else {
//     nextButton.disabled = false;
//   }
// }

//Search Bar
// const bookCardTemplate = document.querySelector("[data-book-template]");
// const bookCardContainer = document.querySelector("[data-book-cards-container]");
// const searchInput = document.querySelector("[data-search]");

// let books = [];

// searchInput.addEventListener("input", function (e) {
//   const value = e.target.value.toLowerCase();
//   books.forEach((book) => {
//     const isVisible =
//       book.title.toLowerCase().includes(value) ||
//       book.author.toLowerCase().includes(value);

//     book.element.classList.toggle("hide", !isVisible);
//   });
// });

// //for landing page at the same time

// fetch("http://localhost:3000/landing-pages")
//   .then((res) => res.json())
//   .then((data) => {
//     books = data.map((book) => {
//       const card = bookCardTemplate.content.cloneNode(true).children[0];

//       const header = card.querySelector("[data-header]");
//       const body = card.querySelector("[data-body]");
//       header.textContent = book.book_title;
//       body.textContent = book.author_name;
//       bookCardContainer.append(card);
//       return {
//         id: book.id,
//         title: book.book_title,
//         author: book.author_name,
//         element: card,
//       };
//     });
//   });
//

//Search Bar and Landing Page Template
const bookCardTemplate = document.querySelector("[data-book-template]");
const bookCardContainer = document.querySelector("[data-book-cards-container]");
const searchInput = document.querySelector("[data-search]");

let books = [];

searchInput.addEventListener("input", function (e) {
  const value = e.target.value.toLowerCase();
  books.forEach((book) => {
    const isVisible =
      book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value);

    book.element.classList.toggle("hide", !isVisible);
  });
});

fetch("http://localhost:3000/landing-pages")
  .then((res) => res.json())
  .then((data) => {
    books = data.map((book) => {
      const card = bookCardTemplate.content.cloneNode(true).children[0];

      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = book.book_title;
      body.textContent = book.author_name;
      bookCardContainer.append(card);

      // To store data in local storage
      card.addEventListener("click", () => {
        const bookId = book.id;
        localStorage.setItem("bookId", bookId);
        const bookImageSrc = book.image_src;
        localStorage.setItem("bookImageSrc", bookImageSrc);
        const bookImageAlt = book.image_alt;
        localStorage.setItem("bookImageAlt", bookImageAlt);
        const bookTitle = book.book_title;
        localStorage.setItem("bookTitle", bookTitle);
        const bookAuthor = book.author_name;
        localStorage.setItem("bookAuthor", bookAuthor);
        const bookRate = book.rating;
        localStorage.setItem("bookRate", bookRate);
        const bookRateCount = book.rating_count;
        localStorage.setItem("bookRateCount", bookRateCount);
        const bookPrice = book.price;
        localStorage.setItem("bookPrice", bookPrice);
        const bookDescription = book.description;
        localStorage.setItem("bookDescription", bookDescription);
      });

      return {
        id: book.id,
        title: book.book_title,
        author: book.author_name,
        element: card,
      };
    });
  });
//

const overlay1 = document.querySelector("[data-overlay-1]");
const searchInputSvg = document.querySelector("[data-search-input-svg]");
// const inputGroup = document.querySelector("[data-search-input-group]");
// const searchWrapper = document.querySelector("[data-search-wrapper]");
const showBookCards = function () {
  bookCardContainer.style.display = "block";
  searchInputSvg.style.boxShadow = "0px 0px 3px 3px rgb(3, 4, 94, 0.1)";
  // searchWrapper.style.transform = "translateY(45px)";
  bookCardContainer.style.boxShadow = "0px 0px 3px 3px rgb(3, 4, 94, 0.1)";
  overlay1.classList.remove("hide");
  // inputGroup.style.marginTop = "140px";
};
const closeBookCards = function () {
  bookCardContainer.style.display = "none";
  overlay1.classList.add("hide");
  searchInputSvg.style.boxShadow = "0px 0px 0px 0px";
  // inputGroup.style.marginTop = "0px";
  // searchWrapper.style.transform = "translateY(0px)";
};
searchInput.addEventListener("click", showBookCards);

overlay1.addEventListener("click", closeBookCards);

//Star Rating Box
//Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll("[data-star]");
// console.log(stars);

//Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  //Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    //Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // And remove the "active" class from any stars with a higher index
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

//Landing-page data reading from ./ladning-page-api/db.json

const bookLandingTemplate = document.querySelector(
  "[data-book-landing-template]"
);
const bookLandingContainer = document.querySelector(
  "[data-book-landing-container]"
);

let landingPages = [];

fetch("http://localhost:3000/landing-pages")
  .then((res) => res.json())
  .then((data) => {
    landingPages = data.map((landingPage) => {
      const cardLanding =
        bookLandingTemplate.content.cloneNode(true).children[0];

      const bookImage = cardLanding.querySelector("[data-book-cover]");
      const headerLanding = cardLanding.querySelector("[data-header-landing]");
      const author = cardLanding.querySelector("[data-author]");
      const starsCounts = cardLanding.querySelector("[data-stars-count]");
      const ratingStars = starsCounts.querySelector("[data-stars]");
      const ratingCounts = starsCounts.querySelector("[data-rating-counts]");
      const bookPrice = cardLanding.querySelector("[data-book-price]");
      const aboutBook = cardLanding.querySelector("[data-about-book]");

      bookImage.src = localStorage.getItem("bookImageSrc");
      bookImage.alt = localStorage.getItem("bookImageAlt");
      headerLanding.textContent = localStorage.getItem("bookTitle");
      author.textContent = localStorage.getItem("bookAuthor");
      ratingStars.textContent = localStorage.getItem("bookRate");
      ratingCounts.textContent = localStorage
        .getItem("bookRateCount")
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      bookPrice.textContent = `$${localStorage.getItem("bookPrice")}`;
      aboutBook.textContent = localStorage.getItem("bookDescription");

      bookLandingContainer.append(cardLanding);

      //filling the stars as much as the rating value
      const starsBoxElement = document.querySelector(".stars-box");

      const ratingValue = parseFloat(ratingStars.textContent);

      starsBoxElement.style.setProperty("--rating", ratingValue);

      // const numberOfFullStars = Math.floor(ratingValue);
      // const numberOfHalfStars = ratingValue - numberOfFullStars;

      // for (let i = 0; i < 5; i++) {
      //   const star = starsBoxElement.children[i];
      //   if (i < numberOfFullStars) {
      //     star.classList.add("full-star");
      //   } else if (i === numberOfFullStars) {
      //     star.classList.add("half-star");
      //     // Calculate the percentage of the star that should be filled.
      //     const percentageFilled = ratingValue - Math.floor(ratingValue);

      //     const halfStarElement = document.querySelector(".half-star");

      //     halfStarElement.style.width = percentageFilled * 100 + "%";
      //   }
      // }

      return {
        bookCover: landingPage.bookImage,
        title: landingPage.book_title,
        author: landingPage.author_name,
        rating: landingPage.rating,
        ratingCount: landingPage.rating_count,
        price: `$${landingPage.price}`,
        description: landingPage.description,

        element: cardLanding,
      };
    });
  });

//Only show the first .card-landing element

// var x = 768,
//   w =
//     window.innerWidth ||
//     document.documentElement.clientWidth ||
//     document.body.clientWidth;
// if (w >= x) {
//   const bookLandingTemplate = document.querySelector(
//     "[data-book-landing-template]"
//   );
//   var divList = bookLandingTemplate.getElementsByTagName("div");

//   for (var i = 0; i < divList.length; i++) {
//     if (divList[i] != bookLandingTemplate.children[0]) {
//       divList[i].style.display = "none";
//     }
//   }
// }

//to fix the position of body when clicking on the search bar and modal window
const pageBody = document.querySelector("[data-main-body]");
const fixBody = function () {
  pageBody.style.position = "fixed";
  pageBody.style.overflow = "hidden";
};
const unFixBody = function () {
  pageBody.style.position = "unset";
  pageBody.style.overflow = "scroll";
};
searchInput.addEventListener("click", fixBody);
menuIcon.addEventListener("click", fixBody);
overlay1.addEventListener("click", unFixBody);
overlay.addEventListener("click", unFixBody);
