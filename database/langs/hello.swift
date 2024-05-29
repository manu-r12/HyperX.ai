import Foundation

// Find function
func find(_ ar: [Int], _ t: Int) -> String {
    for i in 0..<ar.count {
        if t == ar[i] {
            return "\(ar[i])"
        }
    }
    return "couldn't find"
}

let a = [3, 1, 2, 4, 5, 4, 7, 3]
print(find(a, 3))


// Fibonacci function
func fibonacci(_ n: Int) -> Int {
    if n <= 1 {
        return n
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

print(fibonacci(10))


// Factorial function
func factorial(_ n: Int) -> Int {
    if n == 0 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

print(factorial(5))


// OOP Examples

// Shape protocol
protocol Shape {
    func area() -> Double
}

// Circle class
class Circle: Shape {
    var radius: Double

    init(radius: Double) {
        self.radius = radius
    }

    func area() -> Double {
        return .pi * radius * radius
    }
}

// Rectangle class
class Rectangle: Shape {
    var length: Double
    var breadth: Double

    init(length: Double, breadth: Double) {
        self.length = length
        self.breadth = breadth
    }

    func area() -> Double {
        return length * breadth
    }
}

let c = Circle(radius: 5)
let r = Rectangle(length: 4, breadth: 6)
print("Area of circle:", c.area())
print("Area of rectangle:", r.area())


// Example of Inheritance

class Animal {
    func speak() {
        print("Animal speaks")
    }
}

class Dog: Animal {
    func bark() {
        print("Dog barks")
    }
}

let d = Dog()
d.speak()
d.bark()


// Example of Polymorphism

class Car {
    func drive() {
        print("Car is driving")
    }
}

class Truck: Car {
    override func drive() {
        print("Truck is driving")
    }
}

func testDrive(_ vehicle: Car) {
    vehicle.drive()
}

let car = Car()
let truck = Truck()

testDrive(car)
testDrive(truck)
