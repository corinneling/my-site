function getBusinessDays(startDate, currentDate) {
  let numberOfDays = 0;

  while (startDate <= currentDate) {
    const dayOfWeek = startDate.getDay();
    const weekendDay = (dayOfWeek === 6) || (dayOfWeek === 0);
    if(!weekendDay) numberOfDays++;
    startDate.setDate(startDate.getDate() + 1);
  }

  return numberOfDays;
}

export function dayCounter() {
  const daysContainer = document.querySelector('.number-of-days');
  const startDate = new Date('January 04, 2016 09:00:00');
  const today = new Date();
  const businessDays = getBusinessDays(startDate, today);
  daysContainer.innerHTML = businessDays.toLocaleString();
}