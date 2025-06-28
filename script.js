window.addEventListener("scroll", (e) => {
  let rotation = window.scrollY * 0.1;
  const leave_left = document.getElementById("leave_left");
  const leave_right = document.getElementById("leave_right");
  const shadow_right = document.querySelector(".shadow_right");

  const name = document.querySelector(".name");

  const portfolio = document.querySelector(".portfolio");
  leave_left.style.transform = `translate3d(${-window.scrollY * 0.5}px, ${
    -window.scrollY * 0.3
  }px, ${-window.scrollY}px) rotateZ(-${rotation}deg)`;
  leave_right.style.transform = `translate3d(${window.scrollY * 0.3}px, ${
    -window.scrollY * 0.3
  }px, ${-window.scrollY}px) rotateZ(${rotation}deg)`;
  name.style.opacity = 0 + window.scrollY / 300;
  shadow_right.style.transform = `translate3d(${-window.scrollY}px, ${
    -window.scrollY * 0.5
  }px, ${-window.scrollY * 2}px) rotateZ(-${rotation}deg)`;
  portfolio.style.opacity = 0 + window.scrollY / 300;
  const container = document.querySelector(".container");
  if (window.scrollY <= 200) {
    container.style.zIndex = -1;
  } else {
    container.style.zIndex = 9999;
  }

  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (window.matchMedia("(min-width: 1200px)").matches) {
    if (scrollY > 0) {
      container.style.transform = `translate(-${scrollY}px, ${
        scrollY * 0.5
      }px) rotate(45deg)`;
    }
    if (
      scrollY > window.innerHeight * 0.4 &&
      scrollY < window.innerHeight * 0.8
    ) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  } else {
    if (
      scrollY > window.innerHeight * 0.6 &&
      scrollY < window.innerHeight * 1.5
    ) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  }
});

function show() {
  container_body = document.querySelector(".container_body");
  if (document.querySelector(".langues").classList.contains("show_langues")) {
    document.querySelector(".langues").classList.remove("show_langues");
  } else {
    document.querySelector(".langues").classList.add("show_langues");
  }
}
