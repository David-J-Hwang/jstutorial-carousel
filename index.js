const slides = document.querySelectorAll('.slide')
const prevButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

let counter = 0;
// console.log(sliders)

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
  // slide.style.top = `${index * 100}%`
})

const slideImage = () => {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`
      // slide.style.transform = `translateY(-${counter * 100}%)`
    }
  )
}

prevButton.addEventListener("click", () => {
  if(counter === 0) return;
  counter = counter - 1;
  console.log(counter)
  slideImage()
})

nextButton.addEventListener("click", () => {
  if(counter === slides.length - 1) return;
  counter = counter + 1;
  console.log(counter);
  slideImage();
})