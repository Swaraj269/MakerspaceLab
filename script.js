// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data

var frames = { currentIndex: 0, maxIndex: 1879 };
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var Images = [];
var imgloaded = 0;
function preloadimages() {
  for (var i = 1; i <= frames.maxIndex; i++) {
    var imgUrl = `./Images/frame_${i.toString().padStart(4, "0")}.jpg`;
    var img = new Image();
    img.src = imgUrl;
    img.onload = () => {
      imgloaded++;
      if (imgloaded === frames.maxIndex) {
        loadimage(frames.currentIndex);
        startAnimation();
      }
    };
    Images.push(img);
  }
}

function loadimage(index) {
  if (index >= 0 && index <= frames.maxIndex) {
    const imgs = Images[index];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const scaleX = window.innerWidth / imgs.width;
    const scaleY = window.innerHeight / imgs.height;
    const scale = Math.max(scaleX, scaleY);
    const newWidth = imgs.width * scale;
    const newHeight = imgs.height * scale;
    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(imgs, offsetX, offsetY, newWidth, newHeight);
    frames.currentIndex = index;
  }
}

function startAnimation() {
  var updateframes = (index) => {
    return {
      currentIndex: index,
      ease: "linear",
      onUpdate: () => {
        loadimage(Math.floor(frames.currentIndex));
      },
    };
  };
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });

  tl.to(frames, updateframes(30), "a")
    .to(
      ".hometext",
      {
        opacity: 0,
        ease: "linear",
        delay: -0.4,
      },
      "a"
    )
    .to(
      ".initialhomepage",
      {
        opacity: 0,
        ease: "linear",
      },
      "a"
    )
    .to(frames, updateframes(100), "b")
    .to(
      ".whitediv",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "b"
    )
    .to(frames, updateframes(140), "c")
    .to(
      ".whitediv",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "c"
    )
    .to(frames, updateframes(180), "d")
    .to(
      ".whitediv",
      {
        x: "-100%",
        ease: "expo.out",
        opacity: 0,
      },
      "d"
    )
    .to(frames, updateframes(380), "e")
    .to(
      ".whitediv1",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "e"
    )
    .to(frames, updateframes(440), "f")
    .to(
      ".whitediv1",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "f"
    )
    .to(frames, updateframes(680), "g")
    .to(
      ".whitediv1",
      {
        x: "-100%",
        ease: "expo.out",
        opacity: 0,
      },
      "g"
    )
    .to(frames, updateframes(710), "h")
    .to(
      ".whitediv2",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "h"
    )
    .to(frames, updateframes(800), "i")
    .to(
      ".whitediv2",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "i"
    )
    .to(frames, updateframes(810), "j")
    .to(
      ".whitediv2",
      {
        x: "-100%",
        ease: "expo.out",
        opacity: 0,
      },
      "j"
    )
    .to(frames, updateframes(880), "j")
    .to(
      ".whitediv3",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "j"
    )
    .to(frames, updateframes(990), "k")
    .to(
      ".whitediv3",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "k"
    )
    .to(frames, updateframes(1000), "l")
    .to(
      ".whitediv3",
      {
        x: "-100%",
        ease: "expo.out",
        opacity: 0,
      },
      "l"
    )
    .to(frames, updateframes(1020), "m")
    .to(
      ".whitediv4",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "m"
    )
    .to(frames, updateframes(1150), "n")
    .to(
      ".whitediv4",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "n"
    )
    .to(frames, updateframes(1200), "o")
    .to(
      ".whitediv4",
      {
        x: "-100%",
        ease: "expo.out",
        opacity: 0,
      },
      "o"
    )
    .to(frames, updateframes(1540))
    .to(frames, updateframes(1570), "p")
    .to(
      ".whitediv5",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "p"
    )
    .to(frames, updateframes(1630), "q")
    .to(
      ".whitediv5",
      {
        x: "0%",
        ease: "expo.out",
        opacity: 1,
      },
      "q"
    )
    .to(frames, updateframes(1640), "r")
    .to(
      ".whitediv5",
      {
        x: "-100%",
        ease: "expo.out",
        opacity: 0,
      },
      "r"
    )
    .to(frames, updateframes(1849))
    .to(frames, updateframes(1879), "s")
    .to(
      ".finalhomepage",
      {
        opacity: 1,
        ease: "linear",
      },
      "s"
    )
    .to(
      ".finalhometext",
      {
        opacity: 1,
        ease: "linear",
        delay: 0.4,
      },
      "s"
    );
}

window.addEventListener("resize", () => {
  loadimage(Math.floor(frames.currentIndex));
});

preloadimages();

const loadinganimation = () => {
  var tl2 = gsap.timeline();

  tl2
    .from(".loaderplane", {
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: "expo.Out",
    })
    .from(".texts", {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "expo.Out",
    })
    .to(".texts", {
      transform: "translateY(-100%)",
      duration: 1.8,
      delay: 0.4,
      ease: "expo.inOut",
    })
    .to(".texts", {
      transform: "translateY(-200%)",
      duration: 2,
      delay: 0.4,
      ease: "expo.inOut",
    })
    .to(".loader", {
      delay: 0.3,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });
};

loadinganimation();

var navbaranimation = () => {
  const navbar = document.querySelector("nav");
  let timeoutId;

  const handleScroll = () => {
    clearTimeout(timeoutId);

    gsap.to(navbar, { y: "-100%", duration: 0.8, ease: "expo.out" });

    timeoutId = setTimeout(() => {
      gsap.to(navbar, { y: "0%", duration: 1.5, ease: "expo.out" });
    }, 300);
  };

  window.addEventListener("scroll", handleScroll);
};

navbaranimation();
