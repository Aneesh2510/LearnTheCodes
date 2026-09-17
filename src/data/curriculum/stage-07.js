export const stage07 = {
  id: "stage-07",
  number: "07",
  title: "Functions & Modularity",
  subtitle: "Reusable Blocks",
  description: "Learn how to group your code into reusable mini-programs to keep your logic clean and modular.",
  estimatedTime: "2.5 Hours",
  lessonsCount: 8,
  difficulty: "Intermediate",
  status: "completed",
  prerequisites: ["stage-06"],
  lessons: [
    {
      id: "lesson-01",
      title: "The Problem with Pasta",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Spaghetti Code",
          content: "As your programs grow from 10 lines to 1,000 lines, writing everything in one giant block becomes impossible to read, debug, and maintain. Programmers call this messy, intertwined logic **Spaghetti Code**."
        },
        {
          id: "why",
          type: "concept",
          heading: "The Solution: Functions",
          content: "A **Function** is a named block of code designed to do one specific job. Instead of writing the same 5 lines of code every time a player takes damage, you write a `take_damage()` function once, and just call its name whenever you need it."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Identifying Functions",
        prompt: "You've actually been using functions since Stage 01! Which of the following is a built-in Python function you have already used?",
        questions: [
          {
            question: "Select the function:",
            options: [
              "if",
              "print()",
              "for",
              "="
            ],
            correctAnswer: "print()"
          }
        ],
        successMessage: "Exactly. `print()` is a function built by the creators of Python. Now, you will learn to build your own."
      }
    },
    {
      id: "lesson-02",
      title: "Defining a Function",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Two Phases",
          content: "Working with functions has two distinct phases:\n1.  **Defining it:** Writing the recipe (this does not run the code).\n2.  **Calling it:** Ordering the meal (this actually runs the code)."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The def Keyword",
          content: "To define a function, use the `def` keyword, give it a name, add parentheses `()`, and a colon `:`. Then indent the code block.\n\n```python\n# 1. Defining the function\ndef greet():\n    print(\"Hello, User!\")\n\n# 2. Calling the function\ngreet()\n```"
        },
        {
          id: "mistake",
          type: "concept",
          heading: "The Silent Failure",
          content: "If you define a function but forget to call it, your code will run without errors, but absolutely nothing will happen. Python simply stores the recipe in memory and moves on."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Writing the Recipe",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Execution",
            prompt: "Look at the code below. How many times will 'Boom!' print?",
            initialCode: "def explode():\n    print(\"Boom!\")\n\nprint(\"Countdown...\")\nexplode()\nexplode()",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed twice! The function was defined once, but called two times."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Your First Function",
            prompt: "Define a function named `say_hello` that prints `\"Hi\"`. Then, call the function below the definition.",
            initialCode: "# Define say_hello here\n\n\n# Call say_hello here\n",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "def say_hello():\n    print(\"Hi\")\nsay_hello()", expectedOutput: "Hi" }
            ],
            successMessage: "Perfect. You have defined and executed your own logic block."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "Parameters",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Passing Data IN",
          content: "A function that always prints 'Hello, User!' is a bit useless. We want it to say 'Hello, Alice!' or 'Hello, Bob!'.\n\nWe need to pass data *into* the function. We do this using **Parameters**."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Mail Slot",
          content: "Imagine the parentheses `()` as a mail slot on the front door of your function. When you call the function, you push a specific value (an Argument) through the slot. The function catches it on the inside and gives it a variable name (the Parameter)."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\n# 'name' is the parameter (the empty slot)\ndef greet(name):\n    print(f\"Hello, {name}!\")\n\n# 'Alice' is the argument (the mail being pushed in)\ngreet(\"Alice\")\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Sending Mail",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Multiple Calls",
            prompt: "Run this code. The function is defined once, but because of the parameter, it adapts to whatever data you pass it.",
            initialCode: "def cheer(team):\n    print(f\"Go {team}!\")\n\ncheer(\"Tigers\")\ncheer(\"Bears\")",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "The function changed its behavior dynamically."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Double the Number",
            prompt: "Define a function named `double` that takes a parameter named `num`. Inside the function, print `num * 2`. Then, call the function and pass the number `5` into it.",
            initialCode: "# Define function here\n\n# Call function here with 5",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "def double(num):\n    print(num * 2)\ndouble(5)", expectedOutput: "10" }
            ],
            successMessage: "Great job! Your function is now receiving data from the outside."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Return",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Getting Data OUT",
          content: "Printing inside a function is great for learning, but terrible for real software. \n\nIf you have a function that calculates tax, you don't want it to *print* the tax to the screen; you want it to give the calculated number *back* to the rest of the program so you can add it to the total bill.\n\nWe use the `return` keyword to pass data OUT of a function."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Machine Output",
          content: "If parameters are the raw materials going into the factory (Input), `return` is the finished product coming out the back door (Output). \n\nWhen a function hits a `return` statement, it immediately spits the value out and **destroys the function context**. Any code written below a `return` inside that function will never run."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\ndef add_ten(num):\n    return num + 10\n\n# We must SAVE what the function returns\nresult = add_ten(5)\nprint(result) # 15\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Returning Data",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "The Print Trap",
            prompt: "Run this code. It tries to save the output of the function into `final_score`, but it prints `None`. Why? Because the function uses `print()` instead of `return`.",
            initialCode: "def calculate_score(points):\n    print(points * 10)\n\n# This will break\nfinal_score = calculate_score(5)\nprint(f\"The final score is: {final_score}\")",
            buttonText: "Run Broken Code",
            hints: [
              "Functions that don't have a `return` statement automatically return `None`.",
              "Change `print(points * 10)` inside the function to `return points * 10`."
            ],
            expectedOutputRequired: true,
            solutionCode: "def calculate_score(points):\n    return points * 10\nfinal_score = calculate_score(5)\nprint(f\"The final score is: {final_score}\")",
            nextStepMessage: "Fixed! Always `return` data if you want to use it later in the program. This is the most common beginner mistake!"
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "The Squarer",
            prompt: "Define a function named `square` that takes a parameter `x`. It should `return` `x * x`. Do not print inside the function. Below the function, call it with `4`, save the result in a variable named `ans`, and print `ans`.",
            initialCode: "# Define square function\n\n# Save result to ans and print",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "def square(x):\n    return x * x\nans = square(4)\nprint(ans)", expectedOutput: "16" }
            ],
            successMessage: "Perfect! You have mastered the true Input -> Process -> Output cycle of functions."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "Multiple Parameters",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Passing Multiple Items",
          content: "Functions aren't limited to a single parameter. You can pass as many pieces of data as you want by separating them with commas."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\ndef calculate_area(width, height):\n    return width * height\n\n# Order matters! width becomes 10, height becomes 5\narea = calculate_area(10, 5)\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Complex Inputs",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "What will this output?",
            initialCode: "def combine(first, last):\n    return first + \" \" + last\n\nname = combine(\"John\", \"Doe\")\nprint(name)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It returned the combined string 'John Doe'."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "The Subtractor",
            prompt: "Write a function `subtract(a, b)` that returns `a - b`. Call it with `10` and `3` and print the result directly (e.g., `print(subtract(10, 3))`).",
            initialCode: "# Write and call your function here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "def subtract(a, b):\n    return a - b\nprint(subtract(10, 3))", expectedOutput: "7" }
            ],
            successMessage: "Great job handling multiple parameters."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "Scope",
      time: "20 Mins",
      exercises: "1 Exercise",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Vegas Rule",
          content: "There is a strict rule in programming called **Scope**: *What happens in a function, stays in a function.*\n\nAny variable created *inside* a function is completely invisible to the rest of the program. It is called a **Local Variable**."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: Soundproof Rooms",
          content: "Imagine the main program as the hallway, and the function as a soundproof room. People in the room can see out into the hallway (functions can read Global variables), but people in the hallway cannot hear what happens inside the room (Global cannot read Local variables)."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Does Scope Exist?",
          content: "Scope is a safety feature. It prevents two programmers from accidentally using the same variable name (`temp_data`) and overwriting each other's work. The `temp_data` inside Function A is completely separate from the `temp_data` inside Function B."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Breaking Scope",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "NameError: Local Variable",
            prompt: "Run this code. It tries to print a variable that was created inside a function. Watch it crash.",
            initialCode: "def make_secret():\n    secret_code = \"007\"\n\nmake_secret()\n# The hallway trying to hear the soundproof room\nprint(secret_code)",
            buttonText: "Run Broken Code",
            hints: [
              "NameError: name 'secret_code' is not defined.",
              "To get the data out of the soundproof room, you must `return` it.",
              "Change line 2 to `return \"007\"`, and change line 4 to `secret_code = make_secret()`."
            ],
            expectedError: "NameError",
            solutionCode: "def make_secret():\n    return \"007\"\n\nsecret_code = make_secret()\nprint(secret_code)",
            nextStepMessage: "Exactly. The only way data escapes a function is through the `return` door."
          }
        ]
      }
    },
    {
      id: "lesson-07",
      title: "Default Parameters",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Optional Inputs",
          content: "Sometimes, a parameter usually has the same value, but you want to give the user the option to change it if they really want to. \n\nYou can set a **Default Parameter**."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "Just assign a value to the parameter inside the parentheses.\n\n```python\ndef greet(name, greeting=\"Hello\"):\n    print(f\"{greeting}, {name}!\")\n\n# Using the default\ngreet(\"Alice\") # Hello, Alice!\n\n# Overriding the default\ngreet(\"Bob\", \"Welcome\") # Welcome, Bob!\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Setting Defaults",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "What will this code print?",
            initialCode: "def order_coffee(size=\"Medium\"):\n    print(f\"One {size} coffee coming up.\")\n\norder_coffee()",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 'One Medium coffee coming up.' because we didn't pass a size argument."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "The Tax Calculator",
            prompt: "Write a function `calculate_total(price, tax_rate=0.05)` that returns `price + (price * tax_rate)`. Call it once with just `100` and print the result. Call it again with `100` and a tax rate of `0.10` and print that result.",
            initialCode: "# Write your function here\n\n\n# Call it with just 100\n\n# Call it with 100 and 0.10",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "def calculate_total(price, tax_rate=0.05):\n    return price + (price * tax_rate)\nprint(calculate_total(100))\nprint(calculate_total(100, 0.10))", expectedOutput: "105.0\n110.0" }
            ],
            successMessage: "Perfect. Default parameters make your functions incredibly flexible."
          }
        ]
      }
    },
    {
      id: "lesson-08",
      title: "Stage Milestone: The Text Formatter",
      time: "40 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "You will build a reusable text formatting module."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "Write a function called `format_title`. \n\n1. It should take two parameters: `text` and `border_char`.\n2. `border_char` should have a default value of `\"-\"`.\n3. The function should calculate the length of the `text`.\n4. It should construct a top border out of `border_char` repeated to match the text length.\n5. It should construct the final string: the top border, a newline `\\n`, the `text`, a newline `\\n`, and the bottom border.\n6. It MUST `return` the final string, not print it."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Formatter",
            prompt: "Write the function according to the requirements. We will test it by calling it behind the scenes (both with and without the default parameter).",
            initialCode: "# Write your format_title function here",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: false,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "def format_title(text, border_char=\"-\"):\n    border = border_char * len(text)\n    return f\"{border}\\n{text}\\n{border}\"\nprint(format_title(\"HELLO\"))", expectedOutput: "-----\nHELLO\n-----" },
              { code: "def format_title(text, border_char=\"-\"):\n    border = border_char * len(text)\n    return f\"{border}\\n{text}\\n{border}\"\nprint(format_title(\"HI\", \"*\"))", expectedOutput: "**\nHI\n**" },
              { code: "def format_title(text, border_char=\"-\"):\n    border = border_char * len(text)\n    return f\"{border}\\n{text}\\n{border}\"\nprint(format_title(\"TESTING_DEFAULT\"))", expectedOutput: "---------------\nTESTING_DEFAULT\n---------------" }
            ],
            successMessage: "Congratulations! You have completed Stage 07 and mastered Python Functions!"
          }
        ]
      }
    }
  ]
};
