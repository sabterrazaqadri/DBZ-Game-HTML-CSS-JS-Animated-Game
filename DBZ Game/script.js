score = 0
cross = true

audiogo = new Audio ('go.mp3')

document.onkeydown = function (e) {
  console.log("Key Code Is: ", e.keyCode);
  if(e.keyCode == 38){
    goku = document.querySelector(".goku");
    goku.classList.add("AnimatedGoku")
    setTimeout(() => {
        goku.classList.remove("AnimatedGoku")
    }, 700);
  }
  if(e.keyCode == 39){
    goku = document.querySelector(".goku");
    gokux = parseInt(window.getComputedStyle(goku , null).getPropertyValue("left"))
    goku.style.left = gokux + 100 + "px"; 
  }
  if(e.keyCode == 37){
    goku = document.querySelector(".goku");
    gokux = parseInt(window.getComputedStyle(goku , null).getPropertyValue("left"))
    goku.style.left = (gokux - 100) + "px"; 
  }
};

setInterval(() => {
    goku = document.querySelector(".goku")
    GameOver = document.querySelector(".GameOver")
    fire = document.querySelector(".fire")
    gokudead = document.querySelector(".gokudead")
    gx = parseInt(window.getComputedStyle(goku , null).getPropertyValue("left"))
    gy = parseInt(window.getComputedStyle(goku , null).getPropertyValue("top"))
    fx = parseInt(window.getComputedStyle(fire , null).getPropertyValue("left"))
    fy = parseInt(window.getComputedStyle(fire , null).getPropertyValue("top"))

    offsetx = Math.abs(gx-fx);
    offsety = Math.abs(gy-fy);
    console.log(offsetx, offsety);
    if (offsetx<93 && offsety<100){
        gokudead.style.visibility = "visible"
        goku.style.visibility = "hidden"
        GameOver.style.visibility = 'visible';
        audiogo.play()
        fire.classList.remove('fireani')
        
    } else if(offsetx < 150 && cross){
        score +=10;
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);

        setTimeout(() => {
            
        anidur = parseFloat(window.getComputedStyle(fire , null).getPropertyValue("animation-duration"))
        newdur = anidur - 0.02
        fire.style.animationDuration = newdur + "s"
        }, 700);
        
    }

}, 10);

function updateScore (score){
    scorecount.innerHTML = "Your Score: " + score
}