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
createPlatform(500,700,500,800);
createPlatform(600,600,600,700,);
createPlatform(800,600,800,800,);
createPlatform(700,500,800,800,"hotpink");
createPlatform(400,800,800,900,);
createPlatform(1350, 400, 50, 50, "red");
createPlatform(1150, 300, 50, 50, "yellow");
createPlatform(1000, 200, 50, 50, "green");
createPlatform(600, 100, 300, 50, "blue");
    // TODO 3 - Create Collectables;
createCollectable("diamond", 700, 90, 0.5, 0.7);
createCollectable("steve",1350, 300,);
createCollectable("diamond", 400, 90, 0.5, 0.7);
createPlatform(400, 300, 300, 50, "blue");
createPlatform(800, 400, 50, 50, "red");
    
    // TODO 4 - Create Cannons
createCannon("right", 300, 2000);
createCannon("left", 300, 2000);
createCannon("left", 500, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
