score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("Key code is:", e.keyCode)
    if(e.keyCode==38){
        man = document.querySelector('.man');
        man.classList.add('animateman');
        setTimeout(() =>{
            console.log("yes")
            man.classList.remove('animateman')
        }, 900)

    }
    if(e.keyCode==39){
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = manX + 112 + "px";
    }
    if(e.keyCode==37){
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = (manX - 112) + "px";
    }
}
setInterval(()=>{
    man = document.querySelector('.man');
    gameOver =  document.querySelector('.gameOver');
    obstacle =  document.querySelector('.obstacle');
    mx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));
    ox =parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(mx-ox);
    offsetY = Math.abs(my-oy);
    // console.log(offsetX, offsetY)
    if(offsetX<93 && offsetY<52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if(offsetX<145 && cross){
        score= score+1;
        updateScore(score);
        cross= false;
        setTimeout(()=>{
            cross = true;
        }, 1000);
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('new animation duration: ',newDur );
        },500);
       
    }


},10)
function updateScore(score){
    scoreCont.innerHTML = "Your Score: "+ score
}
