import sympy as sp
from sympy import symbols

x = symbols('x')
f = x**3 - 2*x**2 + 1
solve(f)
