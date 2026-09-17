export const stage02 = {
  id: "stage-02",
  number: "02",
  title: "Operators, Expressions & Logic",
  subtitle: "Logic & Math",
  description: "Learn how to manipulate data, perform calculations, and build logical expressions that evaluate to True or False.",
  estimatedTime: "2.5 Hours",
  lessonsCount: 8,
  difficulty: "Beginner",
  status: "completed",
  prerequisites: ["stage-01"],
  lessons: [
    {
      id: "lesson-01",
      title: "Basic Math Operators",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "What are Operators?",
          content: "Programming isn't just about storing data in variables; it's about *doing things* with that data. **Operators** are special symbols that perform specific actions on values."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Do We Need Math in Code?",
          content: "Math is everywhere in software. When your character takes damage in a game, that's subtraction. When a shopping cart calculates tax, that's multiplication. When a progress bar moves, that's division."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The Core Math Symbols",
          content: "Python uses standard symbols for basic math:\n* `+` Addition\n* `-` Subtraction\n* `*` Multiplication\n* `/` Division (always results in a float)\n\n```python\nhealth = 100\nhealth = health - 20\nprint(health) # 80\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Math in Action",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Math",
            prompt: "What will `score` be at the end of this script?",
            initialCode: "score = 10\nscore = score * 2\nscore = score + 5\nprint(score)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Exactly. Variables can be updated based on their previous values. This is how games track your score over time!"
          },
          {
            id: "step-2-experiment",
            type: "experiment",
            title: "The Division Quirk",
            prompt: "Run the code below. Notice that dividing two integers gives a float (`5.0` instead of `5`).",
            initialCode: "slices = 10\npeople = 2\npieces_per_person = slices / people\nprint(pieces_per_person)",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "In Python 3, regular division `/` always creates a float (decimal), even if it divides perfectly evenly."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Shopping Cart",
            prompt: "Calculate the total cost. You have `price_per_item` (15) and `quantity` (3). Create a variable `total` that multiplies them, and print it.",
            initialCode: "price_per_item = 15\nquantity = 3\n\n# calculate total here and print it",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "price_per_item = 15\nquantity = 3\ntotal = price_per_item * quantity\nprint(total)", expectedOutput: "45" }
            ],
            successMessage: "Great job! You calculated a total dynamically."
          }
        ]
      }
    },
    {
      id: "lesson-02",
      title: "Order of Operations",
      time: "15 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "PEMDAS in Code",
          content: "Just like in regular math, Python follows a strict order of operations: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why It Matters",
          content: "If Python just read left-to-right, `10 + 5 * 2` would be 30. But because multiplication happens first, the true answer is 20. If you don't understand the order, your software's logic will fail silently (no error message, just the wrong answer)."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: Forcing the Order",
          content: "When in doubt, use parentheses `()`. They force Python to evaluate the inside expression before anything else. \n\n```python\n# Multiplication happens first\nprint(10 + 5 * 2) # 20\n\n# Parentheses force addition first\nprint((10 + 5) * 2) # 30\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Controlling Math",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Precedence",
            prompt: "What will `result` be? Remember the order of operations.",
            initialCode: "result = 20 - 4 * 2\nprint(result)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Right! Python multiplied 4*2 (8) and subtracted it from 20."
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "The Average Bug",
            prompt: "We want to find the average of 10 and 20. The answer should be 15. Run this code and see why it gives the wrong answer. Fix it using parentheses.",
            initialCode: "num1 = 10\nnum2 = 20\n\n# This is a logical error, Python won't warn you!\naverage = num1 + num2 / 2\nprint(average)",
            buttonText: "Run Fixed Code",
            hints: [
              "Python is dividing num2 by 2 before adding num1.",
              "You want to add num1 and num2 FIRST.",
              "Wrap the addition in parentheses."
            ],
            expectedOutputRequired: true,
            solutionCode: "num1 = 10\nnum2 = 20\naverage = (num1 + num2) / 2\nprint(average)",
            nextStepMessage: "Fixed! You controlled the order of execution to fix a silent logical error."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Game Score Calculation",
            prompt: "A player gets 100 points for a win, plus a 50 point bonus if they were the MVP. This total is then multiplied by a `difficulty_multiplier` of 1.5. Write the formula using proper parentheses.",
            initialCode: "win_points = 100\nmvp_bonus = 50\nmultiplier = 1.5\n\n# Write formula here and print the final score",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "win_points=100\nmvp_bonus=50\nmultiplier=1.5\nscore = (win_points + mvp_bonus) * multiplier\nprint(score)", expectedOutput: "225.0" }
            ],
            successMessage: "Perfectly executed mathematical precedence."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "Comparison Operators",
      time: "20 Mins",
      exercises: "4 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Asking Questions",
          content: "Math operators give us numbers back. **Comparison operators** ask a question and give us a Boolean back: `True` or `False`."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Judge",
          content: "Think of a comparison operator as a judge. It looks at the left side, looks at the right side, evaluates the claim, and issues a verdict: True or False."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The Comparison Symbols",
          content: "* `==` Equal to (notice it's double equals!)\n* `!=` Not equal to\n* `>` Greater than\n* `<` Less than\n* `>=` Greater than or equal to\n* `<=` Less than or equal to\n\n```python\nprint(10 > 5)  # True\nprint(5 == 5)  # True\nprint(3 != 3)  # False\n```"
        },
        {
          id: "mistake",
          type: "concept",
          heading: "The Biggest Beginner Mistake",
          content: "A single `=` ASSIGNS a value (putting a label on a box). A double `==` COMPARES values (asking the judge). Do not mix them up! This is one of the most common causes of bugs in programming."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Testing the Truth",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Verdict",
            prompt: "What will these two prints output?",
            initialCode: "lives = 0\nprint(lives == 0)\nprint(lives > 0)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Correct! `lives == 0` is True, `lives > 0` is False."
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "The Assignment vs Comparison Bug",
            prompt: "We want to check if the password is 'secret'. Run this code and look at the error.",
            initialCode: "password = \"secret\"\nprint(password = \"secret\")",
            buttonText: "Run Broken Code",
            hints: [
              "TypeError: 'password' is an invalid keyword argument for print().",
              "You used a single `=` inside the print. You are trying to assign, not compare.",
              "Change it to a double `==`."
            ],
            expectedError: "TypeError",
            solutionCode: "password = \"secret\"\nprint(password == \"secret\")",
            nextStepMessage: "You fixed it. `==` asks a question. `=` gives a command."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Eligibility Check",
            prompt: "Create a variable `age` and set it to 16. Create a variable `can_drive` that holds the result of checking if `age` is greater than or equal to 16. Print `can_drive`.",
            initialCode: "",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "age = 16\ncan_drive = age >= 16\nprint(can_drive)", expectedOutput: "True" }
            ],
            successMessage: "Excellent. You are evaluating logical state."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Logical AND & OR",
      time: "20 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Combining Questions",
          content: "Often, a single True/False question isn't enough. We need to check multiple things at once. We do this using `and` and `or`."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "AND vs OR",
          content: "**AND (`and`)**: The strict bouncer. *Both* conditions must be True for the whole statement to be True. If even one is False, it's all False.\n\n**OR (`or`)**: The relaxed bouncer. *Only one* condition needs to be True. If either is True, it's all True."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Logic Syntax",
          content: "```python\nhas_ticket = True\nis_vip = False\n\n# Both must be true\nprint(has_ticket and is_vip) # False\n\n# Only one needs to be true\nprint(has_ticket or is_vip) # True\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Complex Checks",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict AND",
            prompt: "What will this output?",
            initialCode: "age = 25\nhas_id = True\nprint(age >= 18 and has_id)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "True! Both age was >= 18 AND they had an ID."
          },
          {
            id: "step-2-experiment",
            type: "experiment",
            title: "Failing the AND check",
            prompt: "Change `has_id` to `False` and run the code again.",
            initialCode: "age = 25\nhas_id = True\nprint(age >= 18 and has_id)",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Now it's False, because `and` is strict. If just one part fails, the whole thing fails."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Discount Check",
            prompt: "Print whether a customer gets a discount. They get a discount if `is_student` is True OR if their `loyalty_points` are greater than 100.",
            initialCode: "is_student = False\nloyalty_points = 150\n\n# print the logical check",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "is_student = False\nloyalty_points = 150\nprint(is_student or loyalty_points > 100)", expectedOutput: "True" }
            ],
            successMessage: "Perfect use of the `or` operator."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "Logical NOT",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Flipper",
          content: "The `not` operator is the simplest logical operator. It just flips the boolean value. If it was True, it becomes False. If it was False, it becomes True."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Use NOT?",
          content: "Sometimes it is more readable to check if something is *not* the case. For example, checking if a game is *not* over, or if an input is *not* valid."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\nis_game_over = False\n\nprint(not is_game_over) # True\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Flipping State",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Flip",
            prompt: "What will this output?",
            initialCode: "is_raining = True\nprint(not is_raining)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "False! It just inverted the True."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Wait for it...",
            prompt: "Create a variable `is_loading` and set it to False. Create a variable `ready_to_play` that is the `not` of `is_loading`. Print `ready_to_play`.",
            initialCode: "",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "is_loading = False\nready_to_play = not is_loading\nprint(ready_to_play)", expectedOutput: "True" }
            ],
            successMessage: "Nice. You'll use this pattern a lot in game loops."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "Combining Comparisons",
      time: "25 Mins",
      exercises: "4 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Chaining Logic",
          content: "You can combine math, comparisons, and logic into single powerful expressions. Python evaluates math first, then comparisons, then logic (`and`, `or`, `not`)."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Python's Special Trick",
          content: "In most languages, to check if a number is between 1 and 10, you have to write: `num >= 1 and num <= 10`.\n\nPython allows you to chain them elegantly, just like in math:\n```python\nnum = 5\nprint(1 <= num <= 10) # True\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Complex Combinations",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Chain",
            prompt: "Will this evaluate to True or False?",
            initialCode: "health = 80\nprint(0 < health < 100)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "True! 80 is strictly between 0 and 100."
          },
          {
            id: "step-2-experiment",
            type: "experiment",
            title: "Breaking the Chain",
            prompt: "Change `health` to `100` and run the code. Notice it becomes False because it is strictly `< 100`, not `<= 100`.",
            initialCode: "health = 100\nprint(0 < health < 100)",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Edge cases matter. 100 is not strictly less than 100."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Valid Temperature",
            prompt: "Print True if `temp` is between 0 and 100 (inclusive on both ends).",
            initialCode: "temp = 100\n\n# Print the check using chained comparison",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "temp = 100\nprint(0 <= temp <= 100)", expectedOutput: "True" }
            ],
            successMessage: "Great! Chained comparisons make Python code very readable."
          }
        ]
      }
    },
    {
      id: "lesson-07",
      title: "Expressions Evaluation",
      time: "20 Mins",
      exercises: "3 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "What is an Expression?",
          content: "An **Expression** is any piece of code that reduces down to a single value. \n\n`5 + 5` is an expression. It evaluates to `10`.\n`age > 18` is an expression. It evaluates to `True`.\n`\"Hello\"` is an expression. It evaluates to `\"Hello\"`."
        },
        {
          id: "why",
          type: "concept",
          heading: "The Golden Rule of Expressions",
          content: "**Anywhere Python expects a value, you can put an expression.**\n\nInstead of assigning it first:\n```python\nresult = 5 + 5\nprint(result)\n```\nYou can just write it inline:\n```python\nprint(5 + 5)\n```\nBecause `print()` expects a value, and `5 + 5` evaluates to a value."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Reducing Code",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Inline Evaluation",
            prompt: "Run this code. Python evaluates the mathematical expression inside the print statement before actually printing.",
            initialCode: "print((100 - 20) / 2)",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "Python simplified the expression to 40.0 before giving it to print()."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Direct Logic",
            prompt: "Instead of creating a variable, write the logical expression `score >= 50` directly inside the `print()` function.",
            initialCode: "score = 45\n\n# Print the expression directly here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "score = 45\nprint(score >= 50)", expectedOutput: "False" }
            ],
            successMessage: "Perfect. This saves time and lines of code."
          }
        ]
      }
    },
    {
      id: "lesson-08",
      title: "Stage Milestone: Math & Logic",
      time: "30 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Validator",
          content: "You will build the logic for a form validator. We won't use `if` statements yet (that's Stage 03). We will just use boolean logic to determine if the form is valid."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "You have three variables: `password_length`, `has_special_char`, and `age`.\n\nA user registration is VALID if:\n1. The `password_length` is at least 8.\n2. AND `has_special_char` is True.\n3. AND their `age` is exactly 18 or older.\n\nCalculate the final boolean and print it."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Challenge",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Validator",
            prompt: "Write the logic using `and`, `>=`, etc. Store the result in a variable named `is_valid` and print it.",
            initialCode: "password_length = 9\nhas_special_char = True\nage = 12\n\n# Calculate is_valid and print it",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "password_length = 9\nhas_special_char = True\nage = 12\nis_valid = password_length >= 8 and has_special_char and age >= 18\nprint(is_valid)", expectedOutput: "False" },
              { code: "password_length = 10\nhas_special_char = True\nage = 20\nis_valid = password_length >= 8 and has_special_char and age >= 18\nprint(is_valid)", expectedOutput: "True" },
              { code: "password_length = 7\nhas_special_char = True\nage = 20\nis_valid = password_length >= 8 and has_special_char and age >= 18\nprint(is_valid)", expectedOutput: "False" },
              { code: "password_length = 10\nhas_special_char = False\nage = 20\nis_valid = password_length >= 8 and has_special_char and age >= 18\nprint(is_valid)", expectedOutput: "False" }
            ],
            successMessage: "Congratulations! You have completed Stage 02 and mastered Python Logic and Expressions."
          }
        ]
      }
    }
  ]
};
