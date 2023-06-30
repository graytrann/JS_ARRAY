var array = [];

// document.getElementById("array").onclick = function () {
//   var number = +document.getElementById("input-number").value;
//   //   console.log(number);
//   array.push(number);
//   //   console.log(array);
//   let html = `MẢNG CỦA BẠN :`;
//   //   let html1 = `INDEX MẢNG :`
//   for (let i = 0; i < array.length; i++) {
//     html += `[${array[i]}]`;
//     // html1 += `[${[i]}]`;
//   }
//   document.getElementById("output-result").innerHTML = html;
//   //   document.getElementById("output-result1").innerHTML = html1;
// };

// XUẤT MẢNG
document.getElementById("array").onclick = function () {
  var number = +document.getElementById("input-number").value;
  array.push(number);
  let html = ``;
  let html1 = ``;
  for (let i = 0; i < array.length; i++) {
    html += `<div class="numberUp-content">
    <p>${array[i]}</p>  
    </div>`;
    html1 += `<div class="numberDown-content">
    <p>${i}</p>  
    </div>`;
  }
  document.querySelector(".numberUp").innerHTML = html;
  document.querySelector(".numberDown").innerHTML = html1;
};

// document.getElementById("arraydelete").onclick = function () {
//   array.pop();
//   let html = `MẢNG CỦA BẠN :`;
//   for (let i = 0; i < array.length; i++) {
//     html += `[${array[i]}]`;
//   }
//   document.getElementById("output-result").innerHTML = html;
// };

// XÓA MẢNG
document.getElementById("arraydelete").onclick = function () {
  array.pop();
  let html = ``;
  let html1 = ``;
  for (let i = 0; i < array.length; i++) {
    html += `<div class="numberUp-content">
    <p>${array[i]}</p>  
    </div>`;
    html1 += `<div class="numberDown-content">
    <p>${i}</p>  
    </div>`;
  }
  document.querySelector(".numberUp").innerHTML = html;
  document.querySelector(".numberDown").innerHTML = html1;
};

// document.getElementById("arraydeleteall").onclick = function () {
//   array = [];
//   let html = `MẢNG CỦA BẠN :`;
//   // for (let i = 0; i < array.length; i++) {
//   html += `${array}`;
//   // }
//   document.getElementById("output-result").innerHTML = html;
// };

// XÓA HẾT MẢNG
document.getElementById("arraydeleteall").onclick = function () {
  array = [];
  let html = ``;
  let html1 = ``;
  for (let i = 0; i < array.length; i++) {
    html += `<div class="numberUp-content">
    <p>${array[i]}</p>  
    </div>`;
    html1 += `<div class="numberDown-content">
    <p>${i}</p>  
    </div>`;
  }
  document.querySelector(".numberUp").innerHTML = html;
  document.querySelector(".numberDown").innerHTML = html1;
};

// EX1
document.getElementById("ex1").onclick = function () {
  var sum = 0;
  let html = `TỔNG CÁC SỐ DƯƠNG CỦA MẢNG : `;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  html += sum;
  document.getElementById("output-ex1").innerHTML = html;
};

// EX2
document.getElementById("ex2").onclick = function () {
  var count = 0;
  let html = `ĐẾM CÁC SỐ DƯƠNG CỦA MẢNG : `;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      count++;
    }
  }
  html += count;
  document.getElementById("output-ex2").innerHTML = html;
};

// EX3
document.getElementById("ex3").onclick = function () {
  var smallest = array[0];
  let html = `SỐ NHỎ NHẤT TRONG MẢNG : `;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  html += smallest;
  document.getElementById("output-ex3").innerHTML = html;
};

// EX4
document.getElementById("ex4").onclick = function () {
  var smallestPositive = array[0];
  let html = `SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG : `;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      smallestPositive = 0;
    } else if (array[i] > 0 && array[i] < smallestPositive) {
      smallestPositive = array[i];
    }
  }
  html += smallestPositive;
  document.getElementById("output-ex4").innerHTML = html;
};

// EX5
document.getElementById("ex5").onclick = function () {
  let lastEven = 0;
  let html = `SỐ CHẴN CUỐI CÙNG TRONG MẢNG : `;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 == 0) {
      lastEven = array[i];
    }
  }
  html += lastEven;
  document.getElementById("output-ex5").innerHTML = html;
};

// EX6
document.getElementById("ex6").onclick = function () {
  let index1 = +document.getElementById("index1").value;
  let index2 = +document.getElementById("index2").value;
  let index3 = 0;
  let html = `MẢNG ĐÃ ĐỔI : `;
  index3 = array[index1];
  array[index1] = array[index2];
  array[index2] = index3;
  for (let i = 0; i < array.length; i++) {
    html += `[${array[i]}]`;
  }
  document.getElementById("output-ex6").innerHTML = html;
};

// EX7
document.getElementById("ex7").onclick = function () {
  function compare(a, b) {
    return a - b;
  }

  let arraySort = array.sort(compare);
  let html = `SẮP XẾP TĂNG DẦN : `;

  html += arraySort;
  document.getElementById("output-ex7").innerHTML = html;
};

// CHECK SỐ NGUYÊN TỐ
function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 0) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

// EX8
document.getElementById("ex8").onclick = function () {
  let firstPrime = 0;
  let html = `SỐ NGUYÊN ĐẦU TIÊN TRONG MẢNG : `;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      if (test_prime(array[i]) === true) {
        firstPrime = array[i];
        break;
      }
    }
  }
  html += firstPrime;
  document.getElementById("output-ex8").innerHTML = html;
};

// EX9
document.getElementById("ex9").onclick = function () {
  let countPrime = 0;
  let html = `CÁC SỐ NGUYÊN TRONG MẢNG : `;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      if (test_prime(array[i]) === true) {
        countPrime++;
      }
    }
  }
  html += countPrime;
  document.getElementById("output-ex9").innerHTML = html;
};

// EX10
document.getElementById("ex10").onclick = function () {
  let countPos = 0;
  let countNev = 0;
  let html = `SO SÁNH DƯƠNG VÀ ÂM : `;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      countPos++;
    }

    if (array[i] < 0) {
      countNev++;
    }
  }

  if (countPos > countNev) {
    html += "Số dương nhiều hơn";
  } else if (countNev > countPos) {
    html += "Số âm nhiều hơn";
  } else {
    html += "Dương và âm bằng nhau";
  }

  document.getElementById("output-ex10").innerHTML = html;
};
