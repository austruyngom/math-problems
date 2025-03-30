from math import gcd

def lcm(a, b):
    return abs(a*b) // gcd(a, b)

a = 12
b = 8

result = lcm(a, b)
print(result)
