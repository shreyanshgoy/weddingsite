Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  let sections = document.querySelectorAll(".fleftelm");
  Shery.imageEffect(".card-img-top", {
    config: {onMouse: {value: 1}},
    style: 5,
    slideStyle: (setScroll) => {
     sections.forEach(function(section,index){
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub : 1,
        onUpdate: function(prog){
          setScroll(prog.progress +index)
        },
      });
     });
    },
  });