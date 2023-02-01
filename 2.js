function numbers(num) {
  if (num <= 1000) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть меньше 1000, данные не верны";
  }
}

console.log(numbers(777));