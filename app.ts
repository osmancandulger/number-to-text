const convertedNum = (num: String, digit: number) => {
  if (digit == 3 || (digit == 2 && num == 'sıfır')) {
    return '';
  }
  return num;
};
const convertText = (number: number) => {
  const splitted: string[] = String(number).split('');
  let result: string = '';
  const ones: String[] = [
    'sıfır',
    'bir',
    'iki',
    'üç',
    'dört',
    'beş',
    'altı',
    'yedi',
    'sekiz',
    'dokuz',
  ];
  const tens: String[] = [
    'sıfır',
    'on',
    'yirmi',
    'otuz',
    'kırk',
    'elli',
    'altmış',
    'yetmiş',
    'seksen',
    'doksan',
    'yüz',
  ];
  const aHundreds: String[] = [
    'yüz',
    'ikiyüz',
    'üçyüz',
    'dörtyüz',
    'beşyüz',
    'altıyüz',
    'yediyüz',
    'sekizyüz',
    'dokuzyüz',
  ];
  if (number == 0) return ones[0];
  if (String(number).length == 1) {
    return ones[number - 1];
  } else if (String(number).length == 2) {
    const digit: number = String(number).length;
    return (
      convertedNum(tens[Number(splitted[0])], digit) +
      ' ' +
      convertedNum(ones[Number(splitted[1])], digit)
    );
  } else if (String(number).length == 3) {
    const digit: number = String(number).length;
    const splitted: string[] = String(number).split('');
    console.log(splitted);

    result =
      convertedNum(aHundreds[Number(splitted[0]) - 1], digit) +
      '' +
      convertedNum(tens[Number(splitted[1])], digit) +
      '' +
      convertedNum(ones[Number(splitted[2])], digit);
  }
  return result;
};
console.log(convertText(24));
