var wow = new WOW(
  {
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    callback:     function(box) {
      console.log("Animando...")
    },
  }
);

wow.init(); 