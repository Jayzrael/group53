const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");
const sectionTest = document.querySelector(".section1");

function updateGallery(carouselArray) {
  carouselArray.forEach((el) => {
    el.classList.remove(
      "gallery-item-1",
      "gallery-item-2",
      "gallery-item-3",
      "gallery-item-4",
      "gallery-item-5"
    );
  });

  carouselArray.slice(0, 5).forEach((el, i) => {
    el.classList.add(`gallery-item-${i + 1}`);
  });
}

function setCurrentState(carouselArray, direction) {
  if (direction.className == "gallery-controls-previous") {
    carouselArray.unshift(carouselArray.pop());
  } else {
    carouselArray.push(carouselArray.shift());
  }
  updateGallery(carouselArray);
}

function setControls(container, controls) {
  controls.forEach((control) => {
    container.appendChild(
      document.createElement("button")
    ).className = `gallery-controls-${control}`;
    document.querySelector(`.gallery-controls-${control}`).innerText = control;
  });
}

function useControls(container, carouselArray) {
  const triggers = [...container.childNodes];
  triggers.forEach((control) => {
    control.addEventListener("click", (e) => {
      e.preventDefault();
      setCurrentState(carouselArray, control);
    });
  });
}

function createCarousel(container, items, controls) {
  const carousel = {
    carouselContainer: container,
    carouselControls: controls,
    carouselArray: [...items],
  };

  setControls(galleryControlsContainer, controls);
  useControls(galleryControlsContainer, carousel.carouselArray);

  return carousel;
}

const exampleCarousel = createCarousel(
  galleryContainer,
  galleryItems,
  galleryControls
);
