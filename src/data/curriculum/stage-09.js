export const stage09 = {
  id: "stage-09",
  number: "09",
  title: "Modules & Libraries",
  subtitle: "Borrowing Power",
  description: "Learn how to use pre-written code from the Python Standard Library to give your programs super powers without writing everything from scratch.",
  estimatedTime: "2 Hours",
  lessonsCount: 7,
  difficulty: "Beginner",
  status: "completed",
  prerequisites: ["stage-07"],
  lessons: [
    {
      id: "lesson-01",
      title: "Don't Reinvent the Wheel",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Standing on the Shoulders of Giants",
          content: "Imagine you need to calculate the square root of a number, or pick a random item from a list, or figure out exactly what day of the week it is. \n\nYou *could* write complex algorithms to do these things from scratch. But you shouldn't."
        },
        {
          id: "why",
          type: "concept",
          heading: "The Python Standard Library",
          content: "When you install Python, it comes with a massive toolbox of pre-written, highly-optimized code called the **Standard Library**. These tools are organized into separate files called **Modules**."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Why Use Modules?",
        prompt: "Which of the following is the best reason to use a module instead of writing the code yourself?",
        questions: [
          {
            question: "Select the primary benefit:",
            options: [
              "It makes your code run slower.",
              "It saves time and uses code that has been tested by millions of people.",
              "It prevents you from learning how algorithms work."
            ],
            correctAnswer: "It saves time and uses code that has been tested by millions of people."
          }
        ],
        successMessage: "Exactly. Professional programmers reuse code as much as possible."
      }
    },
    {
      id: "lesson-02",
      title: "Importing Modules",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Opening the Toolbox",
          content: "By default, Python keeps all these extra tools packed away so your programs load instantly. If you want to use a module, you have to explicitly tell Python to bring it into your file using the `import` keyword."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The Import Keyword",
          content: "```python\n# 1. Bring the math module into this file\nimport math\n\n# 2. Use a tool inside that module using dot notation\nresult = math.sqrt(25)\nprint(result) # 5.0\n```\nImports should always be placed at the very top of your Python file."
        },
        {
          id: "mistake",
          type: "concept",
          heading: "The Shadowing Bug",
          content: "**CRITICAL WARNING:** Never name your own python file `math.py` or `random.py`. If you do, when you write `import math`, Python will import *your* file instead of the official library, breaking everything! This is called **Module Shadowing**."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Using Math",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "The `math` module has a tool called `ceil()` which always rounds a decimal UP to the nearest whole number. What will this output?",
            initialCode: "import math\n\nprint(math.ceil(4.1))",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 5! Even though 4.1 is closer to 4, `ceil` (ceiling) always goes up."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Rounding Down",
            prompt: "Import the `math` module. Use `math.floor()` to round `8.9` DOWN to the nearest whole number. Print the result.",
            initialCode: "# Import math here\n\n\n# Use math.floor and print here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "import math\nprint(math.floor(8.9))", expectedOutput: "8" }
            ],
            successMessage: "Perfect. You successfully imported and utilized an external module."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "Specific Imports",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Unpacking Specific Tools",
          content: "Sometimes a module is massive, and you only need one specific tool from it. Instead of importing the whole toolbox, you can import just the tool."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "From ... Import ...",
          content: "```python\n# Instead of: import math\nfrom math import sqrt, pi\n\n# Now you don't need to type 'math.' before it!\nprint(sqrt(9))\nprint(pi)\n```"
        },
        {
          id: "mistake",
          type: "concept",
          heading: "The Danger of Specific Imports",
          content: "If you import `sqrt` from `math`, and then later you define your own function called `def sqrt():`, your function will overwrite the imported one. This is why `import math` is often safer—it keeps everything cleanly inside the `math.` namespace."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Targeted Importing",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "NameError: Not Defined",
            prompt: "Run this code. It tries to use `sqrt` directly, but it only imported the whole `math` module.",
            initialCode: "import math\n\n# This will break\nprint(sqrt(16))",
            buttonText: "Run Broken Code",
            hints: [
              "NameError: name 'sqrt' is not defined.",
              "Because we used `import math`, we must use `math.sqrt()`.",
              "Alternatively, change line 1 to `from math import sqrt` to make the current code work."
            ],
            expectedError: "NameError",
            solutionCode: "from math import sqrt\n\nprint(sqrt(16))",
            nextStepMessage: "Fixed! You must match your usage to your import style."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Importing Pi",
            prompt: "Use the `from ... import ...` syntax to import `pi` from the `math` module. Then print it.",
            initialCode: "# Write your import here\n\n# Print pi here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "from math import pi\nprint(pi)", expectedOutput: "3.141592653589793" }
            ],
            successMessage: "Great job keeping your namespaces clean."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Aliasing",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Giving Modules Nicknames",
          content: "Sometimes module names are long, or they conflict with a variable name you already want to use. You can give a module a nickname when you import it using the `as` keyword."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Import As",
          content: "```python\nimport random as rnd\n\n# Now use the nickname!\nnumber = rnd.randint(1, 10)\nprint(number)\n```\nThis is very common in Data Science (e.g., `import pandas as pd`, `import numpy as np`)."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Nicknaming",
        steps: [
          {
            id: "step-1-exercise",
            type: "exercise",
            title: "Math Alias",
            prompt: "Import the `math` module with the alias `m`. Then use `m.sqrt(100)` and print the result.",
            initialCode: "# Alias the import here\n\n# Use the alias here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "import math as m\nprint(m.sqrt(100))", expectedOutput: "10.0" }
            ],
            successMessage: "Awesome. Aliasing saves a lot of typing in large libraries."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "The Random Module",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Adding Unpredictability",
          content: "Games, simulations, and cryptography all rely on unpredictability. Python provides the `random` module to generate random numbers and make random choices."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Common Random Tools",
          content: "*   `random.randint(a, b)`: Returns a random integer between a and b (inclusive).\n*   `random.choice(list)`: Picks a random item from a list.\n*   `random.shuffle(list)`: Shuffles a list in-place."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Rolling the Dice",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Random Choice",
            prompt: "Run this code several times. You will see a different loot drop each time.",
            initialCode: "import random\n\nloot_table = [\"Sword\", \"Shield\", \"Potion\", \"Gold\"]\ndrop = random.choice(loot_table)\nprint(f\"You found: {drop}\")",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "Randomness is the core of dynamic gameplay."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "The D20",
            prompt: "Import `random`. Use `random.randint()` to generate a number between `1` and `20` (inclusive). Print the result.",
            initialCode: "# Import random\n\n# Generate and print D20 roll",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "import random\n# test hack: mock randint to test logic\nrandom.randint = lambda a, b: 15\nprint(random.randint(1, 20))", expectedOutput: "15" }
            ],
            successMessage: "Critical Hit! You can now generate random numbers."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "Stage Milestone: The Loot Box",
      time: "30 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "You will simulate a video game loot box that drops 3 random items from a master list."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "1. Import the `random` module.\n2. Create a list called `items` containing: `\"Gold\"`, `\"Sword\"`, `\"Armor\"`, `\"Potion\"`, `\"Ring\"`.\n3. Create an empty list called `my_loot = []`.\n4. Write a `for` loop that runs exactly 3 times using `range(3)`.\n5. Inside the loop, use `random.choice(items)` to pick a random item, and `.append()` it to `my_loot`.\n6. After the loop, print the `my_loot` list."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Loot Box",
            prompt: "Write the logic described above.",
            initialCode: "# Write your loot box logic here",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "import random\nrandom.choice = lambda x: x[0] # Mock for deterministic test\nitems = [\"Gold\", \"Sword\", \"Armor\", \"Potion\", \"Ring\"]\nmy_loot = []\nfor i in range(3):\n    my_loot.append(random.choice(items))\nprint(my_loot)", expectedOutput: "['Gold', 'Gold', 'Gold']" }
            ],
            successMessage: "Congratulations! You have completed Stage 09 and harnessed the power of the Standard Library!"
          }
        ]
      }
    }
  ]
};
