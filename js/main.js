function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// HEADER SCROLL
let header = document.querySelector('.header');

if(!window.matchMedia('(max-width: 768px)').matches){
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 90) {
      header.classList.add('scroll');
    }
    else {
      header.classList.remove('scroll');
    }
  });
}



// PRELOADER
document.body.onload = () => {

    setTimeout(() => {
      let preloader = document.querySelector('.preloader');

      if (!preloader.classList.contains('loaded')) {
        preloader.classList.add('loaded');
        document.body.classList.remove('lock');
      }
    }, 1000);

}

// BURGER
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.nav');

headerBurger.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  headerBurger.classList.toggle('active');
})