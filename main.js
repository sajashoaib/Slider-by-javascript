let nextSlide = document.getElementById("next");
let prevSlide = document.getElementById("prev");
let carouselSlide = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbnailSlide = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailSlide.querySelectorAll(".item");
let time = document.querySelector(".carousel .time");

thumbnailSlide.appendChild(thumbnailItemsDom[0]);
let timeRuning = 3000;
let timeAutoNext = 7000;

nextSlide.onclick = function () {
  showSlider("next");
};
prevSlide.onclick = function () {
  showSlider("prev");
};

let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextSlide.click();
}, timeAutoNext);

function showSlider(type) {
  let item = listItem.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  if (type == "next") {
    listItem.appendChild(item[0]);
    thumbnailSlide.appendChild(itemThumbnail[0]);
    carouselSlide.classList.add("next");
  } else {
    // let positionLastItem =item.length-1;
    listItem.prepend(item[item.length - 1]);
    thumbnailSlide.prepend(itemThumbnail[itemThumbnail.length - 1]);
    carouselSlide.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselSlide.classList.remove("next");
    carouselSlide.classList.remove("prev");
  }, timeRuning);
  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextSlide.click();
  }, timeAutoNext);
}
