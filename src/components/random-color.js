const colorPalete = [
  '#4876D6',
  '#19b4ba',
  '#FF6978',
  '#917af2',
  '#1c133f',
  '#2cecd2',
  '#2ca6ec',
  '#ffed69',
];

function setRandomColors(){
  const firstColor = colorPalete[Math.floor(Math.random()*colorPalete.length)];
  const newPalette = colorPalete.splice(firstColor, 1);
  const secondColor = newPalette[Math.floor(Math.random()*newPalette.length)];
  

  document.documentElement.style.setProperty('--post-primary-color', firstColor)
  document.documentElement.style.setProperty('--post-secondary-color', secondColor)
}

export default setRandomColors;

