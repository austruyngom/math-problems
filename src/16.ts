def sum_of_squares(a: int, b: int) -> int:
    return a ** 2 + b ** 2

def product_of_multiples(n: int) -> int:
    return (n * (n + 1)) // 2

def cube_root(num: float) -> float:
    if num < 0:
        return -num
    return num ** (1/3)

# Example usage:
result = sum_of_squares(5, 3)
print(result)  # Output: 34
