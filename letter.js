class Letter {
  constructor(game, font, color, x, y) {
    this.game = game;
    this.font = font;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  update() {
    this.ctx = game.context;
    this.ctx.font = this.font;
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.text, this.x, this.y);
  }
}
