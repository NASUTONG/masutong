export const configurazione = {
  testo: "MST",
  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",
  mostraTestoSotto: true,
  mostraTestoSopra: false,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza
 * @property {number} unita - Unita' di misura di riferimento
 * @property {number} volume - Il volume del microfono
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation)
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt)
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt)
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  angleMode(RADIANS);
  push();
  translate(x, y);
  rotate(frameCount / 10);
  fill("white");
  drawStar(0, 0, 10);
  pop();
}

// 绘制五角星函数
function drawStar(x, y, radius) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < 10; i++) {
    let angle = (PI / 5) * i;
    let r = i % 2 == 0 ? radius : radius / 2;
    let sx = cos(angle) * r;
    let sy = sin(angle) * r;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  pop();
}

//

export function caricamentoRisorse() {}

export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background(255);

  fill("SlateBlue");
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  //   stroke("white");
  //   noFill();
  //   disegnaTesto();
}
