class ImageScrollHandler {
  constructor() {
    this.imageInners = document.querySelectorAll('.js-jump');
    this.windowHeight = window.innerHeight;
    this.init();
  }

  init() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
    });
  }

  handleScroll() {
    this.imageInners.forEach((inner) => this.toggleImageState(inner));
  }

  toggleImageState(inner) {
    const image2 = inner.querySelector(".js-image-jump");
    if (!image2) return;

    const rect = inner.getBoundingClientRect();

    if (rect.top < this.windowHeight * 0.5) {
      console.log('aa');
      image2.classList.add("active");
    } else {
      image2.classList.remove("active");
    }
  }
}

window.ImageScrollHandler = ImageScrollHandler;