function delta(a, b, c) {
    const d = Math.pow(b, 2) - 4 * a * c
    if (d < 0) {
        console.log(`A função não pode ser continuada: Delta negativo ${d}`);
    } else {
        let x1 = -b + Math.sqrt(d / 2 * a)
        let x2 = b + Math.sqrt(d / 2 * a)
        console.log(`x¹ = ${x1}, x² = ${x2}`);
    }


}

delta(2, -3, 10)

