var balloon, towers,bird1
//var obstacle1 
function   preload() {
backgroundImg = loadImage("assets/bg.png")
obstacle1Img = loadImage("assets/obsBottom1.png")
obstacle2Img = loadImage("assets/obsBottom2.png")
obstacle3Img = loadImage("assets/obsBottom3.png")
obstacle4Img = loadImage("assets/obsTop1.png")
obstacle5Img = loadImage("assets/obsTop2.png")
gameOverImg = loadImage("assets/gameOver.png")
restartImg   = loadImage("assets/restart.png")
balloonanime = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")


}
function setup () {
createCanvas(800,600)
bg = createSprite(165,485)
bg.addImage(backgroundImg)
bg.scale = 1.3

balloon = createSprite(100,200,20,50)
balloon.addAnimation("moving",balloonanime)
balloon.scale = 0.2

topGround = createSprite(400,10,800,20)
topGround.visible = false

bottomGround = createSprite(400,590,800,20)
bottomGround.visible = false
}
function draw (){
background(0)

if(keyDown("UP_ARROW")){
balloon.velocityY = -10
}
balloon.velocityY += 0.5
balloon.collide(bottomGround)
//balloon.collide(topGround)
 
if(bg.x<20){
bg.x = 165

}
bg.velocityX = -1
drawSprites()
spawnObstaclesTop()
spawnObstaclesBottom()
}
function spawnObstaclesTop(){
if (frameCount%100===0){
    obstacle = createSprite(800,50)
    obstacle.velocityX = -2
    obstacle.scale = 0.1
    obstacle.y = random(50,250)
    rand = Math.round(random(1,2))
    obstacle.lifetime = 500
    switch (rand){
    case 1 : obstacle.addImage(obstacle4Img)
    break
    case 2 :obstacle.addImage(obstacle5Img)
    break
    
    }
}
}
function spawnObstaclesBottom(){
    if (frameCount%200===0){
        obstacle = createSprite(800,500)
        obstacle.velocityX = -2
        obstacle.scale = 0.12
        //obstacle.y = random(550,250)
        rand = Math.round(random(1,3))
        obstacle.lifetime = 500
        switch (rand){
        case 1 : obstacle.addImage(obstacle1Img)
        break
        case 2 :obstacle.addImage(obstacle2Img)
        break
        case 3 :obstacle.addImage(obstacle3Img)
        break
        }
    }
}
