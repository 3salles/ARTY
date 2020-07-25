let imgUi, imgFundo, ui, uiTint;
const matrizUi = geradorDeMatriz(21, 21, 620, 620);

function preload(){
  imgFundo = loadImage('http://127.0.0.1:5000/static/imagens/Carbon.jpg');
  imgUi = loadImage('http://127.0.0.1:5000/static/imagens/oficial.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  ui = new Animacao(matrizUi, imgUi, 373, 50, 620, 620, 620, 620);
  frameRate(15)
}

function draw(){
  image(imgFundo, 0, 0, width, height);
  ui.exibe();
}

function geradorDeMatriz(nLinhas, nColunas, largura, altura) {
  const matriz = [];
  for (let i = 0; i < nLinhas; i++) {
    for (let j = 0; j < nColunas; j++) {
      matriz.push({
        x: j * largura,
        y: i * altura
      });
    }
  }
  return matriz;
}