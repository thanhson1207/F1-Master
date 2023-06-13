function FindMax(data) {
  if (data.length < 3) {
    return null; // Trả về null nếu mảng có ít hơn 3 phần tử
  }

  let FirstNum = -Infinity;
  let SecondNum = -Infinity;
  let thirdNum = -Infinity;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > FirstNum) {
      thirdNum = SecondNum;
      SecondNum = FirstNum;
      FirstNum = data[i];
    } else if (data[i] > SecondNum) {
      thirdNum = SecondNum;
      SecondNum = data[i];
    } else if (data[i] > thirdNum) {
      thirdNum = data[i];
    }
  }
  return [FirstNum, SecondNum, thirdNum];
}

export default FindMax;
