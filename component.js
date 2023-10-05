class Component {
  constructor(game, width, height, color, x, y) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedY = 0;
    this.x = x;
    this.y = y;
  }

  crashWith(object) {
    const myLeft = this.x;
    const myRight = this.x + this.width;
    const myTop = this.y;
    const myBottom = this.y + this.height;
    const objectLeft = object.x;
    const objectRight = object.x + object.width;
    const objectTop = object.y;
    const objectBottom = object.y + object.height;
    if (
      myBottom < objectTop ||
      myTop > objectBottom ||
      myRight < objectLeft ||
      myLeft > objectRight
    ) {
      return false;
    }
    return true;
  }

  newPos() {
    this.y += this.speedY;
  }

  update() {
    this.ctx = this.game.context;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
