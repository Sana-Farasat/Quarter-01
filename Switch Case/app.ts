/*

difference between if/else statement and 
switch case statement in typescript??


if/else statement: 
used to check few conditions
code readibility itni nh hti
easy to understand
we use this when we have a double expression in one line

switch case statement:
used to check multiple conditions
code readibility hti hai
complex to understand
its useful when we have a single expression that you want 
to compare against multiple possible values.

Differences:
Complexity:

if/else statements are more flexible and can handle complex conditions.
switch statements are more suitable for scenarios where you have a single expression to evaluate against multiple values.
Expression Type:

if/else statements can handle any boolean expression.
switch statements require an expression that results in a value, such as a number or string.
Flow Control:

In if/else statements, the flow of control depends on the evaluation of conditions from top to bottom.
In
switch statements, the flow of control jumps directly to the matching case, which can sometimes be faster for large sets of conditions.

Default Case:
if/else statements don't have an explicit default case, but you can use else to handle cases that don't match any condition.
switch statements have an explicit default case to handle situations where none of the other cases match.
In TypeScript, both constructs are valid and have their own strengths depending on the context and requirements of your code.


code of cli based simple calculator in
 typescript using switch case??

*/