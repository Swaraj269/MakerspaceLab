// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
var frames = { currentIndex: 0, maxIndex: 0 };
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var Images = [];
var imgloaded = 0;

// Function to detect if the device is mobile
function isMobileDevice() {
  return window.innerWidth <= 768; // Adjust the breakpoint as needed
}

function getStartAnimation() {
  if (isMobileDevice()) {
    return function startAnimation() {
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

      tl.to(frames, updateframes(10), "a")
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
        .to(frames, updateframes(120))
        .to(frames, updateframes(120), "b")
        .to(
          ".whitediv",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "b"
        )
        .to(frames, updateframes(150), "d")
        .to(
          ".whitediv",
          {
            x: "-100%",
            ease: "linear",
            opacity: 0,
          },
          "d"
        )
        .to(frames, updateframes(235))
        .to(frames, updateframes(235), "e")
        .to(
          ".whitediv1",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "e"
        )
        .to(frames, updateframes(260), "f")
        .to(
          ".whitediv1",
          {
            x: "-100%",
            ease: "linear",
            opacity: 1,
          },
          "f"
        )
        .to(frames, updateframes(450))
        .to(frames, updateframes(450), "h")
        .to(
          ".whitediv2",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "h"
        )
        .to(frames, updateframes(470), "i")
        .to(
          ".whitediv2",
          {
            x: "-100%",
            ease: "linear",
            opacity: 1,
          },
          "i"
        )
        .to(frames, updateframes(555))
        .to(frames, updateframes(555), "j")
        .to(
          ".whitediv3",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "j"
        )
        .to(frames, updateframes(585), "k")
        .to(
          ".whitediv3",
          {
            x: "-100%",
            ease: "linear",
            opacity: 1,
          },
          "k"
        )
        .to(frames, updateframes(710))
        .to(frames, updateframes(710), "m")
        .to(
          ".whitediv4",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "m"
        )
        .to(frames, updateframes(740), "o")
        .to(
          ".whitediv4",
          {
            x: "-100%",
            ease: "linear",
            opacity: 0,
          },
          "o"
        )
        .to(frames, updateframes(1190))
        .to(frames, updateframes(1190), "p")
        .to(
          ".whitediv5",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "p"
        )
        .to(frames, updateframes(1230), "r")
        .to(
          ".whitediv5",
          {
            x: "-100%",
            ease: "linear",
            opacity: 0,
          },
          "r"
        )
        .to(frames, updateframes(1500))
        .to(frames, updateframes(1500), "s")
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
    };
  } else {
    return function startAnimation() {
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

      tl.to(frames, updateframes(10), "a")
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
        .to(frames, updateframes(100))
        .to(frames, updateframes(100), "b")
        .to(
          ".whitediv",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "b"
        )
        .to(frames, updateframes(140), "c")
        .to(
          ".whitediv",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "c"
        )
        .to(frames, updateframes(180), "d")
        .to(
          ".whitediv",
          {
            x: "-100%",
            ease: "linear",
            opacity: 0,
          },
          "d"
        )
        .to(frames, updateframes(400))
        .to(frames, updateframes(400), "e")
        .to(
          ".whitediv1",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "e"
        )
        .to(frames, updateframes(430), "f")
        .to(
          ".whitediv1",
          {
            x: "-100%",
            ease: "linear",
            opacity: 1,
          },
          "f"
        )
        .to(frames, updateframes(710))
        .to(frames, updateframes(710), "h")
        .to(
          ".whitediv2",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "h"
        )
        .to(frames, updateframes(740), "i")
        .to(
          ".whitediv2",
          {
            x: "-100%",
            ease: "linear",
            opacity: 1,
          },
          "i"
        )
        .to(frames, updateframes(845))
        .to(frames, updateframes(845), "j")
        .to(
          ".whitediv3",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "j"
        )
        .to(frames, updateframes(875), "k")
        .to(
          ".whitediv3",
          {
            x: "-100%",
            ease: "linear",
            opacity: 1,
          },
          "k"
        )
        .to(frames, updateframes(1040))
        .to(frames, updateframes(1040), "m")
        .to(
          ".whitediv4",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "m"
        )
        .to(frames, updateframes(1070), "o")
        .to(
          ".whitediv4",
          {
            x: "-100%",
            ease: "linear",
            opacity: 0,
          },
          "o"
        )
        .to(frames, updateframes(1610))
        .to(frames, updateframes(1610), "p")
        .to(
          ".whitediv5",
          {
            x: "0%",
            ease: "linear",
            opacity: 1,
          },
          "p"
        )
        .to(frames, updateframes(1630), "r")
        .to(
          ".whitediv5",
          {
            x: "-100%",
            ease: "linear",
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
    };
  }
}

const startsAnimation = getStartAnimation();
var startingindex;
// Function to preload images
function preloadimages() {
  // Determine the folder and number of frames based on the device type
  if (isMobileDevice()) {
    startingindex = 230;
    frames.maxIndex = 1746; // Number of frames for mobile
    var folderPath = "./MobImages/";
  } else {
    startingindex = 1;
    frames.maxIndex = 1879; // Number of frames for desktop
    var folderPath = "./Images/";
  }

  for (var i = startingindex; i <= frames.maxIndex; i++) {
    var imgUrl = `${folderPath}frame_${i.toString().padStart(4, "0")}.jpg`;
    var img = new Image();
    img.src = imgUrl;

    img.onload = () => {
      imgloaded++;
      if (imgloaded === frames.maxIndex) {
        loadimage(frames.currentIndex);
        startsAnimation();
        loadinganimation();
      }
    };

    Images.push(img);
  }
}

// Call the preloadimages function
preloadimages();

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

window.addEventListener("resize", () => {
  loadimage(Math.floor(frames.currentIndex));
});

preloadimages();

const loadinganimation = () => {
  var tl2 = gsap.timeline();

  tl2
    .to(".pleasewaittext", {
      opacity: 0,
      duration: 0.5,
      ease: "linear",
    })
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
