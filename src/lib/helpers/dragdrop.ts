export const changePosition = (ele: HTMLElement, x: number, y: number) => {
  console.log({ ele });
  const cs = window.getComputedStyle(ele);
  const newHeight = y - Math.floor(parseInt(cs.height.replace('px', '')) / 2);
  const newWidth = x - Math.floor(parseInt(cs.width.replace('px', '')) / 2);
  ele.style.position = 'absolute';
  ele.style.left = newWidth.toString() + 'px';
  ele.style.top = newHeight.toString() + 'px';
};
