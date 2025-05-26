def fibonacci(num):
    if num <= 1:
        return num
    else:
        return fibonacci(num - 1) + fibonacci(num - 2)

num = int(input("Enter a number: "))
print(fibonacci(num))
