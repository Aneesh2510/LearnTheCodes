export const stage10 = {
  id: "stage-10",
  number: "10",
  title: "Error Handling",
  subtitle: "Expecting the Unexpected",
  description: "Learn how to stop your program from crashing when users do something wrong or unexpected.",
  estimatedTime: "2 Hours",
  lessonsCount: 6,
  difficulty: "Advanced",
  status: "completed",
  prerequisites: ["stage-07"],
  lessons: [
    {
      id: "lesson-01",
      title: "When Things Go Wrong",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Errors vs Exceptions",
          content: "You've already seen **Syntax Errors**: missing colons, wrong indentation. These happen *before* the code even runs because Python can't read the file.\n\nBut what happens if the code is perfectly written, but a user types the word 'five' when you asked for a number? Python crashes while the code is running. This is called an **Exception**."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Handle Them?",
          content: "If you build a calculator app and someone divides by zero, you don't want the entire app to shut down. You want to show a polite message saying 'You cannot divide by zero' and let them try again. This requires Error Handling."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Crashing the System",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "ZeroDivisionError",
            prompt: "Run this code. It crashes with a `ZeroDivisionError` because math forbids dividing by 0.",
            initialCode: "print(\"Starting calc...\")\n# This causes an exception and stops the program dead\nresult = 10 / 0\n\n# This will never print\nprint(\"Finished!\")",
            buttonText: "Run Broken Code",
            hints: [
              "ZeroDivisionError: division by zero.",
              "Notice that 'Finished!' never prints.",
              "Change the `0` to a `2` to see the program complete normally."
            ],
            expectedError: "ZeroDivisionError",
            solutionCode: "print(\"Starting calc...\")\nresult = 10 / 2\nprint(\"Finished!\")",
            nextStepMessage: "Fixed! But we can't always control what users type. We need a safety net."
          }
        ]
      }
    },
    {
      id: "lesson-02",
      title: "Try / Except Blocks",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Safety Net",
          content: "Python provides a way to 'test' code and catch errors before they crash the program. We use a `try` block and an `except` block."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Bomb Squad",
          content: "1. **TRY:** Python puts on a bomb squad suit and goes into the `try` block to defuse the code.\n2. **SUCCESS:** If the code works fine, Python skips the `except` block completely.\n3. **EXPLOSION (Exception):** If the code blows up, Python doesn't die! The suit protects it. It immediately jumps into the `except` block to handle the mess, and the program continues running normally afterwards."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\ntry:\n    # Risky code goes here\n    result = 10 / 0\nexcept:\n    # Backup plan goes here\n    print(\"Oops, an error occurred.\")\n```"
        },
        {
          id: "mistake",
          type: "concept",
          heading: "The Assignment Trap",
          content: "If `result = 10 / 0` fails, the `result` variable is NEVER created. If you try to print `result` inside the `except` block, your program will crash with a NameError!"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Deploying the Net",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Flow",
            prompt: "Will this program crash, or will it finish normally?",
            initialCode: "try:\n    print(10 / 0)\nexcept:\n    print(\"Math error caught!\")\n\nprint(\"Program Finished normally.\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It finished normally! The `except` block caught the explosion."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Catch the Conversion",
            prompt: "Wrap the risky conversion `int(user_input)` in a try/except block. If it fails, print `\"Invalid number\"`.",
            initialCode: "user_input = \"five\"  # This will cause a ValueError if converted to int\n\n# Wrap this in try/except\nnumber = int(user_input)\nprint(f\"You entered: {number}\")",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "user_input = \"five\"\ntry:\n    number = int(user_input)\n    print(f\"You entered: {number}\")\nexcept:\n    print(\"Invalid number\")", expectedOutput: "Invalid number" }
            ],
            successMessage: "Perfect. You prevented a total application crash."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "Specific Exceptions",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Being Precise",
          content: "A bare `except:` block catches *everything*. This is generally considered bad practice, because you might catch a typo in your own code instead of the specific user error you were expecting."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Targeted Catching",
          content: "You should specify exactly which error you want to catch. You can even chain them!\n\n```python\ntry:\n    result = 10 / int(\"zero\")\nexcept ValueError:\n    print(\"That's not a number!\")\nexcept ZeroDivisionError:\n    print(\"You can't divide by zero!\")\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Sniper Catching",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Which Error Hits?",
            prompt: "Run the code. It hits the `ValueError`. Then change `user_input` to `\"0\"` and run it again. It will hit the `ZeroDivisionError`.",
            initialCode: "user_input = \"hello\"\n\ntry:\n    num = int(user_input)\n    print(100 / num)\nexcept ValueError:\n    print(\"Conversion failed: Please type numbers.\")\nexcept ZeroDivisionError:\n    print(\"Math failed: Cannot divide by zero.\")",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "You can handle different types of failures with different fallback logic."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Catch the IndexError",
            prompt: "The code below tries to access index 10 of a small list, which will cause an `IndexError`. Wrap it in a `try` block, and write an `except IndexError:` block that prints `\"Item not found\"`.",
            initialCode: "items = [\"A\", \"B\", \"C\"]\n\n# Wrap in try/except IndexError\nprint(items[10])",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "items = [\"A\", \"B\", \"C\"]\ntry:\n    print(items[10])\nexcept IndexError:\n    print(\"Item not found\")", expectedOutput: "Item not found" }
            ],
            successMessage: "Great! Targeting specific exceptions is the mark of a pro."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Stage Milestone: The Bulletproof System",
      time: "30 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "You will write a function that safely retrieves an item from a database by its index number."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "1. Create a function `get_item(index_string)`.\n2. Inside, set `database = [\"Sword\", \"Shield\", \"Potion\"]`.\n3. Wrap the following in a `try` block:\n    * Convert `index_string` to an integer.\n    * Get the item from the `database` at that integer index.\n    * `return` the item.\n4. Add an `except ValueError:` block that returns `\"Invalid Number\"`.\n5. Add an `except IndexError:` block that returns `\"Out of Range\"`."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Safe Retrieval",
            prompt: "Write the function exactly as described.",
            initialCode: "# Write your get_item function here",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: false,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "def get_item(index_string):\n    database = [\"Sword\", \"Shield\", \"Potion\"]\n    try:\n        idx = int(index_string)\n        return database[idx]\n    except ValueError:\n        return \"Invalid Number\"\n    except IndexError:\n        return \"Out of Range\"\nprint(get_item(\"1\"))", expectedOutput: "Shield" },
              { code: "def get_item(index_string):\n    database = [\"Sword\", \"Shield\", \"Potion\"]\n    try:\n        idx = int(index_string)\n        return database[idx]\n    except ValueError:\n        return \"Invalid Number\"\n    except IndexError:\n        return \"Out of Range\"\nprint(get_item(\"five\"))", expectedOutput: "Invalid Number" },
              { code: "def get_item(index_string):\n    database = [\"Sword\", \"Shield\", \"Potion\"]\n    try:\n        idx = int(index_string)\n        return database[idx]\n    except ValueError:\n        return \"Invalid Number\"\n    except IndexError:\n        return \"Out of Range\"\nprint(get_item(\"99\"))", expectedOutput: "Out of Range" },
              { code: "def get_item(index_string):\n    database = [\"Sword\", \"Shield\", \"Potion\"]\n    try:\n        idx = int(index_string)\n        return database[idx]\n    except ValueError:\n        return \"Invalid Number\"\n    except IndexError:\n        return \"Out of Range\"\nprint(get_item(\"-99\"))", expectedOutput: "Out of Range" }
            ],
            successMessage: "Congratulations! You have completed Stage 10 and written bulletproof Python code!"
          }
        ]
      }
    }
  ]
};
