#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 3;
    int c = 7;
    
    if (a > b) {
        if (b > c) {
            cout << "The largest number is " << c << endl;
        } else {
            cout << "The largest number is not defined because one of the numbers is less than or equal to the other." << endl;
        }
    } else {
        if (a > c) {
            cout << "The largest number is " << a << endl;
        } else {
            cout << "The largest number is not defined because one of the numbers is less than or equal to the other." << endl;
        }
    }
    
    return 0;
}
