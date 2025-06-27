let distance = 0;

let isLeft = false;

window.addEventListener("DOMContentLoaded", function () {
  const carousel = new Carousel();
  document.getElementById("left").classList.add("none");
  document.querySelector(".left").addEventListener("click", function (e) {
    e.preventDefault();

    carousel.right();

    if (distance >= -200 && distance < 0) {
      distance += 100;

      document.querySelectorAll(".web").forEach((elem) => {
        elem.style.transform = "translate(" + distance + "%, 0)";
      });
    }
  });
  document.querySelector(".right").addEventListener("click", function (e) {
    e.preventDefault();

    carousel.left();
    if (distance > -200) {
      distance -= 100;

      document.querySelectorAll(".web").forEach((elem) => {
        elem.style.transform = "translate(" + distance + "%, 0)";
      });
    }
  });
});
class Arrows {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  get_position() {
    if (!this.left && this.right) {
      return "left";
    }
    if (this.left && this.right) {
      return "center";
    }
    if (this.left && !this.right) {
      return "right";
    }
  }
}

class Position {
  constructor(position) {
    this.position = position;
  }

  get_style() {
    if (this.position === "left") {
      document.getElementById("left").classList.remove("none");
      document.getElementById("right").classList.add("none");
    }
    if (this.position === "right") {
      document.getElementById("right").classList.remove("none");
      document.getElementById("left").classList.add("none");
    }
    if (this.position === "center") {
      document.getElementById("right").classList.remove("none");
      document.getElementById("left").classList.remove("none");
    }
  }
}

class Carousel {
  visible_card_number = 2;
  right() {
    let arrows = null;
    this.visible_card_number++;

    if (this.visible_card_number === 0) {
      arrows = new Arrows(false, true);
      const position = arrows.get_position();
      return new Position(position).get_style();
    }
    if (this.visible_card_number === 1) {
      arrows = new Arrows(true, true);
      const position = arrows.get_position();
      return new Position(position).get_style();
    }
    if (this.visible_card_number === 2) {
      arrows = new Arrows(true, false);
      const position = arrows.get_position();
      return new Position(position).get_style();
    }
  }
  left() {
    let arrows = null;
    this.visible_card_number--;

    if (this.visible_card_number === 2) {
      arrows = new Arrows(true, false);
      const position = arrows.get_position();
      return new Position(position).get_style();
    }
    if (this.visible_card_number === 1) {
      arrows = new Arrows(true, true);
      const position = arrows.get_position();
      return new Position(position).get_style();
    }
    if (this.visible_card_number === 0) {
      arrows = new Arrows(false, true);
      const position = arrows.get_position();
      return new Position(position).get_style();
    }
  }
}
