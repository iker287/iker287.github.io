$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
   createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
   createPlatform(-50, -50, 50, canvas.height + 500); // left wall
   createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall


   //////////////////////////////////
   // ONLY CHANGE BELOW THIS POINT //
   //////////////////////////////////


   // TODO 1 - Enable the Grid
   toggleGrid();




   // TODO 2 - Create Platforms
   createPlatform(400,500 ,200, 300,"purple");


   createPlatform(200, 620, 100, 20,"purple");


   createPlatform(400, 405, 400, 10,"purple");
  
   createPlatform(900, 620, 200, 20,"purple");
   createPlatform(1000, 500, 100, 20,"purple");
   createPlatform(900, 300, 500, 20,"purple");
   createPlatform(850, 450, 100, 20,"purple");
   // TODO 3 - Create Collectables
   createCollectable("diamond", 200, 170, 0.5, 0.7);
   createCollectable("diamond", 700, 700, 0.5, 0.7);
   createCollectable("steve", 1350, 50);
  
   // TODO 4 - Create Cannons
   createCannon("top", 260, 1000);
   createCannon("right", 500, 1500);
   createCannon("right", 700, 2500);
   createCannon("top", 100, 100);
   //////////////////////////////////
   // ONLY CHANGE ABOVE THIS POINT //
   //////////////////////////////////
 }


 registerSetup(setup);
});


