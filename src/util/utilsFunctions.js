const incrementStarsFeedback = stars => {
  const arrStars = [];
  const number = Number(stars[0]);
  const number2 = Number(stars[2]);

  while (arrStars.length < 5) {
    if (arrStars.length < number) {
      arrStars.push('startFull');
    } else if (arrStars.length === number && number2 !== 0) {
      arrStars.push('middle');
    } else {
      arrStars.push('notpoint');
    }
  }

  return arrStars;
};

const increaseCardSizeToggle = (setStateCard, stateCard) => {
  console.log(stateCard);
  return setStateCard(!stateCard);
};

export { incrementStarsFeedback, increaseCardSizeToggle };
