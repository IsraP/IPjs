let maximo = maximo(vetor) => { 
    let max = -Infinity;
    for (let i = 0; i < vetor.length; i++) 
      if (vetor[i] > max) 
        max = vetor[i];
    return max;
  }

  let v = [1, 6, 3, 4, 2, 5];
console.log(maximo(v));