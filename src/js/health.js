const announceIncrease = (firstEmptyHeart, numberOfHearth) => {
  const heartAlert = document.querySelector('#health-hearts');
  const numberFilled = firstEmptyHeart.getAttribute('data-heart-number');
  const noHeartsFilled = !firstEmptyHeart.classList.contains('filled');
  const noInitialHeartsFilled = !firstEmptyHeart.classList.contains('filled-on-load');

  if (noHeartsFilled && noInitialHeartsFilled) {
    heartAlert.innerHTML = `health lost: 0 of ${numberOfHearth} filled`;
  } else {
    heartAlert.innerHTML = `health increased: ${numberFilled} of ${numberOfHearth} filled`;
  }
}

const increaseHealth = (e) => {
  const emptyHearts = [];
  const hearts = document.querySelectorAll('.heart');

  hearts.forEach((heart) => {
    const noHeartsFilled = !heart.classList.contains('filled');
    const noInitialHeartsFilled = !heart.classList.contains('filled-on-load');
  
    if (noHeartsFilled && noInitialHeartsFilled) {
      emptyHearts.push(heart);
    }
  });

  if(emptyHearts.length <= 0) return;

  const firstEmptyHeart = emptyHearts[0]
  firstEmptyHeart.classList.add('filled');
  e.target.classList.add('nom-nom-nom');
  announceIncrease(firstEmptyHeart, hearts.length);
}

export function handleHealth(buttons) {
  buttons.forEach((button) => {
    button.addEventListener('click', increaseHealth);
  })
}

const resetHealth = () => {
  const hearts = document.querySelectorAll('.heart');
  const foodButtons = document.querySelectorAll('.food');

  hearts.forEach((heart) => {
    heart.classList.remove('filled', 'filled-on-load');
  });

  foodButtons.forEach((button) => {
    if (button.classList.contains('nom-nom-nom')) {
      button.classList.remove('nom-nom-nom')
    }
  });

  announceIncrease(hearts[0], hearts.length);
}

export function handleResetHealth(resetButton) {
  resetButton.addEventListener('click', resetHealth);
}

