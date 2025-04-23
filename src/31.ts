import sympy

# Define symbols and equations
x = sympy.Symbol('x')
eq1 = 2*x - 3 + x**2
eq2 = x**2 - 4*x + 5

# Solve the system of equations
solution = sympy.solve((eq1, eq2), (x))
print(solution)
