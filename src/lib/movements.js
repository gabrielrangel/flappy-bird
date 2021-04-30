export default function Movements(parent, element, { top = 0, left = 0 }) {
  const height = parent.height;
  const width = parent.width;
  const maxTop = parent.height - element.height;
  const minTop = 0;
  element.top = top;
  element.left = left;
  return {
    up: (speed) => {
      const top = element.top - speed * height;
      element.top = top > minTop ? top : minTop;
    },

    down: (speed) => {
      const top = element.top + speed * height;
      element.top = top < maxTop ? top : maxTop;
    },

    right: (speed) => {
      element.left += speed * width;
    },

    left: (speed) => {
      element.left -= speed * width;
    },
  };
}
