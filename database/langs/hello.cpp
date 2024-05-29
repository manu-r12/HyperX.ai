// This file is only for testing

#include <iostream>
#include <vector>

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

int main()
{
    // Define the array
    std::vector<int> a = {3, 1, 2, 4, 5, 4, 7, 3};

    int target = 3;

    std::cout << find(a, target) << std::endl;

    return 0;
}
