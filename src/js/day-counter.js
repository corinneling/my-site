function dayCounter(startDate, today) {
  let numberOfDays = 0;

  while (startDate <= today) {
    const dayOfWeek = startDate.getDay();
    numberOfDays++;
    startDate.setDate(startDate.getDate() + 1);
  }

  return numberOfDays;
}

export function addDays() {
  const daysContainer = document.querySelector('.number-of-days');
  const startDate = new Date('January 04, 2016 09:00:00');
  const today = new Date();
  const days = dayCounter(startDate, today);
  daysContainer.innerHTML = days.toLocaleString();
}