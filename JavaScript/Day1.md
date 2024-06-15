JavaScript has 3 kinds of variable declarations.
`let`   - Declares a Block scoped variable or local variable and optionally assigns value to it.
`const` - Declares a Block scoped read only named constant.
`var`   - Declares a variable and Optionally assigns value to it.

Variables should always be declared before they are used.
JavaScript used to allow assigning to undeclared variables, which creates an undeclared global variable.
This is an error in strict mode and should be avoided altogether.

A variable may belong to one of the following scopes:

1. Global scope: The default scope for all code running in script mode.
2. Module scope: The scope for code running in module mode.
3. Function scope: The scope created with a function.

`const` only prevents re-assignments, but doesn't prevent mutations. The properties of objects assigned to constants are not protected

### DATA TYPES
1.  Boolean
2.  null
3.  undefined
4.  Number
5.  BigInt
6.  String
7.  Symbol
8.  Object

Data Type Conversion: JavaScript is Dynamically Typed Language so it can change the values accordingly
Type Conversion : To enforce strict type to the data.

Number + String = String
String + Number = String
NumberString + Number = String

Number - String = Number
Number * String = Number

parseInt(number, radix)
parseFloat()

Literals

Array Litreals :
An array defined with a literal in the global scope is created once when the script loads. However, if the array literal is inside a function, a new array is instantiated every time that function is called.

Boolean Litreals:
true or fasle

Numeric Litreals:
Integer Litreals
Floating-Point Litreals

Object Litreals:
An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

Regex Litreals:

String Litreals:
`` this is a template literal `${name}`.

---

