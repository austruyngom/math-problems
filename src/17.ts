import numpy as np
import sympy as sp

# Define symbols
x, y = sp.symbols('x y')

# Define the differential equation
differential_equation = (sp.diff(x**2 + 3*x*y - 5, x) -
                         sp.diff(y**2 + 4*x*y - 6, y))

# Solve the differential equation
solution = sp.dsolve(differential_equation)

# Print the solution
print(solution)
