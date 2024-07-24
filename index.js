document.querySelectorAll(".nav-link").forEach((link) => { 
  link.addEventListener("click", function (e) { 
    e.preventDefault(); 
    const targetId = this.getAttribute("data-target"); 
    const targetElement = document.getElementById(targetId); 
    const navbarHeight = document.getElementById("navbar").offsetHeight; 
 
    window.scrollTo({ 
      top: targetElement.offsetTop, 
      behavior: "smooth", 
    }); 
  }); 
}); 
 
const greetings = [ 
  "Salem", 
  "Привет", 
  "Hello World!", 
  "Qosh Keldin!", 
  "Добро Пожаловать!", 
  "WELCOME!", 
]; 
const greetingElement = document.getElementById("greeting"); 
const welcomeScreen = document.getElementById("welcomeScreen"); 
 
let index = 0; 
 
function showNextGreeting() { 
  const landingPage = document.getElementById("landingPage"); 
 
  if (index < greetings.length) { 
    greetingElement.textContent = greetings[index]; 
    greetingElement.style.animation = "fadeInOut 0.5s"; 
    index++; 
    setTimeout(showNextGreeting, 400); // 0.5s for each greeting 
  } else { 
    setTimeout(() => { 
      welcomeScreen.style.opacity = 0; 
      setTimeout(() => { 
        welcomeScreen.classList.add("hidden"); 
      }, 500); // Allow time for the fade out transition 
    }, 500); // Wait 0.5s before transitioning 
  } 
} 
 
document.addEventListener("DOMContentLoaded", function () { 
  showNextGreeting(); 
 
  const hiddenElement = document.querySelector(".item"); 
 
  const targets = document.querySelectorAll(".categories_section"); 
  const viewportHeight = window.innerHeight; 
 
  function highlightCenteredTarget() { 
    if (!hiddenElement.classList.contains("show")) { 
      const hiddenElementRect = hiddenElement.getBoundingClientRect(); 
 
      if (hiddenElementRect.top < viewportHeight) { 
        document 
          .querySelectorAll(".item") 
          .forEach((el) => el.classList.add("show")); 
      } 
    } 
    let closestTarget = null; 
    let minDistanceFromCenter = Infinity; 
 
    targets.forEach((target) => { 
      const rect = target.getBoundingClientRect(); 
      const targetCenter = rect.top + rect.height / 2; 
      const viewportCenter = viewportHeight / 2; 
      const distanceFromCenter = Math.abs( 
        targetCenter - viewportCenter + rect.height / 5 
      ); 
 
      if (distanceFromCenter < minDistanceFromCenter) { 
        closestTarget = target; 
        minDistanceFromCenter = distanceFromCenter; 
      } 
    }); 
 
    // Reset all targets to their default state 
    targets.forEach((target) => { 
      target.style.backgroundColor = "lightblue"; 
      target.style.transform = "scale(1)"; 
    }); 
 
    // Highlight the closest target 
    if (closestTarget) { 
      closestTarget.style.transform = "scale(1.1)"; 
    } 
  } 
 
  window.addEventListener("scroll", highlightCenteredTarget); 
  highlightCenteredTarget(); 
});



// mobile menu:
function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  var menuIcon = document.querySelector(".icon");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    menuIcon.innerHTML = "&#9776;"; // Menu icon
  } else {
    mobileMenu.classList.add("active");
    menuIcon.innerHTML = "&times;"; // Back icon
  }
}

function handleMenuClick(event, targetId) {
  event.preventDefault(); // Prevent the default link behavior

  // Smooth scroll to the section
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth"
    });
  }

  // Close the mobile menu
  toggleMobileMenu();
}
