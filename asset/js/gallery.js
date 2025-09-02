// const delay = (time, value) =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(value), time);
//   });
const scrWrap = document.querySelector(".screenshot_slide_wrap");
const artWrap = document.querySelector(".art_slide_wrap");
const btns = document.querySelectorAll(".gallery_tab button");
const galleryPopup = document.querySelector(".gallery_popup");
const galleryImgWraps = document.querySelectorAll(".gallery_img_wrap");
const galleryPopupWrap = document.querySelector(".gallery_popup_wrap");
const createImg = document.createElement("img");
galleryImgWraps.forEach((wrap) => {
  wrap.addEventListener("click", () => {
    galleryPopup.classList.add("visible");
    const currentImg = wrap.querySelector("img").currentSrc;

    createImg.src = currentImg;
    galleryPopupWrap.append(createImg);
  });
});
galleryPopup.addEventListener("click", () => {
  galleryPopup.classList.remove("visible");
});
let paginationSrc = {
  onSrc: "./asset/imgs/pagination_on.png",
  offSrc: "./asset/imgs/pagination_off.png",
};
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    galleryPopup.classList.remove("visible");
  }
});
const tab = () => {
  artWrap.classList.add("active");
  btns[0].classList.add("active");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btnOffHandler(btns);
      btnOnHandler(btn);
      tabToggleHandler(btn);
    });
  });

  const btnOnHandler = (btn) => {
    btn.classList.add("active");
  };
  const btnOffHandler = (btns) => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  };
  const tabToggleHandler = (btn) => {
    const slideTarget = btn.dataset.slideBtn;

    if (slideTarget === "scr") {
      artWrap.classList.remove("active");
      scrWrap.classList.add("active");
    } else if (slideTarget === "art") {
      scrWrap.classList.remove("active");
      artWrap.classList.add("active");
    }
  };
};
tab();
gsap.registerPlugin(ScrollTrigger);
const gallery = () => {
  ScrollTrigger.saveStyles(".gallery_tab, .gallery_img_wrap");
  ScrollTrigger.matchMedia({
    "(min-width:1280px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".gallery",

            toggleActions: "play none none reverse",
          },
        })
        .from(".gallery_tab", {
          opacity: 0,
          yPercent: 100,
          ease: "power4.inout",
        });

      const tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".gallery_grid",
          },
        })
        .from(".gallery_img_wrap", {
          opacity: 0,
          yPercent: 100,
          ease: "power4.inout",
          stagger: {
            amount: 0.5,
          },
        });
    },
    "(max-width:1279px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".gallery",
            toggleActions: "play none none reverse",
          },
        })
        .from(".gallery_tab", {
          opacity: 0,
          yPercent: 100,
          ease: "power4.inout",
        });

      const imgs = document.querySelectorAll(".gallery_img_wrap");
      imgs.forEach((img) => {
        const tl2 = gsap
          .timeline({
            scrollTrigger: {
              trigger: img,
              toggleActions: "play none none reverse",
            },
          })
          .from(img, {
            opacity: 0,
            ease: "power4.inout",
          });
      });
    },
  });
};
gallery();
