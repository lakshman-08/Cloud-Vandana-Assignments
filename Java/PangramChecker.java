import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase(); // Convert the input to lowercase for case insensitivity.

        if (isPangram(input)) {
            System.out.println("It is a pangram.");
        } else {
            System.out.println("It is not a pangram.");
        }

        scanner.close();
    }

    // Function to check if the input is a pangram.
    public static boolean isPangram(String input) {
        // Create a boolean array to track the presence of each alphabet (a to z).
        boolean[] alphabetPresent = new boolean[26];

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a'; // Calculate the index for the alphabet in the array.
                alphabetPresent[index] = true;
            }
        }

        // Check if all alphabets (a to z) are present.
        for (boolean isPresent : alphabetPresent) {
            if (!isPresent) {
                return false; // If any alphabet is missing, it's not a pangram.
            }
        }

        return true; // All alphabets are present, so it's a pangram.
    }
}

