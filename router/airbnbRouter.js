import express from 'express';

export const airbnbRouter = express.Router();

airbnbRouter.get('/', (req, res) => {
  const prices = getPriceList();
  const minPrice = 50000;
  const maxPrice = prices.slice(-1);
  res.json({
    list: prices,
    minPrice,
    maxPrice,
  });
});

const getPriceList = () => {
  const min = 50000;
  const sections = [
    70000, 90000, 110000, 130000, 150000, 200000, 250000, 300000, 400000,
    500000,
  ];
  return Array(200)
    .fill(0)
    .map((v, i) => {
      if (i < 20)
        return (
          min + parseInt((Math.random() * (sections[0] - min)) / 100) * 100
        );
      if (i < 40)
        return (
          min + parseInt((Math.random() * (sections[1] - min)) / 100) * 100
        );
      if (i < 60)
        return (
          min + parseInt((Math.random() * (sections[2] - min)) / 100) * 100
        );
      if (i < 80)
        return (
          min + parseInt((Math.random() * (sections[3] - min)) / 100) * 100
        );
      if (i < 100)
        return (
          min + parseInt((Math.random() * (sections[4] - min)) / 100) * 100
        );
      if (i < 120)
        return (
          min + parseInt((Math.random() * (sections[5] - min)) / 100) * 100
        );
      if (i < 140)
        return (
          min + parseInt((Math.random() * (sections[6] - min)) / 100) * 100
        );
      if (i < 160)
        return (
          min + parseInt((Math.random() * (sections[7] - min)) / 100) * 100
        );
      if (i < 180)
        return (
          min + parseInt((Math.random() * (sections[8] - min)) / 100) * 100
        );
      else
        return (
          min + parseInt((Math.random() * (sections[9] - min)) / 100) * 100
        );
    })
    .sort((a, b) => a - b);
};
