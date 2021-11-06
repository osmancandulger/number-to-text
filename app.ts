const convertedNum = (num: String, digit: number) => {
  if ((digit == 3 || digit == 2 || digit == 4) && num == 'sıfır') {
    return '';
  }

  return num;
};
const convertText = (number: number) => {
  const digit: number = String(number).length;
  const splitted: string[] = String(number).split('');
  let result: string = '';
  const ones: String[] = [
    'Sıfır',
    'Bir',
    'İki',
    'Üç',
    'Dört',
    'Beş',
    'Altı',
    'Yedi',
    'Sekiz',
    'Dokuz',
  ];
  const tens: String[] = [
    'Sıfır',
    'On',
    'Yirmi',
    'Otuz',
    'Kırk',
    'Elli',
    'Eltmış',
    'Yetmiş',
    'Seksen',
    'Doksan',
    'Yüz',
  ];
  const aHundreds: String[] = [
    'Yüz',
    'İki yüz',
    'Üç yüz',
    'Dört yüz',
    'Beş yüz',
    'Altı yüz',
    'Yedi yüz',
    'Seki zyüz',
    'Dokuz yüz',
  ];
  if (number == 0) return ones[0];
  if (String(number).length == 1) {
    return ones[number - 1];
  } else if (String(number).length == 2) {
    return (result = `${convertedNum(
      tens[Number(splitted[0])],
      digit,
    )} ${convertedNum(ones[Number(splitted[1])], digit)}`);
  } else if (String(number).length == 3) {
    console.log(splitted);

    result = `${convertedNum(
      aHundreds[Number(splitted[0]) - 1],
      digit,
    )} ${convertedNum(tens[Number(splitted[1])], digit)} ${convertedNum(
      ones[Number(splitted[2])],
      digit,
    )}`;
  } else if (String(number).length == 4) {
    result = `${
      convertedNum(ones[Number(splitted[0])], digit) != 'bir'
        ? convertedNum(ones[Number(splitted[0])], digit)
        : ''
    } Bin ${convertedNum(
      aHundreds[Number(splitted[1]) - 1],
      digit,
    )} ${convertedNum(tens[Number(splitted[2])], digit)} ${convertedNum(
      ones[Number(splitted[3])],
      digit,
    )}`;
  }
  return result;
};
console.log(convertText(9999));
