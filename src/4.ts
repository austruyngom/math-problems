import random

def get_random_ts(n):
    ts = []
    for i in range(n):
        ts.append((random.randint(0, 10), random.randint(0, 10)))
    return ts
