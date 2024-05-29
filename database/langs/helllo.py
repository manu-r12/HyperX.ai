# This file is only for testing 


a = [3, 1, 2, 4, 5, 4, 7, 3]

def find(ar, t):
    for i in range(len(ar)):
        if t == ar[i]:
            return ar[i]
        else:
            return "couldn't find"
        

print(find(a, 3))        