let month = parseInt(prompt('Введите номер месяца (1-12):'));

if (month >= 1 && month <= 12) {
  let season;
  if (month >= 3 && month <= 5) {
    season = 'весна';
  } else if (month >= 6 && month <= 8) {
    season = 'лето';
  } else if (month >= 9 && month <= 11) {
    season = 'осень';
  } else {
    season = 'зима';
  }

  console.log(`Месяц ${month} сезон ${season}.`);
} else {
  console.log('Только от 1 до 12 братан');
}


let day = parseInt(prompt('Enter the number from (1-31):'));

if (day >= 1 && day <= 31) {
  let decade;

  if (day >= 1 && day <= 10) {
    decade = 1;
  } else if (day >= 11 && day <= 20) {
    decade = 2;
  } else {
    decade = 3;
  }

  console.log(`Число ${day} находится в ${decade} декаде месяца.`);
} else {
  console.log('Wrong number write from 1-31');
}
