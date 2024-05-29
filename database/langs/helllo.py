# This file is only for testing 


a = [3, 1, 2, 4, 5, 4, 7, 3]

def find(ar, t):
    for i in range(len(ar)):
        if t == ar[i]:
            return ar[i]
        else:
            return "couldn't find"
        

print(find(a, 3))        


def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))


def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))



#  OOPS Examples 

class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

class Rectangle(Shape):
    def __init__(self, length, breadth):
        self.length = length
        self.breadth = breadth

    def area(self):
        return self.length * self.breadth

c = Circle(5);
r = Rectangle(4, 6);
print("Area of circle:", c.area())
print("Area of rectangle:", r.area())
