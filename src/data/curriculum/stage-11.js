export const stage11 = {
  id: "stage-11",
  number: "11",
  title: "Advanced Python Tricks",
  subtitle: "Writing Pythonic Code",
  description: "Learn how professional Python developers write fast, readable, and elegant code using advanced built-in features.",
  estimatedTime: "2 Hours",
  lessonsCount: 6,
  difficulty: "Advanced",
  status: "completed",
  prerequisites: ["stage-10"],
  lessons: [
    {
      id: "lesson-01",
      title: "List Comprehensions",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Pythonic Loop",
          content: "In Stage 04, you learned to use a `for` loop to build a new list (create an empty list, loop over data, `.append()` to the list).\n\n**List Comprehensions** allow you to do all of that in a single, elegant line of code. It is one of the most famous features of Python."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "The syntax reads almost like English: `[expression for item in iterable]`\n\n```python\n# The Old Way (3 lines)\nsquares = []\nfor x in range(5):\n    squares.append(x * x)\n\n# The Pythonic Way (1 line)\nsquares = [x * x for x in range(5)]\n```"
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Assembly Line",
          content: "Imagine a factory assembly line. `for x in range(5)` is the conveyor belt pulling items. `x * x` is the robotic arm stamping the item. The `[]` brackets are the box the finished items are immediately packed into."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Compressing Loops",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the List",
            prompt: "What will `names` contain at the end?",
            initialCode: "letters = [\"A\", \"B\", \"C\"]\nnames = [char + \"lice\" for char in letters]\nprint(names)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed ['Alice', 'Blice', 'Clice']! It appended 'lice' to every item in one line."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Double the Data",
            prompt: "Use a list comprehension to double every number in the `prices` list. Store the result in a variable called `doubled` and print it.",
            initialCode: "prices = [10, 20, 30]\n\n# write your list comprehension here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "prices = [10, 20, 30]\ndoubled = [p * 2 for p in prices]\nprint(doubled)", expectedOutput: "[20, 40, 60]" }
            ],
            successMessage: "Perfect! Your code is now much cleaner."
          }
        ]
      }
    },
    {
      id: "lesson-02",
      title: "Comprehensions with Conditions",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Filtering the Assembly Line",
          content: "You can add an `if` statement to a list comprehension to filter items. If the condition is False, the item is completely ignored and thrown away."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "The `if` condition always goes at the **very end** of the brackets:\n\n`[expression for item in iterable if condition]`\n\n```python\nnumbers = [1, 2, 3, 4, 5, 6]\n# Only keep the even numbers\nevens = [x for x in numbers if x % 2 == 0]\nprint(evens) # [2, 4, 6]\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Filtering Data",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "The Filter",
            prompt: "Run this code. It filters out any score less than 50. Notice how much code this saves compared to a standard loop with an `if` and an `.append()`.",
            initialCode: "scores = [45, 90, 20, 75, 10]\npassing = [score for score in scores if score >= 50]\nprint(passing)",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "This is how data analysts filter massive datasets in Python."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Filter the Vowels",
            prompt: "Create a list comprehension that loops through `word = \"PYTHON\"`. It should keep the character `c` ONLY IF `c` is not equal to `\"O\"`. Save it to `no_o` and print it. Remember: the `if` goes at the end!",
            initialCode: "word = \"PYTHON\"\n\n# write comprehension and print here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "word = \"PYTHON\"\nno_o = [c for c in word if c != \"O\"]\nprint(no_o)", expectedOutput: "['P', 'Y', 'T', 'H', 'N']" }
            ],
            successMessage: "Outstanding. You just did filtering and mapping in a single line."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "Enumerate",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Getting the Index",
          content: "When looping through a list `for item in items:`, you get the value, but you lose track of the index number (is this item 0, 1, or 2?).\n\nIf you need both the index AND the value, do NOT use `range(len(items))`. That is considered 'un-Pythonic'. Use the `enumerate()` function."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\ncolors = [\"Red\", \"Blue\", \"Green\"]\n\nfor index, color in enumerate(colors):\n    print(f\"{index}: {color}\")\n```\n`enumerate` automatically unpacks two variables on every lap: the counter (starts at 0) and the item itself."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Keeping Track",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "What will print on the SECOND lap of this loop?",
            initialCode: "top_players = [\"Alice\", \"Bob\", \"Charlie\"]\nfor i, name in enumerate(top_players):\n    print(f\"Rank {i+1}: {name}\")",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 'Rank 2: Bob'. The index `i` was 1, so `i+1` was 2."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Numbered List",
            prompt: "Use `enumerate` to loop over `groceries`. Print each item exactly like this: `0: Milk`, then `1: Bread`, etc.",
            initialCode: "groceries = [\"Milk\", \"Bread\", \"Eggs\"]\n\n# Loop and print using enumerate",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "groceries = [\"Milk\", \"Bread\", \"Eggs\"]\nfor idx, item in enumerate(groceries):\n    print(f\"{idx}: {item}\")", expectedOutput: "0: Milk\n1: Bread\n2: Eggs" }
            ],
            successMessage: "Great! `enumerate` is the standard way to track positions in Python."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Zip",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Combining Lists",
          content: "What if you have a list of names `[\"Alice\", \"Bob\"]` and a list of scores `[90, 85]`, and you want to loop over them *at the same time*? \n\nThe `zip()` function locks two (or more) lists together like a zipper on a jacket, pairing up the items at index 0, then index 1, etc."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "```python\nnames = [\"Alice\", \"Bob\"]\nscores = [90, 85]\n\nfor name, score in zip(names, scores):\n    print(f\"{name} scored {score}\")\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Zipping Data",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Mismatched Lengths",
            prompt: "Run this code. Notice that `names` has 3 items, but `jobs` only has 2. `zip` automatically stops when the *shortest* list runs out. It ignores 'Charlie'.",
            initialCode: "names = [\"Alice\", \"Bob\", \"Charlie\"]\njobs = [\"Dev\", \"Design\"]\n\nfor n, j in zip(names, jobs):\n    print(f\"{n} is a {j}\")",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "Zip safely handles mismatched lists by stopping early."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Inventory Matchup",
            prompt: "Use `zip` to loop through `items` and `prices` at the same time. Inside the loop, print `\"Item costs Price\"` (e.g., `\"Sword costs 50\"`).",
            initialCode: "items = [\"Sword\", \"Shield\", \"Potion\"]\nprices = [50, 20, 5]\n\n# Write your zip loop here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "items = [\"Sword\", \"Shield\", \"Potion\"]\nprices = [50, 20, 5]\nfor i, p in zip(items, prices):\n    print(f\"{i} costs {p}\")", expectedOutput: "Sword costs 50\nShield costs 20\nPotion costs 5" }
            ],
            successMessage: "Perfect. You just joined two datasets seamlessly."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "Stage Milestone: The Data Cleaner",
      time: "30 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "You will process raw data into a clean structure using zip and list comprehensions."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "You are given `raw_users = [\"alice\", \"bob\", \"admin\"]` and `raw_ages = [25, 30, 99]`.\n\n1. Use a list comprehension to create `clean_users` where every name is uppercase (using `.upper()`).\n2. Loop over `clean_users` and `raw_ages` simultaneously using `zip()`.\n3. In that loop, if the age is greater than or equal to `30`, print the user's uppercase name."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Cleaner",
            prompt: "Write the data cleaner logic exactly as described.",
            initialCode: "raw_users = [\"alice\", \"bob\", \"admin\"]\nraw_ages = [25, 30, 99]\n\n# 1. Create clean_users with a list comprehension\n\n\n# 2 & 3. Zip and loop, checking age",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "raw_users = [\"alice\", \"bob\", \"admin\"]\nraw_ages = [25, 30, 99]\nclean_users = [u.upper() for u in raw_users]\nfor u, a in zip(clean_users, raw_ages):\n    if a >= 30:\n        print(u)", expectedOutput: "BOB\nADMIN" },
              { code: "raw_users = [\"tim\", \"sue\"]\nraw_ages = [12, 14]\nclean_users = [u.upper() for u in raw_users]\nfor u, a in zip(clean_users, raw_ages):\n    if a >= 30:\n        print(u)", expectedOutput: "" }
            ],
            successMessage: "Congratulations! You have completed Stage 11 and write beautifully Pythonic code!"
          }
        ]
      }
    }
  ]
};
