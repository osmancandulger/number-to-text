const convertText = (number: number) => {
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
    const splitted: string[] = String(number).split('');
    return tens[Number(splitted[0]) - 1] + ' ' + ones[Number(splitted[1]) - 1];
  } else if (String(number).length == 3) {
    const splitted: string[] = String(number).split('');
    console.log(splitted);
    return (
      aHundreds[Number(splitted[0]) - 1] +
      '' +
      tens[Number(splitted[1]) - 1] +
      '' +
      ones[Number(splitted[2])]
    );
  }
};
console.log(convertText(130));
