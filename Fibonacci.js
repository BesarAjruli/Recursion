function fibs(n) {
    n += 1
    let prev = 0;
    let current = 1;
    const result = [];

    for (let i = 0; i < n; i++) {
        if(i < 2){
            result.push(i)
            continue
        }
        const next = prev + current;
        prev = current;
        current = next;

        result.push(next);
    }

    return result;
}

function fibsRec(n) {
    if (n < 2){
        return [n-1,n]
    }

    const fibs = fibsRec(n - 1);

    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

    return fibs;
}