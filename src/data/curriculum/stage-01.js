export const stage01 = {
  id: "stage-01",
  number: "01",
  title: "Programming & Python Foundations",
  subtitle: "Foundations",
  description: "Take a complete beginner who may know absolutely nothing about programming and teach them enough Python fundamentals to understand and write basic Python programs confidently.",
  estimatedTime: "3 Hours",
  lessonsCount: 12,
  difficulty: "Beginner",
  status: "completed",
  prerequisites: [],
  lessons: [
    {
      id: "lesson-01",
      title: "What is Programming?",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what-is-it",
          type: "concept",
          heading: "What is Programming?",
          content: "Computers are incredibly fast and obedient, but they are completely literal. They have no intuition or common sense. If you tell a computer to 'make a sandwich', it doesn't know what bread is, what a knife is, or what spreading means.\n\n**Programming** is the act of breaking down a large task into tiny, precise instructions that a computer can understand."
        },
        {
          id: "why-it-exists",
          type: "concept",
          heading: "Why Does It Exist?",
          content: "Before programming languages, humans had to physically change switches or plug cables to make computers do math. Programming exists so we can write instructions as text, and have a machine automatically translate those instructions into electrical signals."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: Input → Process → Output",
          content: "Almost every program follows a simple model:\n\n1. **Input:** Information goes in.\n2. **Process:** The computer does something with it.\n3. **Output:** A result comes out.\n\nThink of a toaster. The **Input** is bread. The **Process** is heating. The **Output** is toast. Your code defines the *Process*."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Mission Objective",
        prompt: "Let's test your mental model. Imagine you are programming a basic 'Coffee Machine' program. Match the concepts to the correct part of the Input → Process → Output model.",
        questions: [
          {
            question: "The user pressing the 'Espresso' button",
            options: ["Input", "Process", "Output"],
            correctAnswer: "Input"
          },
          {
            question: "Grinding the beans and boiling the water",
            options: ["Input", "Process", "Output"],
            correctAnswer: "Process"
          },
          {
            question: "The hot cup of coffee",
            options: ["Input", "Process", "Output"],
            correctAnswer: "Output"
          }
        ],
        successMessage: "Perfect! You understand the fundamental logic flow of all software."
      }
    },
    {
      id: "lesson-02",
      title: "What is Python?",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what-is-python",
          type: "concept",
          heading: "What is Python?",
          content: "**Python** is a high-level programming language. It is incredibly practical and widely used for web development, data analysis, artificial intelligence, and everyday scripting."
        },
        {
          id: "why-python",
          type: "concept",
          heading: "Why Do We Use It?",
          content: "People love Python because its syntax (the text you write) is highly readable. It looks almost like plain English compared to older languages. Python code is executed by the **Python Interpreter**—a program that reads your code from top to bottom, translates it, and executes it immediately."
        },
        {
          id: "anatomy",
          type: "concept",
          heading: "Code Anatomy & Execution",
          content: "A Python **program** is just a sequence of instructions. \n\nFor example, the instruction `print(\"Hello, Python!\")` tells Python to display a message to the screen. The computer reads line 1, executes it, then moves to line 2.\n\nAlso, Python is **case-sensitive**. That means `print` and `Print` are considered completely different commands."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Python Interactive Mission",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "First Python Code Preview",
            prompt: "Look at the code below. What do you think this code will output to the screen? Type your prediction below.",
            initialCode: "print(\"Hello, Python!\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Awesome! The interpreter took the text inside the quotes and displayed it as output."
          },
          {
            id: "step-2-experiment",
            type: "experiment",
            title: "Experimentation",
            prompt: "Your prediction was compared to the actual output! Now it's your turn. Modify the message inside the quotes to say your own name, then run the code.",
            initialCode: "print(\"Hello, Python!\")",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Great job running your own customized code!"
          },
          {
            id: "step-3-mistake",
            type: "debug",
            title: "Intentional Mistake (NameError)",
            prompt: "Let's see what happens when we break the rules. Python is case-sensitive. Run the code below and observe the error.",
            initialCode: "Print(\"Hello, Python!\")",
            buttonText: "Run Broken Code",
            hints: [
              "Look carefully at the first letter of the command.",
              "Python commands must use the exact correct casing.",
              "Compare 'Print' with the 'print' you used earlier."
            ],
            expectedError: "NameError",
            solutionCode: "print(\"Hello, Python!\")",
            nextStepMessage: "You fixed it! The interpreter couldn't find a command called 'Print' (capital P). Reading and fixing errors is 50% of programming."
          },
          {
            id: "step-4-exercise",
            type: "exercise",
            title: "Practical Exercise",
            prompt: "Write a brand new Python program that prints a short message (e.g., 'I am ready to code.').",
            initialCode: "",
            buttonText: "Run Program",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            successMessage: "Mission Accomplished! You've written, executed, and debugged your first Python code."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "Execution Flow & Syntax Errors",
      time: "15 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Writing Multiple Instructions",
          content: "A single `print` statement is just one instruction. A true program consists of multiple instructions executed in a specific sequence."
        },
        {
          id: "execution-model",
          type: "concept",
          heading: "Execution Model: Top-to-Bottom",
          content: "The Python interpreter reads your code just like you read a book: from top to bottom, one line at a time. It will not execute line 2 until line 1 is completely finished."
        },
        {
          id: "syntax-errors",
          type: "concept",
          heading: "Syntax vs Runtime Errors",
          content: "If you break a grammar rule (like forgetting a closing quote), it's a **SyntaxError**. Python scans the whole file first; if it finds a SyntaxError, it refuses to run *any* of the code. \n\nIf you make a logical mistake (like calling `Print` instead of `print`), it's a **Runtime Error**. Python will run the code line-by-line until it hits the broken line and crashes."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Execution Flow",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Order",
            prompt: "Look at the code below. In what exact order will the messages appear?",
            initialCode: "print(\"End\")\nprint(\"Start\")\nprint(\"Middle\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Exactly. Even though the text says 'Start', Python executes line 1 first. It doesn't read English, it just blindly follows top-to-bottom sequence."
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "Intentional Mistake: Syntax Errors",
            prompt: "Run the code below. It has a syntax error on line 2 (missing quote). Notice what happens to line 1.",
            initialCode: "print(\"Line 1 works.\")\nprint(\"Line 2 is broken)\nprint(\"Line 3\")",
            buttonText: "Run Broken Code",
            hints: [
              "Notice how NOTHING printed? Not even line 1!",
              "When Python detects a syntax error before running, it aborts immediately.",
              "Look at the quotes on line 2. Close them to fix the code."
            ],
            expectedError: "SyntaxError",
            solutionCode: "print(\"Line 1 works.\")\nprint(\"Line 2 is broken\")\nprint(\"Line 3\")",
            nextStepMessage: "Fixed! You learned that Syntax Errors prevent the entire program from starting."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Reorder the Steps",
            prompt: "Rearrange the code below so it prints the recipe in the correct logical order: 1. Get bread, 2. Add peanut butter, 3. Eat sandwich.",
            initialCode: "print(\"3. Eat sandwich.\")\nprint(\"1. Get bread.\")\nprint(\"2. Add peanut butter.\")",
            buttonText: "Run Ordered Code",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "print(\"1. Get bread.\")\nprint(\"2. Add peanut butter.\")\nprint(\"3. Eat sandwich.\")", expectedOutput: "1. Get bread.\n2. Add peanut butter.\n3. Eat sandwich." }
            ],
            successMessage: "Great job! You controlled the execution flow."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Python Syntax & Comments",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what-is-syntax",
          type: "concept",
          heading: "What is Syntax?",
          content: "Syntax is the strict set of grammar rules for a programming language. Just like English requires periods at the end of sentences, Python requires parentheses `()` and quotes `\"\"` for `print` statements."
        },
        {
          id: "what-are-comments",
          type: "concept",
          heading: "What are Comments?",
          content: "Sometimes you want to leave a note for yourself or other humans reading the code. A **comment** is text that the Python interpreter completely ignores."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Comment Syntax",
          content: "In Python, any line that starts with a hash symbol `#` is a comment.\n\n```python\n# This is a comment. Python ignores this.\nprint(\"This will run.\")\n```\n\nUse comments to explain *why* the code is doing something, not *what* it is doing (the code itself shows what)."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Notes for Humans",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Ignored Code",
            prompt: "Run this code. Notice that the comment doesn't print. Then, try adding a `#` at the very beginning of line 2 and run it again.",
            initialCode: "# The next line prints a greeting\nprint(\"Hello there!\")",
            buttonText: "Run Modified Code",
            expectedOutputRequired: false,
            nextStepMessage: "When you put a `#` in front of code, it's called 'commenting out'. It temporarily disables that code—very useful for debugging!"
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Leave a Note",
            prompt: "Write a program that prints your favorite movie, but add a comment on the line above it explaining *why* it's your favorite.",
            initialCode: "",
            buttonText: "Run Code",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            successMessage: "Nice! Comments are essential for working with other programmers."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "Indentation & Code Blocks",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what-is-indentation",
          type: "concept",
          heading: "Whitespace Matters",
          content: "In many languages, spaces at the beginning of a line don't matter. **In Python, they are strictly enforced.**\n\nIndentation (spaces at the start of a line) tells Python how code is grouped together into 'blocks'."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Does It Exist?",
          content: "Python forces you to use indentation so that your code is visually structured and easy to read. You can't write messy, unaligned code in Python—it simply won't run."
        },
        {
          id: "rule",
          type: "concept",
          heading: "The Golden Rule of Indentation",
          content: "**Do not add spaces to the beginning of a line unless Python expects a new block.**\n\nRight now, every line you write must be aligned tightly to the left margin."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "The Strict Margin",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "Intentional Mistake: IndentationError",
            prompt: "Run the code below. It has spaces before the second print statement where it shouldn't.",
            initialCode: "print(\"Line 1\")\n  print(\"Line 2\")\nprint(\"Line 3\")",
            buttonText: "Run Broken Code",
            hints: [
              "Look at the error: IndentationError: unexpected indent.",
              "Python doesn't know why line 2 is pushed inwards.",
              "Remove the spaces before line 2."
            ],
            expectedError: "IndentationError",
            solutionCode: "print(\"Line 1\")\nprint(\"Line 2\")\nprint(\"Line 3\")",
            nextStepMessage: "You fixed an IndentationError! Keep everything aligned to the left."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "Variables & Values",
      time: "20 Mins",
      exercises: "4 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what-is-variable",
          type: "concept",
          heading: "What is a Variable?",
          content: "Programs need to remember data (like a user's name, a score, or a price). A **variable** is a way to store data in the computer's memory so we can use it later."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: Labels on Boxes",
          content: "Think of a variable as a sticky note label you slap onto a value.\n\n`LABEL = VALUE`\n\nWhen the computer sees the label later, it swaps in the value it represents."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax: Assignment",
          content: "We use the equals sign `=` to assign a value to a variable.\n\n```python\nscore = 100\nprint(score)\n```\n\n*Important:* The `=` sign does not mean \"equals\" in math. It means **\"assign the value on the right to the label on the left.\"**"
        },
        {
          id: "state-change",
          type: "concept",
          heading: "State Change: Variables Vary",
          content: "Variables are called 'variables' because their values can vary (change) over time. If you re-assign a new value to an existing variable, the old value is overwritten."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Memory & State",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "What will this code print?",
            initialCode: "lives = 3\nprint(lives)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Correct! Python looked up the label 'lives' and found the value 3."
          },
          {
            id: "step-2-experiment",
            type: "experiment",
            title: "Changing State",
            prompt: "Run the code below to see the state change. Then, add a line at the bottom to change the `status` to \"Offline\" and print it again.",
            initialCode: "status = \"Online\"\nprint(status)\n\nstatus = \"Away\"\nprint(status)",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Awesome. The sticky note 'status' was moved to a new value each time."
          },
          {
            id: "step-3-mistake",
            type: "debug",
            title: "Intentional Mistake: Variable vs Text",
            prompt: "Run this broken code. We want to store the text 'Alice' in the variable name, but Python is confused.",
            initialCode: "name = Alice\nprint(name)",
            buttonText: "Run Broken Code",
            hints: [
              "Python thinks Alice is another variable label, not text, because it has no quotes.",
              "If you want to store literal text, you must use quotes.",
              "Change it to \"Alice\""
            ],
            expectedError: "NameError",
            solutionCode: "name = \"Alice\"\nprint(name)",
            nextStepMessage: "Fixed! Text needs quotes. Variables do not."
          },
          {
            id: "step-4-exercise",
            type: "exercise",
            title: "Variable Swap Challenge",
            prompt: "Create a variable named `player`, assign it the value `\"Mario\"`, and print it. Then, re-assign `player` to `\"Luigi\"` and print it again.",
            initialCode: "",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "player = \"Mario\"\nprint(player)\nplayer = \"Luigi\"\nprint(player)", expectedOutput: "Mario\nLuigi" }
            ],
            successMessage: "Perfect variable assignment and mutation!"
          }
        ]
      }
    },
    {
      id: "lesson-07",
      title: "Naming & Conventions",
      time: "15 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Choosing Good Names",
          content: "You can name a variable almost anything, but there are strict rules and best practices. Code is read by humans much more often than it is written. Good names make code understandable."
        },
        {
          id: "rules",
          type: "concept",
          heading: "The Strict Rules",
          content: "Python enforces these syntax rules:\n1. Must start with a letter or an underscore `_`.\n2. Cannot start with a number.\n3. Can only contain alphanumeric characters and underscores (A-Z, 0-9, and _).\n4. Cannot be a reserved keyword (like `print`, `if`, `def`)."
        },
        {
          id: "conventions",
          type: "concept",
          heading: "The Snake Case Convention",
          content: "In Python, the community agreed-upon convention for naming variables is **snake_case**. All lowercase letters, with words separated by underscores.\n\nGood: `player_score`, `first_name`\nBad (but works): `PlayerScore`, `firstname`\nIllegal: `player score`, `1st_name`"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Valid vs Invalid",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "Find the Illegal Variable",
            prompt: "This code has an illegal variable name that breaks Python's syntax rules. Run it to see the error, then fix it.",
            initialCode: "1st_place = \"Sarah\"\nprint(1st_place)",
            buttonText: "Run Broken Code",
            hints: [
              "Look at how the variable name starts.",
              "Variable names cannot start with a number.",
              "Try changing it to `first_place`."
            ],
            expectedError: "SyntaxError",
            solutionCode: "first_place = \"Sarah\"\nprint(first_place)",
            nextStepMessage: "Fixed! You can put numbers in variables (like `player_1`), just not at the start."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Apply Snake Case",
            prompt: "Create a variable to store a high score of 999. Name the variable using proper snake_case (e.g. representing 'high score'). Print the variable.",
            initialCode: "# Write your variable and print statement here",
            buttonText: "Run Code",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            successMessage: "Great job following Python community conventions."
          }
        ]
      }
    },
    {
      id: "lesson-08",
      title: "Python Data Types",
      time: "20 Mins",
      exercises: "4 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Different Kinds of Data",
          content: "A computer needs to know what kind of data it's holding. Is it text? A math number? A yes/no answer? Python categorizes values into **Data Types**."
        },
        {
          id: "types",
          type: "concept",
          heading: "The Core Four",
          content: "Here are the four most important types for beginners:\n\n1. **Integer (`int`)**: Whole numbers (e.g., `5`, `-20`, `1000`).\n2. **Float (`float`)**: Decimal numbers (e.g., `3.14`, `-0.5`).\n3. **String (`str`)**: Text data wrapped in quotes (e.g., `\"Hello\"`, `'42'`).\n4. **Boolean (`bool`)**: True or False (must be capitalized `True`, `False`)."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Do Types Matter?",
          content: "Because operations act differently depending on the type. \n\nAdding two integers `5 + 5` gives you `10`. \nAdding two strings `\"5\" + \"5\"` glues the text together, giving you `\"55\"`."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Types in Action",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Behavior",
            prompt: "Look at the code below. We are 'adding' two strings. What will the output be?",
            initialCode: "word1 = \"fire\"\nword2 = \"truck\"\nprint(word1 + word2)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Correct! When you 'add' strings, Python concatenates (glues) them together."
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "Intentional Mistake: Type Mismatch",
            prompt: "What happens if we try to add a string and an integer? Run the code and see the error.",
            initialCode: "age = 25\nprint(\"I am \" + age)",
            buttonText: "Run Broken Code",
            hints: [
              "TypeError: can only concatenate str (not \"int\") to str.",
              "Python doesn't know if you want to do math or glue text.",
              "For now, we can't do this directly. We will learn how to fix this in the Type Conversion lesson. Just comment out the print line to clear the error."
            ],
            expectedError: "TypeError",
            solutionCode: "age = 25\n# print(\"I am \" + age)",
            nextStepMessage: "This is a TypeError. You cannot mix incompatible types in certain operations."
          }
        ]
      }
    },
    {
      id: "lesson-09",
      title: "Type Checking",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The type() Function",
          content: "Sometimes you need to ask Python what type of data a variable is holding. You can do this using the `type()` command."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "How it works",
          content: "```python\nscore = 10\nprint(type(score))\n```\nThis will output `<class 'int'>`, confirming it is an Integer."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Investigating Types",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Inspect the Data",
            prompt: "Run the code below to see the type of `mystery_var`. Then, change `mystery_var` to `3.14` and run it again to see the type change.",
            initialCode: "mystery_var = \"100\"\nprint(type(mystery_var))",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Notice that '100' with quotes is a string (str), but without quotes it's an int. With decimals, it's a float!"
          }
        ]
      }
    },
    {
      id: "lesson-10",
      title: "Type Conversion (Casting)",
      time: "15 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Changing Forms",
          content: "Remember the TypeError when we tried to add `\"I am \" + 25`? To fix it, we need to convert the integer `25` into a string `\"25\"`.\n\nThis is called **Type Conversion** or **Casting**."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Conversion Functions",
          content: "Python provides built-in functions to convert data:\n* `str(value)`: Converts to a string.\n* `int(value)`: Converts to an integer.\n* `float(value)`: Converts to a float.\n\n```python\nage = 25\nage_string = str(age)\nprint(\"I am \" + age_string)\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Fixing Type Errors",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Conversion",
            prompt: "What happens when we convert the string '50' to an integer and add 10?",
            initialCode: "text_number = \"50\"\nreal_number = int(text_number)\nprint(real_number + 10)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Correct! We turned the text into math data, so the addition worked."
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "Invalid Conversion",
            prompt: "Run this code. We are trying to convert the word 'apple' into an integer.",
            initialCode: "word = \"apple\"\nnumber = int(word)\nprint(number)",
            buttonText: "Run Broken Code",
            hints: [
              "ValueError: invalid literal for int().",
              "You can only convert strings to integers if they actually contain numbers.",
              "Change 'apple' to '42' to fix the error."
            ],
            expectedError: "ValueError",
            solutionCode: "word = \"42\"\nnumber = int(word)\nprint(number)",
            nextStepMessage: "Fixed! You cannot convert alphabetic words into math numbers. This is a common bug when getting input from users."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Fix the Greeting",
            prompt: "Fix the broken code below by converting `level` to a string inside the print statement so it concatenates properly.",
            initialCode: "level = 5\n\n# Fix this line using str()\nprint(\"Welcome to level \" + level)",
            buttonText: "Run Code",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "level = 5\nprint(\"Welcome to level \" + str(level))", expectedOutput: "Welcome to level 5" }
            ],
            successMessage: "Great job! You used type conversion to fix a TypeError."
          }
        ]
      }
    },
    {
      id: "lesson-11",
      title: "Input (Talking to the Program)",
      time: "15 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Getting Data from Users",
          content: "So far, our variables have been hard-coded into the script. Real programs ask the user for information.\n\nWe use the `input()` function to pause the program and wait for the user to type something."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Using Input",
          content: "```python\nname = input(\"What is your name? \")\nprint(\"Hello, \" + name)\n```\n\n**Crucial rule:** The `input()` function ALWAYS returns a String (`str`). Even if the user types '99', Python reads it as the text `\"99\"`."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "User Interaction",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Interactive Prompt",
            prompt: "Run the code below. (Note: in this learning environment, we simulate input for safety, but imagine the user typing 'Alex').",
            initialCode: "# Simulated input environment\nuser_response = \"Alex\" # imagine this came from input()\nprint(\"Hello, \" + user_response)",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "The program dynamically responds to user data!"
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "The Input Math Bug",
            prompt: "This program asks for an age and tries to add 1 to it. Run it and see why it crashes.",
            initialCode: "age_input = \"20\" # Simulated input\nnext_year = age_input + 1\nprint(\"Next year you will be \" + str(next_year))",
            buttonText: "Run Broken Code",
            hints: [
              "Remember, input() ALWAYS returns a string. So `age_input` is \"20\".",
              "You cannot do math with a string.",
              "You must convert `age_input` to an `int` before adding 1."
            ],
            expectedError: "TypeError",
            solutionCode: "age_input = \"20\" # Simulated input\nnext_year = int(age_input) + 1\nprint(\"Next year you will be \" + str(next_year))",
            nextStepMessage: "Perfect! You must always cast `input()` results if you want to do math. This is a very common interview question concept!"
          }
        ]
      }
    },
    {
      id: "lesson-12",
      title: "Output & Formatting",
      time: "20 Mins",
      exercises: "4 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Clean Strings (f-strings)",
          content: "Using `str()` and `+` to glue strings together is messy and error-prone. \n\nModern Python provides **f-strings** (formatted string literals). They allow you to inject variables directly into a string."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "f-string syntax",
          content: "Put an `f` right before the first quote, and use curly braces `{}` around your variables.\n\n```python\nage = 25\nname = \"Alice\"\n\n# The clean way\nprint(f\"My name is {name} and I am {age} years old.\")\n```\nf-strings automatically handle the type conversion for you! No need for `str()`."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "String Injection",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "Look at the f-string below. What will it print?",
            initialCode: "item = \"coffee\"\nprice = 4\nprint(f\"One {item} costs {price} dollars.\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Exactly. The variables were injected directly into the sentence, and the integer `price` was converted to text automatically."
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "Missing the 'f'",
            prompt: "A very common mistake. Run this code and see what happens when you forget the 'f'.",
            initialCode: "name = \"Bob\"\nprint(\"Hello {name}, welcome back.\")",
            buttonText: "Run Broken Code",
            hints: [
              "Notice it literally printed '{name}'?",
              "Without the 'f' prefix, Python treats curly braces as normal text.",
              "Add an 'f' right before the quote."
            ],
            expectedError: "",
            solutionCode: "name = \"Bob\"\nprint(f\"Hello {name}, welcome back.\")",
            nextStepMessage: "Fixed! Always remember the 'f' prefix."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "Profile Builder Challenge",
            prompt: "You have three variables. Print a single sentence using an f-string that says: 'Character: Link, Class: Knight, Level: 15'",
            initialCode: "char_name = \"Link\"\nchar_class = \"Knight\"\nlevel = 15\n\n# Print the f-string here",
            buttonText: "Run Code",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "char_name = \"Link\"\nchar_class = \"Knight\"\nlevel = 15\nprint(f\"Character: {char_name}, Class: {char_class}, Level: {level}\")", expectedOutput: "Character: Link, Class: Knight, Level: 15" }
            ],
            successMessage: "Congratulations! You have completed Stage 01 and mastered the foundations of Python."
          }
        ]
      }
    }
  ]
};
