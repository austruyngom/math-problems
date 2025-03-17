import random

def get_random_ts_code():
    """Returns a randomly generated TypeScript code."""
    # Generate a random number between 1 and 6
    num = random.randint(1, 6)
    # Return the corresponding TypeScript code
    if num == 1:
        return "let x = 5; console.log(x);"
    elif num == 2:
        return "const y = 'hello'; console.log(y);"
    elif num == 3:
        return "function add(a, b) { return a + b; } console.log(add(5, 6));"
    elif num == 4:
        return "interface Person { name: string; age: number; } const person: Person = { name: 'Alice', age: 30 }; console.log(person);"
    elif num == 5:
        return "class Animal { private _name: string; public constructor(name: string) { this._name = name; } public get name() { return this._name; } public set name(value: string) { this._name = value; } } const animal = new Animal('dog'); console.log(animal);"
    elif num == 6:
        return "enum Color { Red, Green, Blue }; const color = Color.Red; console.log(color);"
