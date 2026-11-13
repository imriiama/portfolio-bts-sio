const button = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");
const mobile = window.matchMedia("(max-width: 42rem)");

function setMenu(open) {
  navigation.hidden = mobile.matches && !open;
  button.setAttribute("aria-expanded", String(mobile.matches && open));
}

function syncLayout() {
  button.hidden = !mobile.matches;
  if (mobile.matches && navigation.contains(document.activeElement)) {
    button.focus();
  }
  setMenu(false);
}

button.addEventListener("click", () => {
  setMenu(button.getAttribute("aria-expanded") === "false");
});

document.querySelector(".site-header").addEventListener("keydown", (event) => {
  if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    button.focus();
  }
});

mobile.addEventListener("change", syncLayout);
syncLayout();
