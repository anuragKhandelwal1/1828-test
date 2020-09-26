function freq(str) {
  const strArr = str.split(" ");
  const frequencyObj = {};
  strArr.forEach((word) => {
    frequencyObj[word] = (frequencyObj[word] ?? 0) + 1;
  });
  console.log(frequencyObj);

  return frequencyObj;
}

freq(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Consectetur libero id faucibus nisl tincidunt eget nullam. Vitae auctor eu augue ut. Laoreet sit amet cursus sit amet dictum sit."
);
