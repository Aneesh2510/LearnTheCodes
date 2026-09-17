export const stage06 = {
  id: "stage-06",
  number: "06",
  title: "Collections & Data Structures",
  subtitle: "Organizing Data",
  description: "Learn how to store, manage, and manipulate large groups of data using Lists, Tuples, Sets, and Dictionaries.",
  estimatedTime: "3 Hours",
  lessonsCount: 9,
  difficulty: "Intermediate",
  status: "completed",
  prerequisites: ["stage-04", "stage-05"],
  lessons: [
    {
      id: "lesson-01",
      title: "The Need for Collections",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Moving Beyond Single Variables",
          content: "So far, a variable has held a single piece of data (one number, one string). \n\nBut real programs need to manage thousands of pieces of data. A video game tracks 100 enemies. A school tracks 5,000 students. You cannot create a new variable name for every single enemy (`enemy_1`, `enemy_2`, etc.)."
        },
        {
          id: "why",
          type: "concept",
          heading: "The Solution: Collections",
          content: "A **Collection** is a single variable that holds *multiple* pieces of data. We group related data together so we can loop over it easily."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Identify the Problem",
        prompt: "Why is creating variables like `player1`, `player2`, and `player3` a terrible way to manage a multiplayer game?",
        questions: [
          {
            question: "What happens if 100 people join the game?",
            options: [
              "The game gets faster.",
              "You would have to manually write 100 variables, and your code couldn't handle the 101st person dynamically.",
              "Python automatically creates variables for you."
            ],
            correctAnswer: "You would have to manually write 100 variables, and your code couldn't handle the 101st person dynamically."
          }
        ],
        successMessage: "Exactly. Dynamic systems require dynamic data structures."
      }
    },
    {
      id: "lesson-02",
      title: "Lists",
      time: "20 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Python List",
          content: "A **List** is an ordered, changeable collection of items. \n\nJust like strings are sequences of characters, Lists are sequences of *anything* (numbers, strings, even other lists)."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Bookshelf",
          content: "Imagine a bookshelf. The books are kept in a specific order (Book 0, Book 1, Book 2). You can add a new book to the end, remove a book, or replace a book entirely."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax: Square Brackets",
          content: "Lists are created using square brackets `[]`, with items separated by commas.\n\n```python\ninventory = [\"Sword\", \"Shield\", \"Potion\"]\nprint(inventory[0]) # Prints 'Sword'\n```\nYou access items using the exact same zero-based indexing we used for strings."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Working with Lists",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Item",
            prompt: "What will this output?",
            initialCode: "high_scores = [1200, 950, 800, 750]\nprint(high_scores[1])",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 950, because 950 is at index 1 (the second item)."
          },
          {
            id: "step-2-experiment",
            type: "experiment",
            title: "Mutation",
            prompt: "Unlike strings, lists are mutable. You can change items! Run the code, then add a line to change index 2 to `\"Emerald\"` and print the list again.",
            initialCode: "gems = [\"Ruby\", \"Sapphire\", \"Dirt\"]\nprint(gems)",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "Awesome. You mutated the list in place without having to create a new list."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "List Length",
            prompt: "Use the built-in `len()` function to print the number of items in the `roster` list.",
            initialCode: "roster = [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"]\n\n# print the length of roster",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "roster = [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"]\nprint(len(roster))", expectedOutput: "4" }
            ],
            successMessage: "Great! `len()` works on strings, lists, and almost all collections."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "List Methods",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Adding and Removing",
          content: "Because lists are mutable, Python gives them built-in methods to change their contents dynamically."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Common Methods",
          content: "*   `.append(item)`: Adds an item to the very end of the list.\n*   `.insert(index, item)`: Injects an item at a specific position.\n*   `.remove(item)`: Finds the *first* occurrence of that value and deletes it.\n*   `.pop(index)`: Removes and returns the item at that index (defaults to the last item)."
        },
        {
          id: "mistake",
          type: "concept",
          heading: "The Append Trap",
          content: "`.append()` modifies the list *in-place*. It does NOT return a new list. \n\nIf you write `x = my_list.append(5)`, `x` will be `None`. You must just write `my_list.append(5)` on its own line. Do not treat `.append()` like math (`y = x + 1`)."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Managing Inventory",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "The Append Trap",
            prompt: "Run this code. It is trying to add an item to the list and save it in `new_cart`. See what happens.",
            initialCode: "cart = [\"Apple\", \"Banana\"]\nnew_cart = cart.append(\"Orange\")\nprint(new_cart)",
            buttonText: "Run Broken Code",
            hints: [
              "It printed 'None'!",
              "`.append()` doesn't give you a list back. It just modifies the existing one.",
              "Change line 2 to just `cart.append(\"Orange\")` and print `cart` on line 3."
            ],
            expectedOutputRequired: true,
            solutionCode: "cart = [\"Apple\", \"Banana\"]\ncart.append(\"Orange\")\nprint(cart)",
            nextStepMessage: "Fixed! Remember, list mutation methods change the object directly. They don't return values."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Task Manager",
            prompt: "You have a list of tasks. Use `.remove()` to delete `\"Dishes\"`. Then use `.append()` to add `\"Laundry\"`. Print the final list.",
            initialCode: "tasks = [\"Sweeping\", \"Dishes\", \"Dusting\"]\n\n# modify tasks here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "tasks = [\"Sweeping\", \"Dishes\", \"Dusting\"]\ntasks.remove(\"Dishes\")\ntasks.append(\"Laundry\")\nprint(tasks)", expectedOutput: "['Sweeping', 'Dusting', 'Laundry']" }
            ],
            successMessage: "Perfect. You are mastering dynamic lists."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Tuples",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Immutable List",
          content: "A **Tuple** is exactly like a list, except for one critical difference: **Tuples are immutable.** Once you create a tuple, you can NEVER change its contents."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Use Tuples?",
          content: "If they do the same thing as lists but are less flexible, why use them? \n1. **Safety:** If you have data that should *never* change (like the x/y coordinates of a city on a map, or RGB color values), a tuple prevents accidental bugs.\n2. **Performance:** Tuples are slightly faster and use less memory."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax: Parentheses",
          content: "Tuples are created using parentheses `()` instead of square brackets.\n\n```python\nrgb_red = (255, 0, 0)\nprint(rgb_red[0]) # 255\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Locked Data",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "TypeError: Immutable",
            prompt: "Run this code to see the error when trying to mutate a tuple.",
            initialCode: "coords = (10, 50)\n# Trying to change the x coordinate\ncoords[0] = 15",
            buttonText: "Run Broken Code",
            hints: [
              "TypeError: 'tuple' object does not support item assignment.",
              "If you need to change coordinates frequently, they should be a list `[]`, not a tuple `()`.",
              "Change the parentheses on line 1 to square brackets to fix the bug."
            ],
            expectedError: "TypeError",
            solutionCode: "coords = [10, 50]\ncoords[0] = 15\nprint(coords)",
            nextStepMessage: "Fixed! You changed the data structure to match the required behavior."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Unpacking Tuples",
            prompt: "Python lets you assign multiple variables from a tuple at once (called unpacking). Assign the values of `player_data` to three variables: `name`, `level`, and `hp`. Then print `hp`.",
            initialCode: "player_data = (\"Hero\", 45, 100)\n\n# unpack here (e.g. var1, var2, var3 = tuple_data)",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "player_data = (\"Hero\", 45, 100)\nname, level, hp = player_data\nprint(hp)", expectedOutput: "100" }
            ],
            successMessage: "Awesome. Unpacking is a very Pythonic way to handle tuples."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "Sets",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Unordered and Unique",
          content: "A **Set** is a collection that is completely un-ordered and requires every item to be **unique**. There are no duplicates in a set."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Bag of Marbles",
          content: "Imagine a bag. You throw marbles into it. There is no 'first' or 'last' marble (no indexes). If you try to throw a 'Red' marble in, but there is already a 'Red' marble in the bag, the new one just bounces off."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Use Sets?",
          content: "Sets are incredibly fast at checking if an item exists (`in` operator). They are also the fastest way to remove duplicates from a list."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax: Curly Braces",
          content: "Sets use curly braces `{}`.\n\n```python\nids = {101, 102, 103, 101}\nprint(ids) # {101, 102, 103} (The duplicate vanished)\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Managing Uniqueness",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "What will this code print?",
            initialCode: "colors = {\"Red\", \"Blue\", \"Red\", \"Green\"}\nprint(len(colors))",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 3! The second 'Red' was completely ignored."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Duplicate Removal",
            prompt: "You are given a list with duplicate votes. Convert the list to a `set` to automatically remove the duplicates, then convert it back to a `list` and print it.",
            initialCode: "votes = [\"A\", \"B\", \"A\", \"C\", \"B\"]\n\n# remove duplicates and print as a list",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "votes = [\"A\", \"B\", \"A\", \"C\", \"B\"]\nunique_votes = list(set(votes))\n# sorting to ensure consistent string output for tests\nprint(sorted(unique_votes))", expectedOutput: "['A', 'B', 'C']" }
            ],
            successMessage: "Perfect trick! `list(set(data))` is the standard Python way to remove duplicates."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "Dictionaries",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Key-Value Pairs",
          content: "Lists use numbers (indexes) to look up data. But what if you want to look up a phone number using a person's name? \n\nA **Dictionary** allows you to store data in **Key-Value** pairs."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Label Maker",
          content: "Imagine a wall of cubbies. Instead of writing numbers 0, 1, 2 on the cubbies, you use a label maker to stick custom labels on them ('health', 'speed', 'weapon').\n\nTo find what is inside, you just ask for the label (the **Key**)."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax: Curly Braces & Colons",
          content: "Dictionaries also use curly braces `{}`, but they contain a Key, a Colon `:`, and a Value.\n\n```python\nplayer = {\n    \"name\": \"Arthur\",\n    \"hp\": 100\n}\n\nprint(player[\"name\"]) # Prints 'Arthur'\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Label Lookups",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "Intentional Mistake: KeyError",
            prompt: "Run this code. It tries to access a key that doesn't exist.",
            initialCode: "book = {\n    \"title\": \"1984\",\n    \"author\": \"Orwell\"\n}\nprint(book[\"pages\"])",
            buttonText: "Run Broken Code",
            hints: [
              "KeyError: 'pages'",
              "You cannot ask for a label that isn't on the cubby.",
              "Change 'pages' to 'title' to fix the code."
            ],
            expectedError: "KeyError",
            solutionCode: "book = {\n    \"title\": \"1984\",\n    \"author\": \"Orwell\"\n}\nprint(book[\"title\"])",
            nextStepMessage: "Fixed! KeyErrors are the most common dictionary bug."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Adding to the Dictionary",
            prompt: "You can add new keys or update existing ones by just assigning a value: `dict[\"new_key\"] = value`. Add a key `\"speed\"` to the `enemy` dictionary with a value of `50`, then print the dictionary.",
            initialCode: "enemy = {\n    \"type\": \"Goblin\",\n    \"health\": 100\n}\n\n# Add speed and print",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "enemy = {\"type\": \"Goblin\", \"health\": 100}\nenemy[\"speed\"] = 50\n# check if key exists\nprint(enemy[\"speed\"])", expectedOutput: "50" }
            ],
            successMessage: "Great job! Dictionaries are perfect for grouping related properties."
          }
        ]
      }
    },
    {
      id: "lesson-07",
      title: "Iterating Over Dictionaries",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Looping Through Pairs",
          content: "You know how to loop over a list. But how do you loop over a dictionary which has *two* pieces of data per item (Key and Value)?"
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The .items() Method",
          content: "If you just do `for x in dict:`, Python will only give you the Keys.\nTo get both, you must use `.items()`.\n\n```python\nscores = {\"Alice\": 90, \"Bob\": 85}\n\nfor key, value in scores.items():\n    print(f\"{key} scored {value}\")\n```\nNotice the loop variable is literally `key, value` separated by a comma. It unpacks the pair automatically."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Unpacking the Dictionary",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "What will this output?",
            initialCode: "stock = {\"Apples\": 5, \"Pears\": 2}\nfor fruit, count in stock.items():\n    if count > 3:\n        print(fruit)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 'Apples'. The loop checked the value, but printed the key."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "The Price Raiser",
            prompt: "Loop through the `menu` dictionary. If the price of an item is less than `10`, add `2` to its price. (Hint: `menu[item] = price + 2`). Then print the `menu`.",
            initialCode: "menu = {\"Burger\": 8, \"Fries\": 4, \"Steak\": 20}\n\n# Write your loop here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "menu = {\"Burger\": 8, \"Fries\": 4, \"Steak\": 20}\nfor k, v in menu.items():\n    if v < 10:\n        menu[k] = v + 2\n# output formatted to avoid dict order issues in tests\nprint(menu[\"Burger\"], menu[\"Fries\"], menu[\"Steak\"])", expectedOutput: "10 6 20" }
            ],
            successMessage: "Perfect. You mutated dictionary values inside a loop."
          }
        ]
      }
    },
    {
      id: "lesson-08",
      title: "Combining Collections",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Lists of Dictionaries",
          content: "In the real world, you rarely have just one dictionary. You have a database of users. How do you store that? \n\nA List of Dictionaries."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Nesting Structures",
          content: "```python\nusers = [\n    {\"name\": \"Alice\", \"role\": \"Admin\"},\n    {\"name\": \"Bob\", \"role\": \"User\"}\n]\n\n# Getting Bob's role:\nprint(users[1][\"role\"])\n```\nYou first use a number index `[1]` to pick the dictionary out of the list, then a key `[\"role\"]` to pick the value out of the dictionary."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Data Mining",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Data Traversal",
            prompt: "Run this code. It loops over a list, and each `student` variable becomes a dictionary for that lap.",
            initialCode: "students = [\n    {\"name\": \"Tom\", \"grade\": \"C\"},\n    {\"name\": \"Sue\", \"grade\": \"A\"}\n]\n\nfor student in students:\n    print(f\"{student['name']} got an {student['grade']}\")",
            buttonText: "Run Code",
            expectedOutputRequired: true,
            nextStepMessage: "This is how JSON data from APIs is structured in Python."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Find the Admin",
            prompt: "Loop through the `users` list. If the user's `role` is `\"Admin\"`, print their `name`.",
            initialCode: "users = [\n    {\"name\": \"Aria\", \"role\": \"User\"},\n    {\"name\": \"Finn\", \"role\": \"User\"},\n    {\"name\": \"Zoe\", \"role\": \"Admin\"}\n]\n\n# Find and print the Admin",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "users = [\n    {\"name\": \"Aria\", \"role\": \"User\"},\n    {\"name\": \"Finn\", \"role\": \"User\"},\n    {\"name\": \"Zoe\", \"role\": \"Admin\"}\n]\nfor u in users:\n    if u[\"role\"] == \"Admin\":\n        print(u[\"name\"])", expectedOutput: "Zoe" }
            ],
            successMessage: "Outstanding! You are processing complex nested data structures."
          }
        ]
      }
    },
    {
      id: "lesson-09",
      title: "Stage Milestone: Student Record Manager",
      time: "40 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "You will process a small database of students to find the highest performer."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "You are given a list of dictionaries called `database`. Each dictionary has a `\"name\"` and a `\"score\"` (0-100).\n\n1. Notice `highest_score` is set to `-1`. Why? To ensure that even a score of `0` is strictly greater than our starting accumulator! This is a core algorithm concept.\n2. Loop through the `database`.\n3. If a student's `score` is strictly greater than `highest_score`:\n    * Update `highest_score` to be their score.\n    * Update `top_student` to be their name.\n4. After the loop, print the name of the top student."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Find the Valedictorian",
            prompt: "Write the logic described above.",
            initialCode: "database = [\n    {\"name\": \"James\", \"score\": 75},\n    {\"name\": \"Maya\", \"score\": 92},\n    {\"name\": \"Ken\", \"score\": 88}\n]\n\nhighest_score = -1\ntop_student = \"\"\n\n# Write logic here",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "database = [\n    {\"name\": \"James\", \"score\": 75},\n    {\"name\": \"Maya\", \"score\": 92},\n    {\"name\": \"Ken\", \"score\": 88}\n]\nhighest_score = -1\ntop_student = \"\"\nfor s in database:\n    if s[\"score\"] > highest_score:\n        highest_score = s[\"score\"]\n        top_student = s[\"name\"]\nprint(top_student)", expectedOutput: "Maya" },
              { code: "database = [\n    {\"name\": \"A\", \"score\": 0},\n    {\"name\": \"B\", \"score\": 0},\n    {\"name\": \"C\", \"score\": 0}\n]\nhighest_score = -1\ntop_student = \"\"\nfor s in database:\n    if s[\"score\"] > highest_score:\n        highest_score = s[\"score\"]\n        top_student = s[\"name\"]\nprint(top_student)", expectedOutput: "A" }
            ],
            successMessage: "Congratulations! You have completed Stage 06 and mastered Collections & Data Structures!"
          }
        ]
      }
    }
  ]
};
