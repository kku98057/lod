const menuBtn = document.querySelector(".mob_btn");
const mobMenu = document.querySelector(".mob_menu");
const mobCloseBtn = document.querySelector(".mob_close");
const header = document.querySelector("header");
const langBtn = document.querySelector(".lang");
const langMenu = document.querySelector(".langmenu");
const langLists = document.querySelectorAll(".langmenu_wrap a");
const langClose = document.querySelector(".lang_close");

// 헤더
window.scrollY > 1 && header.classList.add("active");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

menuBtn.addEventListener("click", () => {
  mobMenu.classList.add("active");
});
mobCloseBtn.addEventListener("click", () => {
  mobMenu.classList.remove("active");
});

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("active");
  langLists.forEach((list, idx) => {
    setTimeout(() => {
      list.classList.toggle("active");
    }, idx * 100);
  });
});
langClose.addEventListener("click", () => {
  langMenu.classList.remove("active");
  langLists.forEach((list, idx) => {
    setTimeout(() => {
      list.classList.remove("active");
    }, idx * 100);
  });
});

gsap.registerPlugin(ScrollTrigger);

const commonTitle = () => {
  ScrollTrigger.saveStyles(".common_title");
  ScrollTrigger.matchMedia({
    all: () => {
      const titles = document.querySelectorAll(".common_title");
      titles.forEach((title) => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: title,
              start: "0 75%",
              toggleActions: "play none none reverse",
            },
          })
          .from(title, {
            yPercent: 20,
            opacity: 0,
            duration: 1,
          });
      });
    },
  });
};
commonTitle();
// scrolltrigger 리프레시
document.querySelectorAll("img").forEach((img) => {
  if (img.complete) {
    ScrollTrigger.refresh();
  } else {
    img.addEventListener("load", (imgLoaded) => ScrollTrigger.refresh());
  }
});
document.querySelectorAll("video").forEach((video) => {
  setTimeout(() => {
    video.load ? ScrollTrigger.refresh() : ScrollTrigger.refresh();
  }, 500);
});

// ios체크
const sections = document.querySelectorAll("section");
const checkMobile = () => {
  let varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

  if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    sections.forEach((section) => {
      section.style.backgroundAttachment = "scroll";
    });
  }
};
checkMobile();
