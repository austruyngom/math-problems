using System;

class Program {
    static void Main(string[] args) {
        // Example implementation of a generic algorithm
        Console.WriteLine("This is an example of a generic algorithm.");
        int result = Add(5, 3);
        Console.WriteLine($"The sum of {5} and {3} is {result}.");
    }

    static int Add(int a, int b) {
        return a + b;
    }
}
