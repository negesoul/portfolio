document.querySelectorAll(".nav-link").forEach((link) => { 
  link.addEventListener("click", function (e) { 
    e.preventDefault(); 
    const targetId = this.getAttribute("href").substring(1); 
    document.getElementById(targetId).scrollIntoView({ 
      behavior: "smooth", 
    }); 
  }); 
}); 
 
document.addEventListener("DOMContentLoaded", () => { 
  const gridElement = document.querySelector(".grid"); 
  const fullscreenContainer = document.querySelector(".fullscreen-container"); 
 
  var msnry = new Masonry(".grid", { 
    itemSelector: ".grid-item", 
    horizontalOrder: true, 
    columnWidth: ".grid-sizer", 
    percentPosition: true, 
  }); 
 
  let splide = new Splide(".splide", { 
    type: "loop", 
    focus: "center", 
    autoWidth: true, 
    speed: 1000, 
    keyboard: "global", 
  }); 
  splide.mount(); 
 
  console.log(splide); 
  splide.Components.Pagination.destroy(); 
 
  function sleep(ms) { 
    return new Promise((resolve) => setTimeout(resolve, ms)); 
  } 
 
  async function doSomething() { 
    for (i = 0; i < imagesList.length; i++) { 
      // create layout image element 
      var elem = document.createElement("div"); 
      elem.classList.add("grid-item"); 
      elem.innerHTML = `<img src="${imagesList[i]}" data-splide-index="${i}" />`; 
      gridElement.appendChild(elem); 
 
      // add image to layout 
      msnry.appended(elem); 
      msnry.layout(); 
 
      // add slide to slider 
 
      var splideSlide = document.createElement("li"); 
      splideSlide.className = "splide__slide"; 
 
      var imgElement = document.createElement("img"); 
      imgElement.src = imagesList[i]; 
      splideSlide.appendChild(imgElement); 
      splide.add(splideSlide); 
 
      let elemImg = elem.querySelector("img"); 
      elemImg.addEventListener("click", (event) => { 
        console.log(event); 
        console.log(event.target); 
        fullscreenContainer.classList.add("show"); 
        let idx = event.target.getAttribute("data-splide-index"); 
        splide.Components.Move.jump(Number(idx)); 
 
        splide.Components.Controller.setIndex(Number(idx)); 
      }); 
 
      await sleep(50); 
    } 
  } 
  async function doSomething2() { 
    await doSomething(); 
    document.body.classList.add("body-grad"); 
  } 
  doSomething2(); 
  const exitFullscreenButton = document.querySelector(".exit-fullscreen"); 
 
  const exitFullscreen = () => { 
    fullscreenContainer.classList.remove("show"); 
  }; 
 
  exitFullscreenButton.addEventListener("click", exitFullscreen); 
 
  document.addEventListener("keydown", (event) => { 
    if (event.key === "Escape") { 
      exitFullscreen(); 
    } 
  }); 
});

function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  var menuIcon = document.querySelector(".icon");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    menuIcon.innerHTML = "&#9776;"; // Hamburger menu icon
  } else {
    mobileMenu.classList.add("active");
    menuIcon.innerHTML = "&times;"; // Close (X) icon
  }
}

function handleMenuClick(event, targetUrl) {
  event.preventDefault(); // Prevent the default link behavior

  // Close the mobile menu
  toggleMobileMenu();

  // Navigate to the target URL
  window.location.href = targetUrl;
}

// Add event listeners to each menu link
document.querySelectorAll(".menu-link").forEach(function(link) {
  link.addEventListener("click", function(event) {
    handleMenuClick(event, this.getAttribute("href"));
  });
});