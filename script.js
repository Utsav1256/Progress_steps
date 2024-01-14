const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");

let currentActive = 1;
next.addEventListener("click", () => {
  if (currentActive <= circles.length - 1) {
    currentActive++;
  }

  updateActive();
  updateProgress();
  updateDisabled();
});

prev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  }
  updateActive();
  updateProgress();
  updateDisabled();
});

function updateActive() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

function updateProgress() {
  const actives = document.querySelectorAll(".active");
  const progress = document.getElementById("progress");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}

function updateDisabled() {
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
