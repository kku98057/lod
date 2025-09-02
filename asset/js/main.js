const dowunPop = document.querySelector(".dowunPop");
const downPopClose = document.querySelector(".downPop_close");
const androidDownBtns = document.querySelectorAll(".android_down");
const keyvisualVid = document.querySelectorAll(".keyvisualVid");
// const popClose = document.querySelector(".popClose");
// const popup = document.querySelector(".popup");

// popClose.addEventListener("click", () => {
//   popup.style.display = "none";
// });

androidDownBtns.forEach((androidDownBtn) => {
  androidDownBtn.addEventListener("click", () => {
    dowunPop.classList.add("active");
  });
});
downPopClose.addEventListener("click", () => {
  dowunPop.classList.remove("active");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.style.display = "none";
  }
});

// partner Ui
const partnersDiv = document.querySelector(".partners_contents");
partnersDiv.innerHTML = `<li><a rel="nofollow noopener" target="_black"
href=""><img
    src="/asset/imgs/main/notch.png" alt="notch"></a>
</li>
<li><a rel="nofollow noopener" target="_black" href=""><img
    src="/asset/imgs/main/binance.png" alt="binance"></a>
</li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/web3stat.png"
    alt="web3stat"></a>
</li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/coin98.png"
    alt="coin98"></a></li>
<!-- ygg japan-->
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/yggjapan.png"
    alt="ygg_japan"></a></li>
<!-- ygg sea -->
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/yggsea.png"
    alt="ygg_sea"></a>
</li>
<!-- play it forad -->
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/playit.png"
    alt="playitfwd"></a>
</li>
<!-- morfyus -->
<li><a rel="nofollow noopener" target="_black" href=""><img
    src="/asset/imgs/main/morfyusleague.png" alt="morfyusleague"></a></li>
<!-- valluna -->
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/valluna.png"
    alt="valluna"></a>
</li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/ancient8.png"
    alt="ancient8"></a>
</li>

<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/37games.png"
    alt="37games"></a></li>
<li><a rel="nofollow noopener" target="_black" href=""><img
    src="/asset/imgs/main/culturecom.png" alt="culturecom"></a></li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/vtcgame.png"
    alt="vtcgame"></a></li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/lyto.png"
    alt="lyto"></a></li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/godsflame.png"
    alt="godsflame"></a>
</li>
<!-- poloniex -->
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/poloniex.png"
    alt="poloniex"></a></li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/certik.png"
    alt="certik"></a></li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/gamefi.png"
    alt="gamefi"></a></li>
<li><a rel="nofollow noopener" target="_black" href=""><img src="/asset/imgs/main/gateio.png"
    alt="gateio"></a></li>
<li><a rel="nofollow noopener" target="_black" href=""><img
    src="/asset/imgs/main/gatelabs.png" alt="gatelabs"></a>
</li>
`;

gsap.registerPlugin(ScrollTrigger);
const roadmap = () => {
  ScrollTrigger.saveStyles(
    ".roadmap_contents, .roadmap_list_title h3, .bar_star_cover"
  );
  ScrollTrigger.matchMedia({
    all: () => {
      const titles = document.querySelectorAll(".roadmap_list_title h3");
      const covers = document.querySelectorAll(".bar_star_cover");

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".roadmap",
            scrub: 1,
            pin: true,
            end: "+=3000",
          },
          default: { duration: 1 },
        })
        .fromTo(
          ".roadmap_contents",
          {
            translateX: 1630,
          },
          {
            translateX: -10,
            duration: 4,
          }
        )
        .to(
          titles[0],
          {
            opacity: 1,
          },
          "-=4"
        )
        .to(
          titles[1],
          {
            opacity: 1,
          },
          "-=3"
        )
        .to(
          titles[2],
          {
            opacity: 1,
          },
          "-=2"
        )
        .to(
          titles[3],
          {
            opacity: 1,
          },
          "-=1"
        )
        .to(
          covers[0],
          {
            opacity: 1,
          },
          "-=4"
        )
        .to(
          covers[1],
          {
            opacity: 1,
          },
          "-=3"
        )
        .to(
          covers[2],
          {
            opacity: 1,
          },
          "-=2"
        )
        .to(
          covers[3],
          {
            opacity: 1,
          },
          "-=1"
        )
        .to({}, {}, "+=2");
    },
  });
};

const partners = () => {
  ScrollTrigger.saveStyles(".partners_contents li");
  ScrollTrigger.matchMedia({
    "(min-width:1280px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".partners_contents",
            toggleActions: "play none none reverse",
          },
        })
        .from(".partners_contents li", {
          opacity: 0,
          yPercent: 30,
          stagger: {
            amount: 0.5,
          },
        });
    },
    "(max-width:1279px)": () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".partners_contents",
            scrub: 0.5,
            start: "0 80%",
            end: "100% 60%",
          },
        })
        .from(".partners_contents li", {
          opacity: 0,
          yPercent: 30,
          stagger: {
            amount: 0.5,
          },
        });
    },
  });
};
roadmap();
partners();
