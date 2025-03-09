import java.util.*;
public class MathProblem {
  public static void main(String[] args) {
    // Randomly generate a math problem and solve it
    int x = (int)(Math.random() * 10);
    int y = (int)(Math.random() * 10);
    System.out.println("What is " + x + " + " + y + "?");
    Scanner input = new Scanner(System.in);
    String answer = input.nextLine();
    if (answer.equals(String.valueOf(x + y))) {
      System.out.println("Correct!");
    } else {
      System.out.println("Incorrect, the correct answer is " + (x + y));
    }
  }
}
