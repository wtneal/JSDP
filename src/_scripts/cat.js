'use strict';

export default ((n, img) => {
  let count = 0;
  const image = img;
  const name = n;
  const inc = () => {
    count += 1;
    return count;
  };

  const getCount = () => {
    return count;
  };

  return {
    name: name,
    image: image,
    getCount: getCount,
    inc: inc
  };
});
