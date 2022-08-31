const convertedNum = (num: String, digit: number) => {
  if (digit > 1 && num == 'Sıfır') {
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
    'Altmış',
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
    'Sekiz yüz',
    'Dokuz yüz',
  ];
  if (number == 0) return ones[0];
  switch (digit) {
    case 1:
      return ones[number];
    case 2:
      return (result = `${convertedNum(
        tens[Number(splitted[0])],
        digit,
      )} ${convertedNum(ones[Number(splitted[1])], digit)}`);
    case 3:
      result = `${convertedNum(
        aHundreds[Number(splitted[0]) - 1],
        digit,
      )} ${convertedNum(tens[Number(splitted[1])], digit)} ${convertedNum(
        ones[Number(splitted[2])],
        digit,
      )}`;
      break;
    case 4:
      result = `${
        convertedNum(ones[Number(splitted[0])], digit) != 'Bir'
          ? convertedNum(ones[Number(splitted[0])], digit)
          : ''
      } Bin ${convertedNum(
        Number(splitted[1]) != 0 ? aHundreds[Number(splitted[1]) - 1] : '',
        digit,
      )} ${convertedNum(tens[Number(splitted[2])], digit)} ${convertedNum(
        ones[Number(splitted[3])],
        digit,
      )}`;
      break;
    case 5:
      result = `${convertedNum(
        tens[Number(splitted[0])],
        digit,
      )} ${convertedNum(ones[Number(splitted[1])], digit)} ${
        convertedNum(ones[Number(splitted[0])], digit) != 'Bir'
          ? convertedNum(ones[Number(splitted[0])], digit)
          : ''
      }Bin ${convertedNum(
        aHundreds[Number(splitted[2]) - 1],
        digit,
      )} ${convertedNum(tens[Number(splitted[3])], digit)} ${convertedNum(
        ones[Number(splitted[4])],
        digit,
      )}`;
      break;
    default:
      console.warn('There is something wrong!');
  }
  // It's ok until 5
  return result;
};
