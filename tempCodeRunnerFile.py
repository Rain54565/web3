    def __init__(self, name):
        self.name = name
       
class B:
    def __init__(self, age):
        self.age = age

class C(A, B):
    def __init__(self, name, age, address):
        A.__init__(self, name)
        B.__init__(self, age)
        self.address = address
    
    def print_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Address: {self.address}")

c=C(input("name"),input("age"),input("address"))
c.print_info()