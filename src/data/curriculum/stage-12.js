export const stage12 = {
  id: "stage-12",
  number: "12",
  title: "Capstone Project",
  subtitle: "Putting it all together",
  description: "Combine everything you've learned to build a fully functional Text-Based Adventure Game from scratch.",
  estimatedTime: "4 Hours",
  lessonsCount: 6,
  difficulty: "Advanced",
  status: "completed",
  prerequisites: ["stage-11"],
  lessons: [
    {
      id: "lesson-01",
      title: "The Architecture of an Engine",
      time: "15 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Escape the Dungeon",
          content: "You are going to build a Text-Based Adventure Game. \n\nThe player will start in a cell, navigate through rooms, find a key, and unlock the exit to win. If they make a wrong move, they might encounter a trap!"
        },
        {
          id: "why",
          type: "concept",
          heading: "Why Build a Game?",
          content: "Games are the ultimate test of programming fundamentals. You will combine everything you've learned:\n*   **Variables & Strings:** To track names and parse commands.\n*   **While Loops:** To keep the game alive.\n*   **If/Else Logic:** To resolve actions.\n*   **Dictionaries:** To map out the interconnected rooms.\n*   **Classes:** To encapsulate the Player's state and behaviors.\n*   **Error Handling:** To deal with bad user input gracefully."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The REPL Architecture",
          content: "Professional software relies on architecture. We will use the **REPL (Read-Eval-Print Loop)** pattern:\n1. **State (Data):** The `Player` and the `World` Map exist in memory.\n2. **Read (Input):** Ask the user for a command and clean it.\n3. **Eval (Engine):** The logic engine validates the command and mutates the State.\n4. **Print (Output):** Show the user what happened.\n5. **Loop:** Repeat until the player wins or dies."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Architectural Planning",
        prompt: "If a player types '  go NORTH  ', which architectural step is responsible for cleaning this string into a usable command like 'north'?",
        questions: [
          {
            question: "Which component handles string cleaning?",
            options: [
              "The State (Data)",
              "The Read (Input Parser)",
              "The Eval (Logic Engine)"
            ],
            correctAnswer: "The Read (Input Parser)"
          }
        ],
        successMessage: "Correct! The parser sanitizes the input before the logic engine ever sees it."
      }
    },
    {
      id: "lesson-02",
      title: "Modeling the Player",
      time: "25 Mins",
      exercises: "1 Exercise",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Player State",
          content: "First, we must define our hero. They need a location in the dungeon and an inventory to hold items (like a key). \n\nWe will use a `Player` class to encapsulate this data."
        },
        {
          id: "why",
          type: "concept",
          heading: "Why a Class? Why not a Dictionary?",
          content: "We *could* store the player as a dictionary: `player = {'location': 'Cell', 'inventory': []}`. \n\nHowever, a **Class** is better here because a player has *behaviors* (methods). They don't just hold static data; they *do* things, like `add_item()` or `take_damage()`. Classes bundle data (state) and behavior (methods) together."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The Initial State",
          content: "```python\nclass Player:\n    def __init__(self):\n        self.location = \"Cell\"\n        self.inventory = []\n```\nEvery new game instantiates a fresh `Player` starting in the Cell."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Building the Hero",
        steps: [
          {
            id: "step-1-exercise",
            type: "exercise",
            title: "Player Methods",
            prompt: "Create the `Player` class. Add a method `add_item(self, item)` that appends the item to `self.inventory`. Create a player named `hero`, add `\"Rusty Key\"` to their inventory, and print the inventory.",
            initialCode: "class Player:\n    def __init__(self):\n        self.location = \"Cell\"\n        self.inventory = []\n        \n    # Add the add_item method here\n\n# Create 'hero', add 'Rusty Key', and print inventory",
            buttonText: "Run Code",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "class Player:\n    def __init__(self):\n        self.location = \"Cell\"\n        self.inventory = []\n    def add_item(self, item):\n        self.inventory.append(item)\nhero = Player()\nhero.add_item(\"Rusty Key\")\nprint(hero.inventory)", expectedOutput: "['Rusty Key']" },
              { code: "class Player:\n    def __init__(self):\n        self.location = \"Cell\"\n        self.inventory = []\n    def add_item(self, item):\n        self.inventory.append(item)\nhero = Player()\nhero.add_item(\"Sword\")\nhero.add_item(\"Shield\")\nprint(len(hero.inventory))", expectedOutput: "2" }
            ],
            successMessage: "Great job! The data model for our hero is ready to hold state and perform actions."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "Building the World Map",
      time: "25 Mins",
      exercises: "2 Exercises",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Dungeon Map",
          content: "How do we represent a map in code? We use a **Nested Dictionary**! \n\nThe Key is the name of the room. The Value is *another* dictionary containing the room's description and its exits."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Nodes and Edges",
          content: "Think of the map as a graph. \n\n```python\nworld = {\n    \"Cell\": {\n        \"desc\": \"A cold, dark prison cell.\",\n        \"north\": \"Hallway\"\n    },\n    \"Hallway\": {\n        \"desc\": \"A long stone corridor.\",\n        \"south\": \"Cell\"\n    }\n}\n```\nIf the player is in the `'Cell'`, we access `world['Cell']['north']` to find out where moving north takes them."
        },
        {
          id: "edge-cases",
          type: "concept",
          heading: "The Danger of Blind Lookups",
          content: "What happens if a player types 'west' in the Cell? The `'Cell'` dictionary has no `'west'` key.\n\nIf we blindly execute `new_room = world['Cell']['west']`, Python will crash with a `KeyError`. We must validate exits before using them."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Safe Map Traversal",
        steps: [
          {
            id: "step-1-predict",
            type: "debug",
            title: "Observe the Crash (Deliberate Mistake)",
            prompt: "Run the code below. We blindly try to move 'west' from the Cell. Observe the `KeyError`, which would instantly crash your game.",
            initialCode: "world = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}}\ncurrent_room = \"Cell\"\n\n# Blindly looking up an exit that doesn't exist\nnew_room = world[current_room][\"west\"]\nprint(new_room)",
            buttonText: "Run and Crash",
            hints: [
              "KeyError: 'west'. The key 'west' does not exist in the Cell dictionary.",
              "Before accessing a key, always check if it exists using the `in` operator.",
              "Use `if 'west' in world[current_room]:` before trying to access it."
            ],
            expectedError: "KeyError",
            solutionCode: "world = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}}\ncurrent_room = \"Cell\"\ndirection = \"west\"\nroom_data = world[current_room]\nif direction in room_data:\n    print(room_data[direction])\nelse:\n    print(\"You cannot go that way.\")",
            nextStepMessage: "Boom! A KeyError. This is why defensive programming is crucial in game logic."
          },
          {
            id: "step-2-fix",
            type: "exercise",
            title: "Defensive Traversal",
            prompt: "Let's fix it. Use the `in` operator to check if `direction` exists as a key inside `world[current_room]`. If it does, print the new room name. If it doesn't, print `'You cannot go that way.'`",
            initialCode: "world = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}}\ncurrent_room = \"Cell\"\ndirection = \"west\"\n\nroom_data = world[current_room]\n\n# Add an if/else block using the 'in' operator to check room_data\n",
            buttonText: "Run Fix",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "world = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}}\ncurrent_room = \"Cell\"\ndirection = \"west\"\nroom_data = world[current_room]\nif direction in room_data:\n    print(room_data[direction])\nelse:\n    print('You cannot go that way.')", expectedOutput: "You cannot go that way." },
              { code: "world = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}}\ncurrent_room = \"Cell\"\ndirection = \"north\"\nroom_data = world[current_room]\nif direction in room_data:\n    print(room_data[direction])\nelse:\n    print('You cannot go that way.')", expectedOutput: "Hallway" }
            ],
            successMessage: "Excellent! You prevented the crash. The logic engine must always validate user requests."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Parsing Input",
      time: "20 Mins",
      exercises: "1 Exercise",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Handling Human Error",
          content: "Users are unpredictable. When prompted to type a direction, they might type 'NORTH', ' north ', or '  nOrTh  '. \n\nBefore your logic engine processes the command, you MUST sanitize it."
        },
        {
          id: "how",
          type: "concept",
          heading: "String Cleaning",
          content: "We use string methods we learned in Stage 05:\n1. `.strip()` removes whitespace from the ends.\n2. `.lower()` makes everything lowercase.\n\n`clean_cmd = raw_cmd.strip().lower()`"
        },
        {
          id: "mistakes",
          type: "concept",
          heading: "Common Mistake: Immutability",
          content: "Remember: Strings in Python are **immutable**. Calling `cmd.lower()` does NOT modify the original `cmd` variable automatically. It returns a brand new string. You must assign the result back to a variable."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Sanitizing Commands",
        steps: [
          {
            id: "step-1-debug",
            type: "debug",
            title: "The Immutability Bug",
            prompt: "The function below attempts to clean the input, but it has a bug because strings are immutable. Fix the function so it actually returns `'north'` instead of `'  nOrTh  '`.",
            initialCode: "def clean_input(cmd):\n    cmd.strip()\n    cmd.lower()\n    return cmd\n\nprint(clean_input(\"  nOrTh  \"))",
            buttonText: "Debug Code",
            hints: [
              "The function prints '  nOrTh  ' instead of 'north'.",
              "String methods return NEW strings. The original `cmd` is never modified.",
              "Either chain them: `return cmd.strip().lower()` or reassign: `cmd = cmd.strip()` then `cmd = cmd.lower()`."
            ],
            solutionCode: "def clean_input(cmd):\n    return cmd.strip().lower()\n\nprint(clean_input(\"  nOrTh  \"))",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "def clean_input(cmd):\n    return cmd.strip().lower()\nprint(clean_input(\"  nOrTh  \"))", expectedOutput: "north" },
              { code: "def clean_input(cmd):\n    return cmd.strip().lower()\nprint(clean_input(\"QUIT\"))", expectedOutput: "quit" }
            ],
            successMessage: "Perfect! You successfully reassigned or chained the methods to capture the mutated string."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "The Game Loop (REPL)",
      time: "20 Mins",
      exercises: "1 Exercise",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Heartbeat",
          content: "Every game runs on a **Game Loop**. It is a continuous loop that waits for input, updates the world state, and prints the result until a termination condition is met (like winning, or typing 'quit')."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The While Loop Pattern",
          content: "```python\ngame_over = False\n\nwhile not game_over:\n    command = input(\"What next? \")\n    \n    if command == \"quit\":\n        game_over = True\n        print(\"Goodbye!\")\n    else:\n        print(\"Evaluating command...\")\n```\nThis is the core loop that binds all our previous components together."
        },
        {
          id: "edge-case",
          type: "concept",
          heading: "Why break vs. Flag?",
          content: "You can exit a loop two ways:\n1. **Flag variable:** Set `game_over = True` — the loop naturally ends at the top.\n2. **`break` keyword:** Immediately exits the loop mid-iteration.\n\nBoth are valid. `break` is often cleaner when you need to stop *instantly* without running leftover code in the loop body."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Controlling the Loop",
        steps: [
          {
            id: "step-1-exercise",
            type: "exercise",
            title: "Simulate the Loop",
            prompt: "Instead of actual `input()` (which halts our automated tests), we will pop commands from a list to simulate user turns. Write the `while` loop logic: read the next command using `user_inputs.pop(0)`, break if it is `'quit'` (after printing `\"Exiting\"`), or print `f\"Executing {cmd}\"` otherwise.",
            initialCode: "user_inputs = [\"look\", \"north\", \"quit\", \"south\"]\n\n# Loop as long as there are inputs left\nwhile len(user_inputs) > 0:\n    # 1. Pop the first item from the list into a variable 'cmd'\n    #    (Hint: user_inputs.pop(0) removes and returns the first item)\n    # 2. Check if cmd is \"quit\". If so, print \"Exiting\" and break.\n    # 3. Otherwise, print f\"Executing {cmd}\"\n    pass",
            buttonText: "Run Simulation",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "user_inputs = [\"look\", \"north\", \"quit\", \"south\"]\nwhile len(user_inputs) > 0:\n    cmd = user_inputs.pop(0)\n    if cmd == \"quit\":\n        print(\"Exiting\")\n        break\n    print(f\"Executing {cmd}\")", expectedOutput: "Executing look\nExecuting north\nExiting" },
              { code: "user_inputs = [\"quit\"]\nwhile len(user_inputs) > 0:\n    cmd = user_inputs.pop(0)\n    if cmd == \"quit\":\n        print(\"Exiting\")\n        break\n    print(f\"Executing {cmd}\")", expectedOutput: "Exiting" }
            ],
            successMessage: "Great! You understand how a loop processes sequential commands and can terminate based on state."
          }
        ]
      }
    },
    {
      id: "lesson-06",
      title: "Capstone: The Logic Engine",
      time: "60 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Ultimate Test",
          content: "You will now write the core logic engine: `process_turn(player, world, command)`. \n\nThis function is the 'Eval' in our REPL. It receives the sanitized command, checks the map, mutates the player's location if valid, and returns a text response for the 'Print' step."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Engine Requirements",
          content: "The function must return a string based on these rules:\n\n1. **Command is `\"look\"`**: Return the `desc` of the player's current room.\n2. **Command is ANY direction (e.g., 'north', 'south', 'east', 'up')**:\n   - Check if that command exists as an exit key in the current room's dictionary.\n   - If YES: Update `player.location` to the new room, and return `f\"You move {command}.\"`\n   - If NO: Return `\"You cannot go that way.\"`\n3. **Any other command**: Return `\"Invalid command.\"`\n\n*Hint: Do not hardcode `elif command == \"north\":`. Your engine must be dynamic and work for any direction defined in the map!*"
        },
        {
          id: "strategy",
          type: "concept",
          heading: "Strategy Hint: The 'desc' Key Trap",
          content: "Every room dictionary has a `\"desc\"` key AND direction keys like `\"north\"`. If you simply check `if command in room_data:`, a player who types `\"desc\"` would match!\n\nYou must exclude `\"desc\"` from your direction check. One clean way: `if command in room_data and command != \"desc\":`"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Capstone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Engine",
            prompt: "Write the `process_turn` logic exactly as described. Remember: check for 'look' first, then check if the command is a valid exit in the current room (excluding 'desc'), then handle invalid directions, and finally handle truly unknown commands.",
            initialCode: "class Player:\n    def __init__(self):\n        self.location = \"Cell\"\n\nworld = {\n    \"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"},\n    \"Hallway\": {\"desc\": \"A long corridor.\", \"south\": \"Cell\", \"east\": \"Armory\"},\n    \"Armory\": {\"desc\": \"A room full of rusty swords.\", \"west\": \"Hallway\"}\n}\n\ndef process_turn(player, world, command):\n    current_room_data = world[player.location]\n    \n    if command == \"look\":\n        return current_room_data[\"desc\"]\n    \n    # Write logic to handle generic directions and invalid commands here.\n    # Hint: Use the 'in' operator!\n    \n    return \"Invalid command.\"\n\n# Test your engine manually\np1 = Player()\nprint(process_turn(p1, world, \"look\"))  # Expected: A dark cell.\nprint(process_turn(p1, world, \"north\")) # Expected: You move north.",
            buttonText: "Run Capstone Tests",
            validation: {
              requireOutput: false,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "class Player:\n    def __init__(self):\n        self.location = \"Cell\"\nworld = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}, \"Hallway\": {\"desc\": \"A long corridor.\", \"south\": \"Cell\", \"east\": \"Armory\"}, \"Armory\": {\"desc\": \"A room full of rusty swords.\", \"west\": \"Hallway\"}}\ndef process_turn(p, w, c):\n    rm = w[p.location]\n    if c == \"look\": return rm[\"desc\"]\n    elif c in rm and c != \"desc\":\n        p.location = rm[c]\n        return f\"You move {c}.\"\n    elif c in [\"north\", \"south\", \"east\", \"west\"]:\n        return \"You cannot go that way.\"\n    else:\n        return \"Invalid command.\"\np1 = Player()\nprint(process_turn(p1, world, \"look\"))", expectedOutput: "A dark cell." },
              { code: "class Player:\n    def __init__(self):\n        self.location = \"Cell\"\nworld = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}, \"Hallway\": {\"desc\": \"A long corridor.\", \"south\": \"Cell\", \"east\": \"Armory\"}, \"Armory\": {\"desc\": \"A room full of rusty swords.\", \"west\": \"Hallway\"}}\ndef process_turn(p, w, c):\n    rm = w[p.location]\n    if c == \"look\": return rm[\"desc\"]\n    elif c in rm and c != \"desc\":\n        p.location = rm[c]\n        return f\"You move {c}.\"\n    elif c in [\"north\", \"south\", \"east\", \"west\"]:\n        return \"You cannot go that way.\"\n    else:\n        return \"Invalid command.\"\np1 = Player()\nprint(process_turn(p1, world, \"north\"))\nprint(p1.location)", expectedOutput: "You move north.\nHallway" },
              { code: "class Player:\n    def __init__(self):\n        self.location = \"Hallway\"\nworld = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}, \"Hallway\": {\"desc\": \"A long corridor.\", \"south\": \"Cell\", \"east\": \"Armory\"}, \"Armory\": {\"desc\": \"A room full of rusty swords.\", \"west\": \"Hallway\"}}\ndef process_turn(p, w, c):\n    rm = w[p.location]\n    if c == \"look\": return rm[\"desc\"]\n    elif c in rm and c != \"desc\":\n        p.location = rm[c]\n        return f\"You move {c}.\"\n    elif c in [\"north\", \"south\", \"east\", \"west\"]:\n        return \"You cannot go that way.\"\n    else:\n        return \"Invalid command.\"\np1 = Player()\nprint(process_turn(p1, world, \"east\"))\nprint(p1.location)", expectedOutput: "You move east.\nArmory" },
              { code: "class Player:\n    def __init__(self):\n        self.location = \"Hallway\"\nworld = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}, \"Hallway\": {\"desc\": \"A long corridor.\", \"south\": \"Cell\", \"east\": \"Armory\"}, \"Armory\": {\"desc\": \"A room full of rusty swords.\", \"west\": \"Hallway\"}}\ndef process_turn(p, w, c):\n    rm = w[p.location]\n    if c == \"look\": return rm[\"desc\"]\n    elif c in rm and c != \"desc\":\n        p.location = rm[c]\n        return f\"You move {c}.\"\n    elif c in [\"north\", \"south\", \"east\", \"west\"]:\n        return \"You cannot go that way.\"\n    else:\n        return \"Invalid command.\"\np1 = Player()\nprint(process_turn(p1, world, \"west\"))", expectedOutput: "You cannot go that way." },
              { code: "class Player:\n    def __init__(self):\n        self.location = \"Cell\"\nworld = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}, \"Hallway\": {\"desc\": \"A long corridor.\", \"south\": \"Cell\", \"east\": \"Armory\"}, \"Armory\": {\"desc\": \"A room full of rusty swords.\", \"west\": \"Hallway\"}}\ndef process_turn(p, w, c):\n    rm = w[p.location]\n    if c == \"look\": return rm[\"desc\"]\n    elif c in rm and c != \"desc\":\n        p.location = rm[c]\n        return f\"You move {c}.\"\n    elif c in [\"north\", \"south\", \"east\", \"west\"]:\n        return \"You cannot go that way.\"\n    else:\n        return \"Invalid command.\"\np1 = Player()\nprint(process_turn(p1, world, \"jump\"))", expectedOutput: "Invalid command." },
              { code: "class Player:\n    def __init__(self):\n        self.location = \"Cell\"\nworld = {\"Cell\": {\"desc\": \"A dark cell.\", \"north\": \"Hallway\"}, \"Hallway\": {\"desc\": \"A long corridor.\", \"south\": \"Cell\", \"east\": \"Armory\"}, \"Armory\": {\"desc\": \"A room full of rusty swords.\", \"west\": \"Hallway\"}}\ndef process_turn(p, w, c):\n    rm = w[p.location]\n    if c == \"look\": return rm[\"desc\"]\n    elif c in rm and c != \"desc\":\n        p.location = rm[c]\n        return f\"You move {c}.\"\n    elif c in [\"north\", \"south\", \"east\", \"west\"]:\n        return \"You cannot go that way.\"\n    else:\n        return \"Invalid command.\"\np1 = Player()\nprint(process_turn(p1, world, \"desc\"))", expectedOutput: "Invalid command." }
            ],
            successMessage: "YOU DID IT! You have built a fully functional, dynamic text adventure engine. Congratulations on mastering Python Foundations!"
          }
        ]
      }
    }
  ]
};
