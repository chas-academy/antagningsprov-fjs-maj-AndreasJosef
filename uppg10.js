function uppg10() {
  const numbers = [5, 12, 7, 10, 20, 9, 11];

  // skapa tre arrayer - bigEven, smallOdd, other
  let bigEven = [];
  let smallOdd = [];
  let other = [];

  // loopa igenom numbers och placera talen i respektive array
  numbers.forEach(number => {

    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    if (number > 10 && number % 2 === 0) {
      bigEven.push(number);
    }

    // smallOdd ska innehålla tal mindre än 10 och udda
    else if (number < 10 && number % 2 !== 0) {
      smallOdd.push(number)

      // other ska innehålla alla andra tal
    } else {
      other.push(number)

    }
  });

  // returnera ett objekt med de tre arrayerna
  return {
    bigEven,
    smallOdd,
    other
  };
}

module.exports = { uppg10 };
