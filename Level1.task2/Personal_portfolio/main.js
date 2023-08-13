const body = document.body;
  const modeIcon = document.getElementById("modeIcon");

  function toggleMode() {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    updateModeIcon();
  }

  function updateModeIcon() {
    if (body.classList.contains("dark-mode")) {
      modeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon
    } else {
      modeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>' ;// Sun icon
    }
  }


  // Scroll library
  AOS.init();

  //cursor animation

  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  window.addEventListener("mousemove", function(e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // cursorOutline.style.left = `${posX}px`;
      // cursorOutline.style.top = `${posY}px`;
      cursorOutline.animate({
          left:`${posX}px`,top:`${posY}px`
      },{duration:500,fill:"forwards"});
  });



  // Popup box

  const showPopupBtn = document.getElementById("showPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const popup = document.getElementById("popup");

showPopupBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflow = "auto";
});
