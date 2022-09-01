const data = require('./data.json');
const ones: String[] = data?.ones;
const tens: String[] = data?.tens;
const aHundreds: String[] = data?.aHundreds;

const convertedNum = (num: String, digit: number) => {
  if (digit > 1 && num == 'Sıfır') {
    return '';
  }

  return num;
};
const convertText = (number: number) => {
  // TODO: find a way to splice if 0
  const digit: number = String(number).length;
  const splitted: string[] = String(number).split('');
  let result: string = '';
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
      )} ${convertedNum(ones[Number(splitted[1])], digit)} Bin ${
        Number(splitted[2]) != 0
          ? convertedNum(aHundreds[Number(splitted[2]) - 1], digit)
          : ''
      } ${convertedNum(tens[Number(splitted[3])], digit)} ${convertedNum(
        ones[Number(splitted[4])],
        digit,
      )}`;
      break;

    case 6:
      result = `${
        convertedNum(ones[Number(splitted[0])], digit) != 'Bir'
          ? convertedNum(ones[Number(splitted[0])], digit)
          : ''
      } Yüz ${convertedNum(tens[Number(splitted[1])], digit)} ${
        Number(splitted[2]) != 0
          ? convertedNum(ones[Number(splitted[2])], digit)
          : ''
      } Bin ${
        Number(splitted[3]) != 0
          ? convertedNum(aHundreds[Number(splitted[3]) - 1], digit)
          : ''
      } ${convertedNum(tens[Number(splitted[4])], digit)} ${convertedNum(
        ones[Number(splitted[5])],
        digit,
      )}`;
      break;
    case 7:
      const zeroLength: number = splitted.filter(
        item => Number(item) === 0,
      ).length;
      result = `${convertedNum(ones[Number(splitted[0])], digit)} Milyon ${
        convertedNum(ones[Number(splitted[1])], digit) != 'Bir' &&
        Number(splitted[1]) != 0
          ? `${convertedNum(ones[Number(splitted[1])], digit)} Yüz`
          : Number(splitted[1]) != 0
          ? 'Yüz'
          : ''
      } ${convertedNum(tens[Number(splitted[2])], digit)} ${
        zeroLength == 6
          ? ''
          : Number(splitted[3]) != 0
          ? `${convertedNum(ones[Number(splitted[3])], digit)} Bin`
          : zeroLength == 6
          ? ''
          : 'Bin'
      } ${
        Number(splitted[4]) != 0
          ? convertedNum(aHundreds[Number(splitted[4]) - 1], digit)
          : ''
      } ${convertedNum(tens[Number(splitted[5])], digit)} ${convertedNum(
        ones[Number(splitted[6])],
        digit,
      )}`;
      break;
    default:
      console.warn('There is something wrong!');
  }
  // It's ok until 8
  return result;
};
export default convertText;
