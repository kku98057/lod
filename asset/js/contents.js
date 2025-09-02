const bgSwiper = new Swiper(".jobs_bgs", {
  effect: "fade",
  slidesPerView: "1",
  preventInteractionOnTransition: true,
  fadeEffect: {
    crossFade: false,
  },
});
const contentsSwiper = new Swiper(".jobs_contents", {
  slidesPerView: "1",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  threshold: 50,
  preventInteractionOnTransition: true,
  thumbs: {
    swiper: bgSwiper,
  },
  pagination: {
    el: ".job_paginations",
    type: "bullets",
    bulletActiveClass: "active",
    clickable: true,
    renderBullet: (index, name) => {
      let imgs = [
        {
          jobSrc: "./asset/imgs/contents/pagination-beny.png",
        },
        {
          jobSrc: "./asset/imgs/contents/pagination-arche.png",
        },
        {
          jobSrc: "./asset/imgs/contents/pagination-rucia.png",
        },
      ];

      let coverImgs = {
        jobLightSrc: "./asset/imgs/features/weapon_light.png",
      };
      return `<div class="${name} job_bullet">
        <div class="job_imgs">
            <img class="bullet_job" src="${imgs[index].jobSrc}" alt="${imgs[index].jobSrc}"/>
            <img class="bullet_light" src="${coverImgs.jobLightSrc}" alt="${coverImgs.jobLightSrc}"/>

        </div>
      </div>`;
    },
  },
  navigation: {
    prevEl: ".job_prev",
    nextEl: ".job_next",
  },
  on: {
    slideChangeTransitionStart: () => {
      const tl = gsap.timeline();
      tl.to(".jobs_charactor", {
        opacity: 0,
      });
      tl.to(
        ".charactor_name",
        {
          yPercent: 30,
          opacity: 0,
        },

        ">-0.5"
      );
      tl.to(
        ".charactor_text p",
        {
          yPercent: 20,
          opacity: 0,
        },

        ">-0.35"
      );
      tl.to(
        ".charactor_tab ",
        {
          yPercent: 20,
          opacity: 0,
        },

        ">-0.35"
      );
      tl.to(
        ".charactor_tab_infowrap",
        {
          yPercent: 20,
          opacity: 0,
        },

        ">-0.35"
      );
    },
    slideChangeTransitionEnd: () => {
      const tl = gsap.timeline();

      tl.to(".jobs_charactor", {
        opacity: 1,
      });
      tl.to(
        ".charactor_name",
        {
          yPercent: 0,
          opacity: 1,
        },

        ">-0.5"
      );
      tl.to(
        ".charactor_text p",
        {
          yPercent: 0,
          opacity: 1,
        },

        ">-0.35"
      );
      tl.to(
        ".charactor_tab ",
        {
          yPercent: 0,
          opacity: 1,
        },

        ">-0.35"
      );
      tl.to(
        ".charactor_tab_infowrap",
        {
          yPercent: 0,
          opacity: 1,
        },

        ">-0.35"
      );
    },
  },
});

const benyTab = document.querySelectorAll(
  ".charactor_tab_infowrap > div[data-beny-info]"
);
const benyBtn = document.querySelectorAll(
  ".charactor_tab button[data-beny-btn]"
);
benyBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnHandler(btn);
  });

  const btnHandler = (btn) => {
    const btnTarget = btn.dataset.benyBtn;
    benyTab.forEach((b) => {
      b.classList.remove("active");
    });
    benyBtn.forEach((b) => {
      b.classList.remove("active");
    });
    benyTab.forEach((tab) => {
      const tagTager = tab.dataset.benyInfo;

      if (btnTarget === tagTager) {
        tab.classList.add("active");
        btn.classList.add("active");
      }
    });
  };
});

const arche = document.querySelectorAll(
  ".charactor_tab_infowrap > div[data-arche-info]"
);
const archeBtn = document.querySelectorAll(
  ".charactor_tab button[data-arche-btn]"
);
archeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnHandler(btn);
  });

  const btnHandler = (btn) => {
    const btnTarget = btn.dataset.archeBtn;
    arche.forEach((b) => {
      b.classList.remove("active");
    });
    archeBtn.forEach((b) => {
      b.classList.remove("active");
    });
    arche.forEach((tab) => {
      const tagTager = tab.dataset.archeInfo;

      if (btnTarget === tagTager) {
        tab.classList.add("active");
        btn.classList.add("active");
      }
    });
  };
});

const ruciaTab = document.querySelectorAll(
  ".charactor_tab_infowrap > div[data-rucia-info]"
);
const ruciaBtn = document.querySelectorAll(
  ".charactor_tab button[data-rucia-btn]"
);
ruciaBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnHandler(btn);
  });

  const btnHandler = (btn) => {
    const btnTarget = btn.dataset.ruciaBtn;
    ruciaTab.forEach((b) => {
      b.classList.remove("active");
    });
    ruciaBtn.forEach((b) => {
      b.classList.remove("active");
    });
    ruciaTab.forEach((tab) => {
      const tagTager = tab.dataset.ruciaInfo;

      if (btnTarget === tagTager) {
        tab.classList.add("active");
        btn.classList.add("active");
      }
    });
  };
});

const gameBgSwiper = new Swiper(".game_img_slider", {
  effect: "fade",
  allowTouchMove: false,
  fadeEffect: {
    crossFade: false,
  },
});
const gameSwiper = new Swiper(".game_content_slider", {
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: gameBgSwiper,
  },

  navigation: {
    prevEl: ".game_prev",
    nextEl: ".game_next",
  },
  pagination: {
    clickable: true,
    el: ".game_pagination",
    bulletClass: "game_bullet",
    bulletActiveClass: "active",
    renderBullet: (index, name) => {
      let paginationSrc = {
        onSrc: "./asset/imgs/pagination_on.png",
        offSrc: "./asset/imgs/pagination_off.png",
      };

      return `<div class="${name}">
          <img class="pagiOn" src="${paginationSrc.onSrc}" alt="${paginationSrc.onSrc}">
          <img class="pagiOff" src="${paginationSrc.offSrc}" alt="${paginationSrc.offSrc}">
          </div>`;
    },
  },
});

gsap.registerPlugin(ScrollTrigger);
const game = () => {
  ScrollTrigger.saveStyles(".game_content_slider");
  ScrollTrigger.matchMedia({
    all: () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".game_content_wrap",
            start: "0% 75%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".game_content_slider ", {
          opacity: 0,
          duration: 1,
        });
    },
  });
};
const charactor = () => {
  ScrollTrigger.saveStyles(".char_data_title, .char_img img ");
  ScrollTrigger.matchMedia({
    "(min-width:769px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".game_content_wrap",
            start: "0% 75%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".char_img img", {
          opacity: 0,
          yPercent: 20,
          duration: 1,
        })
        .from(".char_data_title ", {
          opacity: 0,
          yPercent: 20,
          duration: 1,
        });
    },
    "(min-width:769px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".char_img",
            start: "0% 75%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".char_img img", {
          opacity: 0,
          yPercent: 20,
          duration: 1,
        });
      const tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".char_data",
            start: "0% 75%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".char_data_title", {
          opacity: 0,
          yPercent: 20,
          duration: 1,
        });
    },
  });
};
game();
charactor();
