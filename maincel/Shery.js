Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

        
Shery.hoverWithMediaCircle(".hv",{videos:["pop.mp4"]});

Shery.imageEffect(".slides img", {
  style: 2,
  // debug: true, 
  // config: {
  //   /* Config made from debug panel */
  // },
  preset: "./presets/wigglewobble.json",
});

// Shery.imageEffect("#slides img", {
//   style: 6,
//   debug: true,
//   gooey: true,
// });