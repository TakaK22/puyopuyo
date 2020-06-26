class PuyoImage {
  // static puyoImages;
  // static batankyuImage;
  // static gameOverFrame;

  static initialize() {
    this.puyoImages = [];
    const image = document.getElementById(`puyo_1`);
    this.puyoImages[0] = image;
    this.batankyuImage = document.getElementById("batankyu");
    this.batankyuImage.width = Config.puyoImgWidth * 6;
    this.batankyuImage.style.position = "absolute";
  }

  static getPuyo(index) {
    const image = this.puyoImages[index + 1];
    return image;
  }

  static prepareBatankyu(frame) {
    this.gameOverFrame = frame;
    Stage.stageElement.appendChild(this);
  }
}
