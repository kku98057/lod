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
const tab = () => {
  const combatWraps = document.querySelectorAll(".combat_content_wrap");
  const btns = document.querySelectorAll(".combat_tab button");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
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
    combatWraps.forEach((wrap) => {
      const target = wrap.dataset.slideSlider;
      if (slideTarget === target) {
        wrap.classList.add("active");
      } else {
        wrap.classList.remove("active");
      }
    });
  };
};
tab();
combat();
