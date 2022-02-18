//Criando variáveis
var caminho;
  var paredeE;
var paredeD;
  var pessoa
var imgcaminho
  var imgpessoa
var i;


function preload(){
  imgcaminho = loadImage("path.png");
  
  imgpessoa = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
//Plano de fundo 
caminho=createSprite(200,200);
  caminho.addImage(imgcaminho);
caminho.scale=1.2;
  caminho.velocityY = 4;


//Pessoa correndo
pessoa = createSprite(180,340,30,30);
  pessoa.scale=0.08;
pessoa.addAnimation("JakeRunning",imgpessoa);
  
//Parede Esquerda
paredeE=createSprite(0,0,100,800);
  paredeE.invisible = false;
paredeE.visible = true;
  paredeE.invisible = true;
paredeE.visible = false;


paredeD=createSprite(410,0,100,800);
  paredeD.invisible = false;
paredeD.visible = true;
  paredeD.invisible = true;
paredeD.visible = false;
}

//Draw
function draw() {
  background(0);
  caminho.velocityY = 4;
  
  pessoa.x = World.mouseX;
  
  //Paredes e colisão
  edges= createEdgeSprites();
    pessoa.collide(edges[3]);
  pessoa.collide(paredeD);
    pessoa.collide(paredeE);
  
//Plano de fundo infinito

  if(caminho.y > 400 ){
    caminho.y = height/2;
  }

  drawSprites();
}
