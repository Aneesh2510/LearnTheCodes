export const stage04 = {
  id: "stage-04",
  number: "04",
  title: "Loops & Iteration",
  subtitle: "Repeating Actions",
  description: "Learn how to make the computer repeat tasks efficiently without writing the same code over and over.",
  estimatedTime: "2.5 Hours",
  lessonsCount: 9,
  difficulty: "Intermediate",
  status: "completed",
  prerequisites: ["stage-03"],
  lessons: [
    {
      id: "lesson-01",
      title: "Why We Need Loops",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The DRY Principle",
          content: "In programming, there is a golden rule called **DRY**: Don't Repeat Yourself.\n\nIf you find yourself copying and pasting the exact same lines of code, you are doing it wrong. Computers are built to do repetitive tasks."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Loops Exist",
          content: "Imagine you want to print 'Hello' 1,000 times. Writing 1,000 `print()` statements would take hours and make your file massive. A **loop** allows you to write the instruction *once* and tell Python to repeat it 1,000 times."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Track",
          content: "A loop is like a race track.\n1.  **START:** The runner steps onto the track.\n2.  **EXECUTE:** They run one full lap (executing the code block).\n3.  **CHECK:** The coach asks, 'Are we done?'\n4.  **REPEAT:** If no, they run another lap. If yes, they stop and exit the track."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Identify Repetition",
        prompt: "Which of these scenarios is the best candidate for a loop?",
        questions: [
          {
            question: "Select the scenario that requires a loop:",
            options: [
              "Checking if a user's password is longer than 8 characters.",
              "Sending a 'Happy New Year' email to all 5,000 customers in a database.",
              "Calculating the sales tax for a single $50 item."
            ],
            correctAnswer: "Sending a 'Happy New Year' email to all 5,000 customers in a database."
          }
        ],
        successMessage: "Exactly. Any task applied to many items is a perfect fit for a loop."
      }
    },
    {
      id: "lesson-02",
      title: "The WHILE Loop",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Repeating Based on a Condition",
          content: "The `while` loop is exactly like an `if` statement, except instead of running the code block *once*, it runs it **over and over again AS LONG AS the condition is true**."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\ncount = 3\n\nwhile count > 0:\n    print(count)\n    count = count - 1\n```\n\nNotice the `count = count - 1`. This is critical. If we don't change the state inside the loop, the condition `count > 0` will *always* be true, and the loop will never stop."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Running Laps",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "Look at the code below. How many times will 'Lap' be printed?",
            initialCode: "laps = 1\nwhile laps <= 3:\n    print(f\"Lap {laps}\")\n    laps = laps + 1\nprint(\"Done!\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Correct! It printed for laps 1, 2, and 3. When laps became 4, the condition became False and the loop stopped."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Countdown",
            prompt: "Write a `while` loop that counts down from 5 to 1, printing each number. After the loop, print `\"Liftoff!\"`.",
            initialCode: "timer = 5\n\n# write your while loop here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "timer = 5\nwhile timer > 0:\n    print(timer)\n    timer = timer - 1\nprint(\"Liftoff!\")", expectedOutput: "5\n4\n3\n2\n1\nLiftoff!" }
            ],
            successMessage: "Great job! You controlled the flow of a while loop."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "Infinite Loops",
      time: "15 Mins",
      exercises: "1 Exercise",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Endless Cycle",
          content: "What happens if the condition in a `while` loop never becomes False? The computer will keep running the code block forever (or until the program crashes or you force quit it). This is called an **Infinite Loop**."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Do They Happen?",
          content: "Infinite loops are almost always bugs caused by the programmer forgetting to *mutate* (update) the condition variable inside the loop block. It is a rite of passage for every programmer to freeze their computer with an infinite loop at least once."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Debugging the Endless",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "The Missing Mutation",
            prompt: "The code below is supposed to print numbers 1 to 3. But it is an infinite loop because `x` is always 1. (We have added a safety catch to stop it at 10 for you). Fix the code so it actually stops at 3 by mutating `x`.",
            initialCode: "x = 1\n# WARNING: This is broken\nwhile x <= 3:\n    print(f\"Value is {x}\")\n    # HINT: Something is missing here!",
            buttonText: "Run Broken Code",
            hints: [
              "You need to change the value of `x` inside the loop so the condition eventually evaluates to False.",
              "Add `x = x + 1` inside the loop block."
            ],
            expectedOutputRequired: true,
            solutionCode: "x = 1\nwhile x <= 3:\n    print(f\"Value is {x}\")\n    x = x + 1",
            nextStepMessage: "Fixed! You saved the computer from an endless cycle by mutating the state."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "The FOR Loop",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Iterating Over Collections",
          content: "`while` loops are great when you don't know exactly how many times you need to loop. But usually, you *do* know. You want to do something to every item in a list, or every letter in a word.\n\nThe `for` loop is designed specifically for this."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Conveyor Belt",
          content: "Imagine a conveyor belt of items. \n\n`for item in items:`\n\nPython automatically grabs the first item, runs the code block, then grabs the next item, runs the code block, and repeats until the conveyor belt is empty. You don't have to manually track any numbers or worry about infinite loops!"
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\nword = \"Python\"\n\nfor letter in word:\n    print(letter)\n```\nThe variable name `letter` is arbitrary. We could have called it `x`, but `letter` makes it readable. Python automatically assigns it the value of the current item on the conveyor belt."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "The Conveyor Belt",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "What will this code print?",
            initialCode: "greeting = \"Hi\"\nfor char in greeting:\n    print(char)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "Correct! It printed 'H', then 'i', taking one character at a time."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Spell it Out",
            prompt: "Use a `for` loop to print each letter of the word `\"ROBOT\"` on a new line.",
            initialCode: "target = \"ROBOT\"\n\n# write your for loop here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "target = \"ROBOT\"\nfor c in target:\n    print(c)", expectedOutput: "R\nO\nB\nO\nT" }
            ],
            successMessage: "Perfect. `for` loops are the most common loops in Python."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "The range() Function",
      time: "20 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Generating Numbers",
          content: "Sometimes you just want a `for` loop to run a specific number of times, but you don't have a string or list to loop over. \n\nThe `range()` function generates a sequence of numbers on the fly."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Range Variations",
          content: "`range(stop)`: Generates from 0 up to (but not including) the stop number.\n`range(start, stop)`: Generates from start up to (but not including) stop.\n`range(start, stop, step)`: Generates numbers, jumping by the step amount.\n\n```python\nfor i in range(3):\n    print(i) # Prints 0, 1, 2\n```"
        },
        {
          id: "mistake",
          type: "concept",
          heading: "The Exclusive Boundary",
          content: "Notice that `range(3)` prints 0, 1, and 2. It does NOT print 3. The `stop` number is **exclusive** (up to, but NOT including). In programming, we almost always start counting from 0, not 1."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Controlling the Range",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Exploring Step",
            prompt: "Run the code to see how `range` can jump by 2. Then modify it to print numbers from 10 to 50, jumping by 10 (Remember, the stop is exclusive!).",
            initialCode: "for num in range(0, 10, 2):\n    print(num)",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Great! `range` is incredibly flexible once you remember that the stop number isn't included."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Repeat an Action",
            prompt: "Use a `for` loop and `range()` to print the word `\"Echo\"` exactly 5 times.",
            initialCode: "# Write your loop here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "for i in range(5):\n    print(\"Echo\")", expectedOutput: "Echo\nEcho\nEcho\nEcho\nEcho" }
            ],
            successMessage: "Awesome. You can now execute code an exact number of times."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "Loop Control: break",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Emergency Exit",
          content: "Sometimes you need to stop a loop early, before it naturally finishes its sequence or condition. The `break` statement immediately terminates the loop."
        },
        {
          id: "why",
          type: "concept",
          heading: "When to use it",
          content: "Imagine searching through a massive database of 1 million names for 'Alice'. Once you find her on the 5th check, there is no need to check the other 999,995 names. You should `break` to save time."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\nfor i in range(100):\n    print(i)\n    if i == 2:\n        print(\"Found it!\")\n        break\n```\nThis loop was supposed to run 100 times, but the `break` stopped it at 2."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Breaking Out",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Exit",
            prompt: "What is the LAST number this code will print before breaking?",
            initialCode: "for num in range(10):\n    if num == 4:\n        break\n    print(num)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 3! When it hit 4, it hit the `break` *before* the print statement."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Stop the Password Check",
            prompt: "We have a `while True` loop (an intentional infinite loop). Check if the variable `guess` is equal to `\"secret\"`. If it is, print `\"Unlocked\"` and `break` out of the loop.",
            initialCode: "guess = \"secret\"\n\nwhile True:\n    # write your if statement and break here\n    # if guess is wrong, it will loop forever\n    pass # remove pass and write your code",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "guess = \"secret\"\nwhile True:\n    if guess == \"secret\":\n        print(\"Unlocked\")\n        break", expectedOutput: "Unlocked" }
            ],
            successMessage: "Perfect. Using `while True` and `break` is a very common pattern in Python."
          }
        ]
      }
    },
    {
      id: "lesson-07",
      title: "Loop Control: continue",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Skip Button",
          content: "While `break` destroys the loop entirely, `continue` just skips the *current lap*. It immediately jumps back to the top of the loop to start the next iteration."
        },
        {
          id: "why",
          type: "concept",
          heading: "When to use it",
          content: "Imagine grading a stack of test papers. If a paper is blank, you don't want to stop grading completely (`break`). You just want to skip that specific blank paper and move on to the next one (`continue`)."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Skipping Laps",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Skip the Evens",
            prompt: "Run this code. Notice how it only prints odd numbers. The `continue` statement forces it to skip the `print` line whenever `num % 2 == 0` (meaning it's an even number).",
            initialCode: "for num in range(5):\n    if num % 2 == 0:\n        continue\n    print(num)",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "The even numbers were skipped entirely."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Skip the Vowels",
            prompt: "Loop over the word `\"PYTHON\"`. If the letter is `\"O\"`, use `continue` to skip it. Otherwise, print the letter.",
            initialCode: "word = \"PYTHON\"\n\n# write loop here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "word = \"PYTHON\"\nfor letter in word:\n    if letter == \"O\":\n        continue\n    print(letter)", expectedOutput: "P\nY\nT\nH\nN" }
            ],
            successMessage: "Great job using `continue` to filter out specific items."
          }
        ]
      }
    },
    {
      id: "lesson-08",
      title: "State Inside a Loop",
      time: "20 Mins",
      exercises: "3 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Accumulators and Counters",
          content: "A very common pattern is to create a variable *before* a loop, and then update that variable *inside* the loop. \n\nFor example, keeping a running score, or counting how many times an event happened."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The Pattern",
          content: "```python\ntotal = 0  # 1. Initialize outside\n\nfor num in range(4): # 0, 1, 2, 3\n    total = total + num  # 2. Update inside\n\nprint(total) # 3. Result outside\n```"
        },
        {
          id: "mistake",
          type: "concept",
          heading: "The Reset Bug",
          content: "If you initialize the variable *inside* the loop, it resets to zero on every single lap! It must be initialized outside/before the loop so that the state survives between laps."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Accumulating State",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "The Reset Bug",
            prompt: "This code is supposed to count from 1 to 5, resulting in `total_count = 5`. But it prints 1. Fix the bug.",
            initialCode: "for num in range(5):\n    total_count = 0\n    total_count = total_count + 1\n    \nprint(total_count)",
            buttonText: "Run Broken Code",
            hints: [
              "Look at line 2. On every lap, `total_count` is reset to 0.",
              "Move the initialization `total_count = 0` to line 1, outside the loop."
            ],
            expectedOutputRequired: true,
            solutionCode: "total_count = 0\nfor num in range(5):\n    total_count = total_count + 1\nprint(total_count)",
            nextStepMessage: "Fixed! The state must survive between laps."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Sum the Numbers",
            prompt: "Write a program that uses a `for` loop to add up all the numbers from `0` to `4` using `range(5)`. Print the final sum.",
            initialCode: "# initialize your total here\n\n# write your loop here\n\n# print the total",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "total = 0\nfor i in range(5):\n    total = total + i\nprint(total)", expectedOutput: "10" }
            ],
            successMessage: "Perfect. This 'accumulator' pattern is used everywhere in computer science."
          }
        ]
      }
    },
    {
      id: "lesson-09",
      title: "Stage Milestone: Number Analysis Tool",
      time: "45 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "You will combine `for` loops, `range()`, state accumulators, `if` statements, and math operators to build a number analysis tool."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "You must loop through numbers from `1` up to `10` (inclusive). \n\nKeep a running `total` of only the **even** numbers. (Hint: use `num % 2 == 0` to check if even).\n\nIf the number is odd, use `continue` to skip it. \nAfter the loop finishes, print the final `total`."
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
            prompt: "Write the logic described above. Print only the final total. Remember the exclusivity of the `stop` boundary in `range()`!",
            initialCode: "# Write your analyzer here",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "total = 0\nfor i in range(1, 11):\n    if i % 2 != 0:\n        continue\n    total += i\nprint(total)", expectedOutput: "30" },
              { code: "total = 0\nfor i in range(1, 10):\n    if i % 2 != 0:\n        continue\n    total += i\nprint(total)", expectedOutput: "20" }
            ],
            successMessage: "Congratulations! You have completed Stage 04 - Loops & Iteration! Your logic successfully handled state across iterations."
          }
        ]
      }
    }
  ]
};
