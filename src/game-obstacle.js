import AnimatedElement from "./lib/animated-element.js";

export default function Obstacle(
  gameArea,
  { gapHeight, minHeight, speed, ...settings }
) {
  class Obstacle extends AnimatedElement {
    constructor(gameArea, settings) {
      if (!settings.element) {
        const maxHeight = 1 - minHeight - gapHeight;
        const randomHeight =
          Math.random() * (maxHeight - minHeight) + minHeight;

        settings.children[0].style.height = randomHeight * gameArea.height;
        settings.children[1].style.height =
          (1 - gapHeight - randomHeight) * gameArea.height;
      }
      settings.initialLeft = gameArea.width;
      super(gameArea, settings);
    }

    get gap() {
      return {
        top: Number(this.element.children[0].style.height.replace("px", "")),
        left: this.left,
        height: gapHeight * gameArea.height,
      };
    }

    get overcome() {
      return this.element.hasAttribute("obstacle-overcome")
        ? this.element.getAttribute("obstacle-overcome") === "true"
        : undefined;
    }

    set overcome(value) {
      this.element.setAttribute("obstacle-overcome", value == true);
    }
  }

  const obstacle = new Object();

  obstacle.gapHeight = gapHeight * gameArea.height;
  obstacle.gapWidth = settings.style.width;

  obstacle.list = () => {
    return Array.from(document.querySelectorAll(`#${settings.id}`)).map(
      (element) => {
        return new Obstacle(gameArea, { element });
      }
    );
  };

  obstacle.generator = () => {
    try {
      const lastObstacle = obstacle.list().reduce((acc, cur) => {
        return acc.left > cur.left ? acc : cur;
      });
      if (lastObstacle.left + lastObstacle.width < gameArea.width / 2) {
        gameArea.append(new Obstacle(gameArea, settings));
      }
    } catch (e) {
      if (e instanceof TypeError) {
        gameArea.append(new Obstacle(gameArea, settings));
      } else {
        throw e;
      }
    }
  };

  obstacle.mover = () => {
    return obstacle.list().map((cur) => {
      cur.move.left(speed);
      if (cur.left < -obstacle.gapWidth) {
        cur.remove();
      }
    });
  };

  return obstacle;
}
