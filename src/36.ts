import sympy as sp

# Define symbols
x, y = sp.symbols('x y')

# Define the equation
equation = x**2 + 3*x*y - y**2 - 5

# Solve for y in terms of x
solution = sp.solve(equation, y)
print(solution)
