function fibs(n) {
  let prev = 0;
  let current = 1;
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      result.push(i);
      continue;
    }
    const next = prev + current;
    prev = current;
    current = next;

    result.push(next);
  }

  return result;
}

function fibsRec(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  const fibs = fibsRec(n - 1);

  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}

console.log(fibsRec(8));
