// =========================
// Title Feature
// =========================

const title = document.getElementById("title");

function changeTitle() {
  title.addEventListener("click", function () {
    title.textContent = "madeinmemory";

    setTimeout(function () {
      title.textContent = "Alex";
    }, 2000);
  });
}

changeTitle();
