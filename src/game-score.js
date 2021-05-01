import Element from "./lib/element.js";

export default function Score({ area, bird }, settings) {
  const score = new Element(settings);
  area.append(score);
  return {
    movementChecker: (obstaclePosition) => {
        console.log(obstaclePosition)
    },
    ...score,
  };
}
