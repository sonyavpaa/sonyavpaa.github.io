const navBar = document.querySelector("nav");
const mobileNav = document.querySelector(".mobileNav");
const mobileNavIcon = document.querySelector(".mobileNavIcon");
const mobileNavUl = mobileNav.querySelector("ul");
const gitHubIcon = document.querySelector(".gitHub");
const logoBox = document.querySelector("#logoBox");
const stickyContainer = document.querySelector("#stickyContainer");
let logoBox1 = document.querySelector("#logoBox1");

const intro = document.querySelector(".intro__section");
const userNameInput = document.querySelector("#userName");
const welcomeTextContainer = document.querySelector(".welcomeText__container");
const welcomeText = document.querySelector(".welcomeText");

const projects = document.querySelector("#projects__section");
const pancakes = document.querySelectorAll(".pancakes");
const projectsText = document.querySelector("#projects__text");
const pancakeHeaders = document.querySelectorAll(".pancaketext");
const pancakeTextsDevice = document.querySelectorAll(".pancaketext__device");

const aboutMe = document.querySelector(".about_me");
const helloName = document.querySelector("#helloName");

const skills = document.querySelector(".skills");
const contactForm = document.querySelector(".contactform");

const pancakeIDesc = "pancake I description";
const pancakeIIDesc = "pancake II description";
const pancakeIIIDesc = "pancake III description";
const pancakeIVDesc = "pancake IV description";
const pancakeVDesc = "pancake V description";
const pancakeVIDesc = "pancake VI description";
const descArr = [
  pancakeIDesc,
  pancakeIIDesc,
  pancakeIIIDesc,
  pancakeIVDesc,
  pancakeVDesc,
  pancakeVIDesc,
];
let headerArr = [
  "PANCAKE I",
  "PANCAKE II",
  "PANCAKE III",
  "PANCAKE IV",
  "PANCAKE V",
  "PANCAKE VI",
];

// animation for the welcome text after name input recieved
let userName = "";
userNameInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    if (userNameInput.value.length > 0) {
      userName = userNameInput.value;
      helloName.textContent = userNameInput.value;
      userNameInput.classList.add("hide");
      userNameInput.value = "";
      welcomeTextAnimate();
    }
  }
});

const welcomeTextAnimate = () => {
  welcomeTextContainer.classList.add("show");
  type();
};

let charIndex = 0;
const type = () => {
  let welcomeTextAnimation = `Hi there ${userName}! Welcome to Sonya Web! Let's scroll down together!`;
  const typingDelay = 100;
  if (charIndex < welcomeTextAnimation.length) {
    welcomeText.textContent += welcomeTextAnimation[charIndex];
    charIndex++;
    setTimeout(type, typingDelay);
  }
};

// hover effect for pancake desc text
pancakes.forEach((pancake) =>
  pancake.addEventListener("mouseover", (event) => {
    let header = event.target?.firstChild?.data;

    for (let i = 0; i < headerArr.length; i++) {
      if (header == headerArr[i])
        projectsText.innerHTML = `${headerArr[i]} </br>${descArr[i]}`;
    }
  })
);

pancakes.forEach((pancake) => {
  pancake.addEventListener("mouseout", () => {
    projectsText.innerHTML = "";
  });
});

window.onload = (e) => {
  boxChanges();
  checkDevice();
  mobileNavVisible();
  pancakeTextDeviceFunc();
  welcomeTextSize();
};

window.onscroll = function () {
  navFunc();
};
window.onresize = function () {
  boxChanges();
  mobileNavVisible();
  pancakeTextDeviceFunc();
  welcomeTextSize();
};

// sticky containers and logoboxes responsive height
function boxChanges() {
  let boxHeight =
    intro.offsetHeight + projects.offsetHeight + aboutMe.offsetHeight;

  let logoBoxHeight1 =
    intro.offsetHeight + projects.offsetHeight + aboutMe.offsetHeight;

  logoBox1.style.top = logoBoxHeight1 + "px";

  stickyContainer.style.height = boxHeight + "px";
}

  let device = "desktop";
// checks the device used
function checkDevice() {
  const agent = navigator.userAgent.toLocaleLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(agent)) {
    device = "tablet";
  } else if (
    /mobile|android|ip(hone|od)|iemobile|blackberry|kindle|silk-accelerated|(hpw|web)os|opera m(obi|ini)/i.test(
      agent
    )
  ) {
    device = "mobile";
  }
  console.log(`using ${device}`);

  if (device === "tablet") {
    mobileNavVisible();
    // changes with pancake headers if tablet
    pancakeHeaders.forEach((header) => {
      header.style.opacity = "1";
    });

    pancakes.forEach((pancake) => {
      pancake.style.filter = "grayscale(0)";
      pancake.style.opacity = "0.6";
    });
  }
  if (device === "mobile") {
    navBar.style.display = "none";
    mobileNavIcon.style.visibility = "visible";
    mobileNavIcon.querySelector("span").style.fontSize = "3em";
    logoBox.style.display = "none";
    document.querySelector("h1").style.fontSize = "3em";
    document.querySelector("h1").style.marginTop = "0em";
    const aboutMeContainer = document.querySelector(".about_me__p__container");
    aboutMeContainer.style.display = "flex";
    aboutMeContainer.style.justifyContent = "center";
    aboutMeContainer.querySelector("p").style.padding = "0";
    skills.style.height = "100vh";
    contactForm.style.height = "100vh";
  }
  // logges if device orientation is changed (90 or 0)
  window.addEventListener("orientationchange", function () {
    console.log(
      `the orientation of the ${device} is now ` + screen.orientation.angle
    );
    mobileNavVisible(device);
  });
}
// changing the bgc of nav and hiding gitHub when scrolling
const navFunc = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navBar.style.backgroundColor = "rgba(195, 189, 254, 0.7)";
    gitHubIcon.style.display = "none";
  } else {
    gitHubIcon.style.display = "";
  }
};

function mobileNavVisible(device) {
  if (device === "mobile" || intro.offsetWidth <= 810) {
    // mobileNav.style.visibility = "visible";
    console.log("inside MobilenavVisible()");
    beMobile();

    // mobileNavIcon.addEventListener("click", (e) => {
    //   mobileNavUl.style.visibility = "visible";
    //   mobileNavUl.style.zIndex = "3";

    //   mobileNavUl.querySelectorAll("li").forEach((link) => {
    //     window.addEventListener("mouseup", (e) => {
    //       mobileNavUl.style.visibility = "hidden";
    //     });
    //     link.addEventListener("click", (e) => {
    //       mobileNavUl.style.visibility = "hidden";
    //       mobileNavUl.style.zIndex = "0";
    //     });
    //   });
    // });
  } else if (intro.offsetWidth >= 1070) {
    mobileNav.style.visibility = "hidden";
  }
}

// pancake desc texts if device text visible
function pancakeTextDeviceFunc() {
  pancakeTextsDevice.forEach((text) => {
    let i = 0;
    if (window.getComputedStyle(text).visibility === "visible")
      (text.innerHTML = `${headerArr[i]} </br>${descArr[i]}`), i++;
    text.style.height = "4em";
  });
}
// responsive welcomeText font size
function welcomeTextSize() {
  const introSquare = (intro.offsetWidth / 100) * (intro.offsetHeight / 100);
  if (introSquare < 59) {
    welcomeText.style.fontSize = "2em";
  } else if (intro.offsetHeight < 481) {
    welcomeText.style.visibility = "hidden";
  } else {
    welcomeText.style.visibility = "visible";
    welcomeText.style.fontSize = "4em";
  }
  // console.log(introSquare, intro.offsetHeight);
}

// the arrows that helps sunnies to be in the right place NOT READY
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
leftArrow.addEventListener("click", (e) => {
  console.log(logoBox1);
});

function beMobile () {
  console.log("here");
     mobileNav.addEventListener("click", (e) => {
      mobileNavUl.style.visibility = "visible";
      mobileNavUl.style.zIndex = "3";

      mobileNavUl.querySelectorAll("li").forEach((link) => {
        window.addEventListener("mouseup", (e) => {
          mobileNavUl.style.visibility = "hidden";
        });
        link.addEventListener("click", (e) => {
          mobileNavUl.style.visibility = "hidden";
          mobileNavUl.style.zIndex = "0";
        });
      });
    });
}
