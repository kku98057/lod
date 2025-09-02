const featuretext = new Swiper(".weapons_texts_wrap ", {
  effect: "fade",
  slidesPerView: "1",
  fadeEffect: {
    crossFade: true,
  },
});
const featureImg = new Swiper(".weapons_imgs_wrap", {
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  slidesPerView: "1",
  thumbs: {
    swiper: featuretext,
  },
  navigation: {
    prevEl: ".weapons_prev",
    nextEl: ".weapons_next",
  },
  pagination: {
    el: ".weapons_paginations",
    type: "bullets",
    bulletActiveClass: "active",
    clickable: true,
    renderBullet: (index, name) => {
      let imgs = [
        {
          weaponSrc: "./asset/imgs/features/00_waepon.png",
        },
        {
          weaponSrc: "./asset/imgs/features/01_waepon.png",
        },
        {
          weaponSrc: "./asset/imgs/features/02_waepon.png",
        },
        {
          weaponSrc: "./asset/imgs/features/03_waepon.png",
        },
        {
          weaponSrc: "./asset/imgs/features/04_waepon.png",
        },
        {
          weaponSrc: "./asset/imgs/features/05_waepon.png",
        },
      ];

      let coverImgs = {
        weaponLightSrc: "./asset/imgs/features/weapon_light.png",
        weaponCoverSrc: "./asset/imgs/features/weapon_cover.png",
      };
      return `<div class="${name} weapon_bullet">
        <div class="weapon_imgs">
            <img class="bullet_weapon" src="${imgs[index].weaponSrc}" alt="${imgs[index].weaponSrc}"/>
            <img class="bullet_light" src="${coverImgs.weaponLightSrc}" alt="${coverImgs.weaponLightSrc}"/>
            
        </div>
      </div>`;
    },
  },
});
gsap.registerPlugin(ScrollTrigger);
const weapon = () => {
  ScrollTrigger.saveStyles(
    ".weapons_contents, .weapons_paginations, .weapons_slide_title"
  );
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".weapons",
            start: "0 75%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".weapons_contents", {
          opacity: 0,
          duration: 1,
        })
        .from(
          ".weapons_paginations ",
          {
            opacity: 0,
            duration: 1,
          },
          ">-0.75"
        )
        .from(
          ".weapons_slide_title ",
          {
            opacity: 0,
            yPercent: 15,
            duration: 1,
          },
          ">-0.75"
        );
    },
  });
};

const mastery = () => {
  ScrollTrigger.saveStyles(
    ".mastery_contents_img,.mastery_contents_title,  .mastery_contents_text"
  );
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".mastery",
            start: "25% 50%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".mastery_contents_img", {
          opacity: 0,
          duration: 1,
        })
        .from(
          ".mastery_contents_title",
          {
            opacity: 0,
            duration: 1,
          },
          ">-0.75"
        )
        .from(
          ".mastery_contents_text",
          {
            opacity: 0,
            yPercent: 15,
            duration: 1,
          },
          ">-0.75"
        );
    },
  });
};
const combat = () => {
  ScrollTrigger.saveStyles(".combat_content");
  ScrollTrigger.matchMedia({
    "(min-width:769px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".combat_content_wrap",
            start: "0% 75%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".combat_content", {
          opacity: 0,
          yPercent: 20,
          ease: "power4.inout",
          stagger: {
            amount: 0.5,
          },
        });
    },
    "(max-width:768px)": () => {
      const combats = document.querySelectorAll(".combat_content");
      combats.forEach((combat) => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: combat,
              start: "0% 75%",
              toggleActions: "play none none reverse",
            },
          })
          .from(combat, {
            opacity: 0,
            yPercent: 20,
            ease: "power4.inout",
            stagger: {
              amount: 0.5,
            },
          });
      });
    },
  });
};
weapon();
mastery();
combat();
