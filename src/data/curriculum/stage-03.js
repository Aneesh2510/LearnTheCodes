export const stage03 = {
  id: "stage-03",
  number: "03",
  title: "Decision Making",
  subtitle: "Control Flow",
  description: "Learn how to make programs evaluate conditions and choose what to do.",
  estimatedTime: "2 Hours",
  lessonsCount: 8,
  difficulty: "Beginner",
  status: "completed",
  prerequisites: ["stage-02"],
  lessons: [
    {
      id: "lesson-01",
      title: "Why Programs Need Decisions",
      time: "15 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Power of Choice",
          content: "So far, every program you've written has been a straight line. The computer starts at the top, executes each instruction one by one, and finishes at the bottom.\n\nBut real life isn't a straight line. We make decisions based on **conditions**."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Does It Exist?",
          content: "If programs couldn't make decisions, a video game character would walk off a cliff even if there wasn't a bridge, and a website would log you in even if you provided the wrong password. We need software to behave differently depending on the information it receives."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Crossroads",
          content: "Imagine your code walking down a path. It reaches a crossroads with a signpost. \n\n1.  **QUESTION:** It reads the sign (e.g., 'Is age >= 18?').\n2.  **TRUE/FALSE:** It determines the answer.\n3.  **PATH:** If True, it takes the left path. If False, it takes the right path.\n\nOnly one path is taken. The other is completely ignored."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Decision Logic Check",
        prompt: "Let's practice identifying the core parts of a decision. Imagine a simple program for a rollercoaster: 'You must be at least 150cm tall to ride.' Match the concepts to their role in the decision model.",
        questions: [
          {
            question: "The user's height (e.g., 145cm)",
            options: ["Input", "Condition", "Outcome"],
            correctAnswer: "Input"
          },
          {
            question: "Is the user's height >= 150cm?",
            options: ["Input", "Condition", "Outcome"],
            correctAnswer: "Condition"
          },
          {
            question: "The user is allowed on the ride",
            options: ["Input", "Condition", "Outcome"],
            correctAnswer: "Outcome"
          }
        ],
        successMessage: "Excellent! You can correctly identify the pieces of decision-making logic."
      }
    },
    {
      id: "lesson-02",
      title: "The IF Statement",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The IF Statement",
          content: "In Python, the `if` statement is the most basic way to make a decision.\n\nIt tells Python: **\"IF this condition is true, execute the code underneath. Otherwise, skip it entirely.\"**"
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Structure of an IF Statement",
          content: "```python\nage = 20\n\nif age >= 18:\n    print(\"Adult\")\n```\n\nThere are three critical pieces here:\n1.  **The Condition:** `age >= 18`. This evaluates to True or False.\n2.  **The Colon:** `:`. This tells Python that the decision block is starting.\n3.  **The Indentation:** The spaces before `print`. This tells Python *which* actions belong to the `if` statement. We call this an **indented code block**."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Exploring IF",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Flow",
            prompt: "Look at the code below. Is `age >= 18` True or False? What do you think Python will print?",
            initialCode: "age = 20\n\nif age >= 18:\n    print(\"Adult\")\n\nprint(\"Program Finished\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Exactly! The condition was True, so the indented code executed."
          },
          {
            id: "step-2-experiment",
            type: "experiment",
            title: "Change the Condition",
            prompt: "Now change the `age` variable to `15` and run the code again. Notice how 'Adult' is skipped, but 'Program Finished' still prints because it's not indented!",
            initialCode: "age = 15\n\nif age >= 18:\n    print(\"Adult\")\n\nprint(\"Program Finished\")",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Great job! You just changed the flow of the program by changing the state."
          },
          {
            id: "step-3-mistake",
            type: "debug",
            title: "Intentional Mistake: The Colon",
            prompt: "A very common mistake is forgetting the colon (`:`). Run this broken code and see the error Python gives you.",
            initialCode: "score = 100\n\nif score == 100\n    print(\"Perfect Score!\")",
            buttonText: "Run Broken Code",
            hints: [
              "Look at the end of the `if` line.",
              "Python expects a specific punctuation mark to start the block."
            ],
            expectedError: "SyntaxError",
            solutionCode: "score = 100\n\nif score == 100:\n    print(\"Perfect Score!\")",
            nextStepMessage: "You fixed it! Always remember the colon."
          },
          {
            id: "step-4-exercise",
            type: "exercise",
            title: "Write an IF Statement",
            prompt: "Write a program that checks if a variable `temperature` is greater than `30`. If it is, print `\"It's hot!\"`.",
            initialCode: "temperature = 35\n\n# Write your if statement here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "temperature = 35\nif temperature > 30:\n    print(\"It's hot!\")", expectedOutput: "It's hot!" }
            ],
            successMessage: "Perfect! You've written your first functional decision logic."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "The ELSE Statement",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Alternative",
          content: "What if the condition in our `if` statement is False? We often want the program to do something else instead of just doing nothing.\n\nThis is where `else` comes in. It provides a guaranteed alternative path."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Fork in the Road",
          content: "An `if/else` block is a fork in the road where you *must* choose exactly one path.\n**IF condition is true → do A. OTHERWISE → do B.**\nIt is impossible for both A and B to run. It is impossible for neither to run."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Using ELSE",
          content: "```python\nage = 16\n\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")\n```\n\nNotice:\n1.  `else` does not have a condition next to it. It catches *everything* that wasn't caught by the `if`.\n2.  `else` must also end with a colon `:` and have its own indented block."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Branching Paths",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Branch",
            prompt: "Look at the code below. Will it print 'Pass' or 'Fail'?",
            initialCode: "score = 45\n\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Correct! Because 45 is not >= 50, it fell back to the `else` block."
          },
          {
            id: "step-2-experiment",
            type: "experiment",
            title: "Change the Value",
            prompt: "Change `score` to 75. Run the code. Notice how it now takes the `if` branch.",
            initialCode: "score = 75\n\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Awesome. You've seen both branches in action."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Positive or Negative",
            prompt: "Write an if/else block that checks if `balance` is greater than or equal to `0`. If it is, print `\"Positive\"`. Otherwise, print `\"Negative\"`.",
            initialCode: "balance = -15\n\n# Add if/else here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "balance = -15\nif balance >= 0:\n    print(\"Positive\")\nelse:\n    print(\"Negative\")", expectedOutput: "Negative" },
              { code: "balance = 0\nif balance >= 0:\n    print(\"Positive\")\nelse:\n    print(\"Negative\")", expectedOutput: "Positive" }
            ],
            successMessage: "Great work writing an alternative branch! You also handled the zero edge-case."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "The ELIF Statement",
      time: "20 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Multiple Possibilities",
          content: "What if there are more than just two possible outcomes? For example, grading a test isn't just Pass or Fail. It could be A, B, C, or F.\n\nPython provides `elif` (short for 'else if') to handle multiple conditions."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Chain of Checks",
          content: "The mental model for `elif` is a chain of checks:\n1.  **IF** condition 1 is true → do A, skip the rest.\n2.  **ELIF** condition 2 is true → do B, skip the rest.\n3.  **ELSE** → if nothing above was true, do C.\n\n```python\nscore = 75\nif score >= 90:\n    print(\"A\")\nelif score >= 75:\n    print(\"B\")\nelse:\n    print(\"C\")\n```"
        },
        {
          id: "mistake",
          type: "concept",
          heading: "Evaluation Order Matters",
          content: "**Crucial Concept:** Python evaluates conditions from top to bottom. As soon as it finds the *first* condition that is True, it executes that block and **skips the rest of the entire chain**."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Handling Multiple Cases",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Grade",
            prompt: "Look at the code below. The score is 85. What will Python print?",
            initialCode: "score = 85\n\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Exactly. It checked >= 90 (False), then >= 80 (True), printed 'B', and skipped the rest."
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "The Unreachable Branch",
            prompt: "Here is a broken grading program. The student scored 95, but they are getting a 'C'! Why? Because Python found `score >= 70` to be True first. Fix the order of the conditions so a 95 gets an 'A'.",
            initialCode: "score = 95\n\n# WARNING: Logical Bug here. Python won't throw an error, it just gives the wrong answer!\nif score >= 70:\n    print(\"C\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 90:\n    print(\"A\")\nelse:\n    print(\"F\")",
            buttonText: "Run Fixed Code",
            hints: [
              "Remember, Python evaluates top-to-bottom and stops at the first True condition.",
              "You should check the hardest/highest condition first."
            ],
            expectedOutputRequired: true,
            solutionCode: "score = 95\n\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")",
            nextStepMessage: "Perfect! You fixed a silent logic bug. Always order your `elif` chains logically."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Movie Tickets",
            prompt: "Determine movie ticket pricing based on `age`. If age < 12, print `\"Child\"`. If age >= 65, print `\"Senior\"`. Otherwise, print `\"Adult\"`.",
            initialCode: "age = 65\n\n# Add if/elif/else here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "age = 65\nif age < 12:\n    print(\"Child\")\nelif age >= 65:\n    print(\"Senior\")\nelse:\n    print(\"Adult\")", expectedOutput: "Senior" },
              { code: "age = 11\nif age < 12:\n    print(\"Child\")\nelif age >= 65:\n    print(\"Senior\")\nelse:\n    print(\"Adult\")", expectedOutput: "Child" },
              { code: "age = 30\nif age < 12:\n    print(\"Child\")\nelif age >= 65:\n    print(\"Senior\")\nelse:\n    print(\"Adult\")", expectedOutput: "Adult" }
            ],
            successMessage: "Fantastic! You are mastering complex decision flow."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "Nested Conditions",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Conditions Inside Conditions",
          content: "Sometimes you only want to ask a question if the answer to a previous question was Yes.\n\nYou can put an `if` statement *inside* another `if` statement. This is called **nesting**."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Nested Syntax",
          content: "```python\nlogged_in = True\nis_admin = True\n\nif logged_in:\n    print(\"Welcome back.\")\n    if is_admin:\n        print(\"Admin Panel Access Granted.\")\n```\n\nNotice the indentation! The second `if` is indented, and its `print` statement is indented *twice*."
        },
        {
          id: "why-not",
          type: "concept",
          heading: "When NOT to Use It",
          content: "While nesting is powerful, **too much nesting makes code hard to read**.\n\nOften, a nested `if` can be rewritten using `and` (from Stage 2).\n\nInstead of:\n```python\nif age > 18:\n    if has_id:\n        print(\"Enter\")\n```\nUse:\n```python\nif age > 18 and has_id:\n    print(\"Enter\")\n```\nUse nesting when you actually need to do different things at different levels."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Exploring Nesting",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "See it in Action",
            prompt: "Run the code. Then change `is_admin` to False. Then change `logged_in` to False. Watch how the flow changes at each level.",
            initialCode: "logged_in = True\nis_admin = True\n\nif logged_in:\n    print(\"Loading Dashboard...\")\n    if is_admin:\n        print(\"Showing Secret Settings...\")\nelse:\n    print(\"Please log in.\")",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "You can see how the inner block is protected by the outer block."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "Conditional Expressions (Ternary)",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "One-Line Decisions",
          content: "Sometimes an `if/else` block feels too long for a very simple assignment. Python has a shortcut called a **conditional expression** (often called a ternary operator in other languages)."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The Syntax",
          content: "The structure is:\n`value_if_true if condition else value_if_false`\n\n```python\nage = 20\n# The long way\nif age >= 18:\n    status = \"Adult\"\nelse:\n    status = \"Minor\"\n\n# The short way\nstatus = \"Adult\" if age >= 18 else \"Minor\"\n```"
        },
        {
          id: "warning",
          type: "concept",
          heading: "Use With Caution",
          content: "While this is a neat trick to save space, **do not overuse it**. If your condition is complicated, or if you need to run multiple lines of code, stick to the standard `if/else` block for better readability."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Writing Expressions",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Value",
            prompt: "What will the value of `result` be?",
            initialCode: "score = 50\nresult = \"Pass\" if score >= 60 else \"Fail\"\nprint(result)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Exactly. It evaluated the condition, found it False, and assigned 'Fail'."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Refactoring to One Line",
            prompt: "Rewrite the following code to use a single conditional expression on line 4. Assign the result to `message`. Print `\"Even\"` if `number % 2 == 0`, else `\"Odd\"`.",
            initialCode: "number = 7\n\n# Rewrite this using a conditional expression:\nmessage = \"\" # Your code here\nprint(message)",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "number = 7\nmessage = \"Even\" if number % 2 == 0 else \"Odd\"\nprint(message)", expectedOutput: "Odd" },
              { code: "number = 42\nmessage = \"Even\" if number % 2 == 0 else \"Odd\"\nprint(message)", expectedOutput: "Even" }
            ],
            successMessage: "Great job! You made the code more concise."
          }
        ]
      }
    },
    {
      id: "lesson-07",
      title: "Combining Knowledge",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Real World Systems",
          content: "In the real world, systems combine logical operators (`and`, `or`), multiple branches (`elif`), and nesting to model complex business logic."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: Decision Trees",
          content: "Before writing complex if statements, draw a Decision Tree in your mind.\n1. **INFORMATION:** What data do we have?\n2. **QUESTION:** What do we need to ask first? (Usually the most restrictive thing).\n3. **CONDITION:** How do we write that in Python?\n4. **OUTCOME:** What happens based on the answer?"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Building a System",
        steps: [
          {
            id: "step-1-exercise",
            type: "exercise",
            title: "Eligibility Checker",
            prompt: "Write a loan application program. The user needs `income` >= 50000 AND `credit_score` >= 700 to be 'Approved'. If they don't meet BOTH, but `income` >= 30000, they are 'Pending'. Otherwise, they are 'Rejected'.",
            initialCode: "income = 35000\ncredit_score = 650\n\n# Write your logic here, then print the result",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "income = 35000\ncredit_score = 650\nif income >= 50000 and credit_score >= 700:\n    print(\"Approved\")\nelif income >= 30000:\n    print(\"Pending\")\nelse:\n    print(\"Rejected\")", expectedOutput: "Pending" },
              { code: "income = 60000\ncredit_score = 750\nif income >= 50000 and credit_score >= 700:\n    print(\"Approved\")\nelif income >= 30000:\n    print(\"Pending\")\nelse:\n    print(\"Rejected\")", expectedOutput: "Approved" },
              { code: "income = 20000\ncredit_score = 800\nif income >= 50000 and credit_score >= 700:\n    print(\"Approved\")\nelif income >= 30000:\n    print(\"Pending\")\nelse:\n    print(\"Rejected\")", expectedOutput: "Rejected" }
            ],
            successMessage: "Outstanding! You combined multiple operators and conditions perfectly."
          }
        ]
      }
    },
    {
      id: "lesson-08",
      title: "Stage Milestone: Student Result Analyzer",
      time: "45 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "It's time to prove your mastery of Decision Making. You will build a Student Result Analyzer without step-by-step guidance."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "You are given a variable `score` (0-100).\n\n1.  If the score is invalid (< 0 or > 100), print exactly: `\"Invalid Score\"`\n2.  If the score is 90 to 100, print: `\"Grade A\"`\n3.  If the score is 75 to 89, print: `\"Grade B\"`\n4.  If the score is 50 to 74, print: `\"Grade C\"`\n5.  If the score is below 50, print: `\"Fail\"`\n\nThink carefully about the order of your conditions and edge cases."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Analyzer",
            prompt: "Write the complete logic for the Student Result Analyzer. Pay close attention to the exact expected output strings. *Hint: Ensure your first check catches invalid numbers.*",
            initialCode: "score = 82\n\n# Implement your analyzer here",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "score = 82\nif score < 0 or score > 100:\n    print(\"Invalid Score\")\nelif score >= 90:\n    print(\"Grade A\")\nelif score >= 75:\n    print(\"Grade B\")\nelif score >= 50:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")", expectedOutput: "Grade B" },
              { code: "score = 105\nif score < 0 or score > 100:\n    print(\"Invalid Score\")\nelif score >= 90:\n    print(\"Grade A\")\nelif score >= 75:\n    print(\"Grade B\")\nelif score >= 50:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")", expectedOutput: "Invalid Score" },
              { code: "score = -5\nif score < 0 or score > 100:\n    print(\"Invalid Score\")\nelif score >= 90:\n    print(\"Grade A\")\nelif score >= 75:\n    print(\"Grade B\")\nelif score >= 50:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")", expectedOutput: "Invalid Score" },
              { code: "score = 100\nif score < 0 or score > 100:\n    print(\"Invalid Score\")\nelif score >= 90:\n    print(\"Grade A\")\nelif score >= 75:\n    print(\"Grade B\")\nelif score >= 50:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")", expectedOutput: "Grade A" },
              { code: "score = 50\nif score < 0 or score > 100:\n    print(\"Invalid Score\")\nelif score >= 90:\n    print(\"Grade A\")\nelif score >= 75:\n    print(\"Grade B\")\nelif score >= 50:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")", expectedOutput: "Grade C" },
              { code: "score = 0\nif score < 0 or score > 100:\n    print(\"Invalid Score\")\nelif score >= 90:\n    print(\"Grade A\")\nelif score >= 75:\n    print(\"Grade B\")\nelif score >= 50:\n    print(\"Grade C\")\nelse:\n    print(\"Fail\")", expectedOutput: "Fail" }
            ],
            successMessage: "Congratulations! You have completed Stage 03 - Decision Making and proven your logic holds up under edge cases!"
          }
        ]
      }
    }
  ]
};
