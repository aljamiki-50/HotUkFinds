export const CalPricePersentage = (oldPrice, Price) => {
    return !!parseFloat(Price) && !!parseFloat(oldPrice)
      ? (100 - (oldPrice / Price) * 100).toFixed(0)
      : 0;
  };
  