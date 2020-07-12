 // Bank some good vibe options
 const vibes = [
    "...like a hurricane!",
    "...even more than Bieber!",
    "...ABBA for life!",
    "...can you smell what the rock is cooking?!",
    "...they should call you granite!",
    "...and you kinda roll too!",
    "...and so does this puppy! 🐶"
  ];

   // choose a random good vibe
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  // display a good vibe
  document.querySelector(".vibe").append(vibe);