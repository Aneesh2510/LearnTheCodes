export const stage05 = {
  id: "stage-05",
  number: "05",
  title: "Strings & Text Processing",
  subtitle: "Manipulating Text",
  description: "Learn how to slice, modify, search, and analyze text data.",
  estimatedTime: "2 Hours",
  lessonsCount: 9,
  difficulty: "Intermediate",
  status: "completed",
  prerequisites: ["stage-04"],
  lessons: [
    {
      id: "lesson-01",
      title: "Strings Under the Hood",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "What is a String Really?",
          content: "You've used strings to print messages (`\"Hello\"`). But what is a string underneath? \n\nA string is a **sequence** of individual characters. 'Hello' isn't one solid block of text; it is five separate characters: 'H', 'e', 'l', 'l', 'o', glued together in order."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Sequence Matters",
          content: "Because a string is an ordered sequence, we can do powerful things: we can ask for the 3rd letter, we can cut the string in half, or we can check if a certain letter exists inside it."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Sequence Check",
        prompt: "If a string is just an ordered sequence, which of the following is technically a string?",
        questions: [
          {
            question: "Which of these is a string?",
            options: [
              "\"12345\"",
              "12345",
              "A variable named text"
            ],
            correctAnswer: "\"12345\""
          }
        ],
        successMessage: "Correct! Even numbers are strings if they are surrounded by quotes, because they are treated as a sequence of text characters, not math."
      }
    },
    {
      id: "lesson-02",
      title: "String Indexing",
      time: "15 Mins",
      exercises: "3 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Accessing Characters",
          content: "Since a string is a sequence, every character has a numbered position called an **index**."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Zero-Based Mailboxes",
          content: "Imagine the string as a row of mailboxes. \n\n**CRITICAL RULE:** Computer scientists start counting at ZERO. \n\nFor the string `\"PYTHON\"`:\n* Mailbox 0 holds 'P'\n* Mailbox 1 holds 'Y'\n* Mailbox 5 holds 'N'"
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax: Square Brackets",
          content: "To open a mailbox, use square brackets `[]` right after the string or variable.\n\n```python\nword = \"PYTHON\"\nprint(word[0]) # Prints 'P'\n```\nPython also has a cool trick: negative indexes count from the *end*. `word[-1]` gets the very last character ('N')."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Opening Mailboxes",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Index",
            prompt: "What will this output?",
            initialCode: "animal = \"TIGER\"\nprint(animal[2])",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 'G'! Remember, T is 0, I is 1, G is 2."
          },
          {
            id: "step-2-mistake",
            type: "debug",
            title: "Intentional Mistake: IndexError",
            prompt: "Run this code to see what happens when you try to open a mailbox that doesn't exist.",
            initialCode: "word = \"CAT\"\n# CAT has length 3 (indexes 0, 1, 2)\nprint(word[3])",
            buttonText: "Run Broken Code",
            hints: [
              "IndexError: string index out of range.",
              "The word 'CAT' only has mailboxes 0, 1, and 2.",
              "Change the index to 2 to get the 'T'."
            ],
            expectedError: "IndexError",
            solutionCode: "word = \"CAT\"\nprint(word[2])",
            nextStepMessage: "Fixed! You must never ask for an index equal to or greater than the length of the string. This is a very common bug."
          },
          {
            id: "step-3-exercise",
            type: "exercise",
            title: "First and Last",
            prompt: "Print the first character of `secret`, and then print the last character using a negative index.",
            initialCode: "secret = \"PASSWORD\"\n\n# print first char\n\n# print last char",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "secret = \"PASSWORD\"\nprint(secret[0])\nprint(secret[-1])", expectedOutput: "P\nD" }
            ],
            successMessage: "Perfect. Indexing is how we extract specific data."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "String Slicing",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Getting a Chunk",
          content: "Indexing gets a *single* character. But what if you want a whole chunk? For example, extracting just the area code from a phone number.\n\nThis is called **slicing**."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Slicing Syntax",
          content: "Inside the square brackets, we use a colon `:` to separate the start and end.\n\n`string[start : end]`\n\n**The tricky part:** Just like `range()`, it grabs characters from the `start` index up to, **BUT NOT INCLUDING**, the `end` index."
        },
        {
          id: "examples",
          type: "concept",
          heading: "Slicing Shortcuts",
          content: "```python\nword = \"AWESOME\"\n\nprint(word[0:3]) # 'AWE' (indexes 0, 1, 2)\nprint(word[:3])  # 'AWE' (omitting start means 'from the beginning')\nprint(word[3:])  # 'SOME' (omitting end means 'to the very end')\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Making Cuts",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Slice",
            prompt: "What will this output?",
            initialCode: "fruit = \"WATERMELON\"\nprint(fruit[5:10])",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 'MELON'. Indexes 5, 6, 7, 8, 9 were grabbed."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Extract the Year",
            prompt: "Use slicing to extract just the year '2024' from the date string, and print it.",
            initialCode: "date = \"2024-12-25\"\n\n# Extract and print the year here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "date = \"2024-12-25\"\nprint(date[0:4])", expectedOutput: "2024" },
              { code: "date = \"2024-12-25\"\nprint(date[:4])", expectedOutput: "2024" }
            ],
            successMessage: "Great job! Slicing is essential for parsing data files."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Immutability",
      time: "10 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Strings Are Set in Stone",
          content: "You can read a string's characters. But can you change one? \n\nNo. In Python, strings are **immutable**. This means once a string is created in memory, it can never be altered."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Stone Tablet",
          content: "A string is carved into a stone tablet. If you want to fix a typo, you cannot chisel out a single letter. You must carve a brand new stone tablet (a new string) and put the variable label on the new one."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Breaking the Stone",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "TypeError: Immutable",
            prompt: "We have a typo ('Jello' instead of 'Hello'). Run this code to see what happens when we try to change just the first index.",
            initialCode: "greeting = \"Jello\"\n# Trying to change 'J' to 'H'\ngreeting[0] = \"H\"\nprint(greeting)",
            buttonText: "Run Broken Code",
            hints: [
              "TypeError: 'str' object does not support item assignment.",
              "You cannot change part of a string.",
              "You must re-assign the entire variable: `greeting = \"Hello\"`"
            ],
            expectedError: "TypeError",
            solutionCode: "greeting = \"Hello\"\nprint(greeting)",
            nextStepMessage: "Exactly. You must overwrite the whole variable. You cannot mutate the string in place."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "String Methods",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Built-in Tools",
          content: "Since strings are so common, Python gives them built-in abilities called **methods**. A method is an action the string can perform on itself."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Dot Notation",
          content: "To use a method, type a dot `.` after the string, then the method name and parentheses `()`.\n\n*   `.upper()`: Returns a fully uppercase version.\n*   `.lower()`: Returns a fully lowercase version.\n*   `.replace(old, new)`: Replaces text.\n\n```python\nname = \"Alice\"\nprint(name.upper()) # ALICE\n```"
        },
        {
          id: "warning",
          type: "concept",
          heading: "They Return New Strings",
          content: "Remember immutability? `.upper()` does not change the original string. It creates a brand new uppercase string and hands it back to you. If you don't save or print it, it vanishes!"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Using Methods",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the State",
            prompt: "What will the SECOND print statement output? (Be careful!)",
            initialCode: "word = \"quiet\"\nprint(word.upper())\nprint(word)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 'quiet' in lowercase! The `word.upper()` generated a new string for the first print, but didn't modify the `word` variable."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Clean the Data",
            prompt: "You received messy data: `\"   hello world   \"`. Use the `.strip()` method (which removes spaces from the ends) to clean it, and store the result in a new variable `clean_data`. Then print it.",
            initialCode: "messy_data = \"   hello world   \"\n\n# clean it and print",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "messy_data = \"   hello world   \"\nclean_data = messy_data.strip()\nprint(clean_data)", expectedOutput: "hello world" }
            ],
            successMessage: "Perfect! `.strip()` is incredibly useful for cleaning user input."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "The IN Operator",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Checking for Substrings",
          content: "A very common task is checking if a smaller piece of text exists inside a larger piece of text. Is there an '@' in the email address? Does the sentence contain a bad word?"
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Syntax",
          content: "Python makes this wonderfully easy with the `in` keyword. It returns True or False.\n\n```python\ntext = \"The quick brown fox\"\nprint(\"fox\" in text) # True\nprint(\"cat\" in text) # False\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Membership Testing",
        steps: [
          {
            id: "step-1-experiment",
            type: "experiment",
            title: "Case Sensitivity",
            prompt: "Run this code. It says False, even though 'Fox' is there. Modify the `if` statement to check for 'fox' in lowercase so it works.",
            initialCode: "text = \"The quick brown fox\"\nif \"Fox\" in text:\n    print(\"Found it!\")\nelse:\n    print(\"Not found.\")",
            buttonText: "Run Modified Code",
            expectedOutputRequired: true,
            nextStepMessage: "The `in` operator is perfectly case-sensitive. You must match it exactly."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Email Validator",
            prompt: "Write an `if/else` block. Check if the `email` variable contains an `\"@\"`. If it does, print `\"Valid\"`. Otherwise print `\"Invalid\"`.",
            initialCode: "email = \"user#example.com\"\n\n# Write logic here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "email = \"user#example.com\"\nif \"@\" in email:\n    print(\"Valid\")\nelse:\n    print(\"Invalid\")", expectedOutput: "Invalid" },
              { code: "email = \"user@example.com\"\nif \"@\" in email:\n    print(\"Valid\")\nelse:\n    print(\"Invalid\")", expectedOutput: "Valid" }
            ],
            successMessage: "Great job! This is the foundation of data validation."
          }
        ]
      }
    },
    {
      id: "lesson-07",
      title: "Building Strings in a Loop",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Accumulating Text",
          content: "Remember the accumulator pattern from the Loops stage? Where we added numbers together in a loop? We can do the exact same thing to build strings character by character."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Necklace",
          content: "Imagine an empty string `\"\"` as an empty string of thread. Inside the loop, you take one bead (character) at a time and tie it onto the thread using `+` (or `+=` as a shortcut).\n\nBecause strings are immutable, technically you are creating a new necklace every time you add a bead, but the result is a longer string."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The += Shortcut",
          content: "Instead of writing `result = result + char`, programmers use the `+=` operator:\n\n```python\nresult = \"\"\nresult += \"A\"\n```\nThis means 'add to the existing variable'."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "String Assembly",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Build",
            prompt: "What will the final `result` be?",
            initialCode: "word = \"cat\"\nresult = \"\"\nfor char in word:\n    result += char + \"-\"\nprint(result)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 'c-a-t-'. The loop added each character followed by a hyphen."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "The Vowel Remover",
            prompt: "Create an empty string `clean_word = \"\"`. Loop through `messy = \"APPLE\"`. If the character is NOT equal to 'P', add it to `clean_word` using `+=`. Print the final `clean_word` outside the loop.",
            initialCode: "messy = \"APPLE\"\nclean_word = \"\"\n\n# Loop and build here",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "messy = \"APPLE\"\nclean_word = \"\"\nfor c in messy:\n    if c != \"P\":\n        clean_word += c\nprint(clean_word)", expectedOutput: "ALE" }
            ],
            successMessage: "Fantastic! This is a core algorithm pattern in computer science."
          }
        ]
      }
    },
    {
      id: "lesson-08",
      title: "Stage Milestone: Text Analyzer",
      time: "30 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "You will build a tool that processes a secret message to reveal the hidden code."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "You are given a string `transmission`. \n\n1. Loop through every character in the string.\n2. If the character is a lowercase `\"x\"`, completely ignore it (use `continue`).\n3. If the character is a capital `\"Z\"`, stop reading immediately (use `break`).\n4. For all other characters, add them to a `decoded` string variable.\n5. Print the final `decoded` string."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Decoder",
            prompt: "Write the logic described above to extract the secret. Be careful with your loop control keywords!",
            initialCode: "transmission = \"hxexlxlxoZworld\"\ndecoded = \"\"\n\n# Write your loop logic here",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "transmission = \"hxexlxlxoZworld\"\ndecoded = \"\"\nfor c in transmission:\n    if c == \"x\":\n        continue\n    if c == \"Z\":\n        break\n    decoded += c\nprint(decoded)", expectedOutput: "hello" },
              { code: "transmission = \"pxyxthonZrocks\"\ndecoded = \"\"\nfor c in transmission:\n    if c == \"x\":\n        continue\n    if c == \"Z\":\n        break\n    decoded += c\nprint(decoded)", expectedOutput: "python" },
              { code: "transmission = \"Zabxc\"\ndecoded = \"\"\nfor c in transmission:\n    if c == \"x\":\n        continue\n    if c == \"Z\":\n        break\n    decoded += c\nprint(decoded)", expectedOutput: "" },
              { code: "transmission = \"axbxc\"\ndecoded = \"\"\nfor c in transmission:\n    if c == \"x\":\n        continue\n    if c == \"Z\":\n        break\n    decoded += c\nprint(decoded)", expectedOutput: "abc" }
            ],
            successMessage: "Congratulations! You have completed Stage 05 and mastered text processing under strict edge cases!"
          }
        ]
      }
    }
  ]
};
