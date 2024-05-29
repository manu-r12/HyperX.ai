// This file is only for testing

#include <iostream>
#include <vector>

// some functions to test on the code editor

int factorial(int n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}

int fibonacci(int n)
{
    if (n <= 1)
    {
        return n;
    }
    else
    {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

std::string find(const std::vector<int> &ar, int t)
{
    // Iterate through the array
    for (int i = 0; i < ar.size(); ++i)
    {
        if (t == ar[i])
        {
            return std::to_string(ar[i]);
        }
    }
    return "couldn't find";
}

// OOPS Examples

class Shape
{
public:
    virtual double area() = 0;
};

class Circle : public Shape
{
private:
    double radius;

public:
    Circle(double radius) : radius(radius) {}

    double area() override
    {
        return 3.14 * radius * radius;
    }
};

class Rectangle : public Shape
{
private:
    double length;
    double breadth;

public:
    Rectangle(double length, double breadth) : length(length), breadth(breadth) {}

    double area() override
    {
        return length * breadth;
    }
};

int main()
{
    // Define the array
    std::vector<int> a = {3, 1, 2, 4, 5, 4, 7, 3};

    int target = 3;

    std::cout << find(a, target) << std::endl;

    return 0;
}
