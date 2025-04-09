import sympy as sp

def solve_system(a1, b1, c1, d1, e1, f1):
    x1, y1 = sp.symbols('x y')
    system_eqs = [
        (a1 - 2*y1), 
        (b1 - 3*x1),
        (c1 + 4*y1)
    ]
    solution = sp.solve(system_eqs, (x, y))
    return solution

# Example usage:
a1 = 5
b1 = 10
c1 = 2
d1 = 3
e1 = 8
f1 = -9
solution = solve_system(a1, b1, c1, d1, e1, f1)
print(solution)
