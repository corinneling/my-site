function getBusinessDays(startDate, endDate) {
  let numberOfDays = 0;

  while (startDate <= endDate) {
    const dayOfWeek = startDate.getDay();
    const weekendDay = (dayOfWeek === 6) || (dayOfWeek === 0);
    if(!weekendDay) numberOfDays++;
    startDate.setDate(startDate.getDate() + 1);
  }

  return numberOfDays;
}

export function dayCounter() {
  const daysContainer = document.querySelector('.number-of-days');
  const startDate = new Date('1-01-2016');
  const today = new Date();
  const businessDays = getBusinessDays(startDate, today)
  daysContainer.innerHTML = businessDays.toLocaleString();
}