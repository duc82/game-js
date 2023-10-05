class Game {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
    document.getElementById("game").appendChild(this.canvas);
    this.frame = 0;
    this.obstacles = [];
    this.score = new Letter(
      this,
      "20px Consolas",
      "black",
      this.canvas.width - 150,
      40
    );
    this.square = new Component(this, 30, 30, "red", 30, height / 2);
    this.loop();
  }

  loop() {
    this.interval = setInterval(() => this.update(), 20);
  }

  everyInterval(n) {
    if ((this.frame / n) % 1 === 0) {
      return true;
    }
    return false;
  }

  update() {
    for (const obstacle of this.obstacles) {
      if (this.square.crashWith(obstacle)) {
        this.stop();
        return;
      }
    }

    this.clear();
    this.frame += 1;
    if (this.frame === 1 || this.everyInterval(150)) {
      const minGap = 50;
      const maxGap = 200;
      const minHeight = 20;
      const maxHeight = 200;

      const height = Math.floor(
        Math.random() * (maxHeight - minHeight + 1) + minHeight
      );
      const gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      // thanh tren
      this.obstacles.push(
        new Component(this, 10, height, "green", this.canvas.width, 0)
      );
      // thanh duoi
      this.obstacles.push(
        new Component(
          this,
          10,
          this.canvas.width - height - gap,
          "green",
          this.canvas.width,
          height + gap
        )
      );
    }
    for (const obstacle of this.obstacles) {
      obstacle.x += -5;
      obstacle.update();
    }
    this.score.text = `Score: ${this.frame}`;
    this.score.update();
    this.square.newPos();
    this.square.update();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  stop() {
    clearInterval(this.interval);
  }
}

const game = new Game(800, 400);

function moveup() {
  game.square.speedY = -1;
}

function movedown() {
  game.square.speedY = 1;
}

function clearmove() {
  game.square.speedY = 0;
}
