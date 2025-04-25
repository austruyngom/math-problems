function solveQuadraticEquation(a: number, b: number, c: number): [number, number] {
    const discriminant = Math.sqrt(b * b - 4 * a * c);
    
    if (discriminant > 0) {
        return [(-b + discriminant) / (2 * a), (-b - discriminant) / (2 * a)];
    } else if (discriminant === 0) {
        return [(-b + discriminant) / (2 * a), 0];
    } else {
        return [-b, c / (2 * a)];
    }
}
