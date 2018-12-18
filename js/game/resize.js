export const resizeImage = (images) => {
  images.forEach((image) => {
    image.addEventListener(`load`, () => {
      const frameSize = {width: image.width, height: image.height};
      const givenlSize = {width: image.naturalWidth, height: image.naturalHeight};
      const newSize = resize(frameSize, givenlSize);
      image.width = newSize.width;
      image.height = newSize.height;
    });
  });
};

export const resize = (frame, given) => {
  const ratio = {
    byWidth: frame.width / given.width,
    byHeight: frame.height / given.height
  };

  const minRatio = Math.min(ratio.byWidth, ratio.byHeight);

  const newSize = {
    width: given.width * minRatio,
    height: given.height * minRatio
  };
  return newSize;
};


