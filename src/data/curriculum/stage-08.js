export const stage08 = {
  id: "stage-08",
  number: "08",
  title: "Object-Oriented Programming",
  subtitle: "Modeling the World",
  description: "Learn how to bundle data and behavior together into custom objects, the foundation of modern software engineering.",
  estimatedTime: "3 Hours",
  lessonsCount: 7,
  difficulty: "Advanced",
  status: "completed",
  prerequisites: ["stage-07"],
  lessons: [
    {
      id: "lesson-01",
      title: "Why Do We Need Objects?",
      time: "15 Mins",
      exercises: "1 Exercise",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Disconnected Data Problem",
          content: "Up until now, you've used dictionaries to store data about a thing (like a `player` dict with `hp`), and functions to do things (like `take_damage(player)`).\n\nBut as programs get huge, keeping the data and the functions separate becomes very messy."
        },
        {
          id: "why",
          type: "concept",
          heading: "The Object Solution",
          content: "Object-Oriented Programming (OOP) solves this by bundling the **Data** (attributes like `hp`) and the **Actions** (methods like `take_damage()`) into a single, cohesive unit called an **Object**."
        },
        {
          id: "mental-model",
          type: "concept",
          heading: "Mental Model: The Robot",
          content: "Think of an Object as a Robot. It has its own internal state (battery level, current speed). And it has its own built-in buttons you can press to make it do things (`walk()`, `recharge()`). You don't manage its battery manually; you just press the `recharge()` button and the Robot handles its own internal data."
        }
      ],
      interactive: {
        type: "reasoning",
        heading: "Identifying Objects",
        prompt: "If you were building a racing game, which of the following would be best represented as an Object?",
        questions: [
          {
            question: "Select the best candidate for an Object:",
            options: [
              "The current speed of a car",
              "A function that calculates distance",
              "The Car itself (containing its speed, color, and a drive() function)"
            ],
            correctAnswer: "The Car itself (containing its speed, color, and a drive() function)"
          }
        ],
        successMessage: "Exactly. An Object models a real 'thing' in your system."
      }
    },
    {
      id: "lesson-02",
      title: "Classes vs Objects",
      time: "15 Mins",
      exercises: "2 Exercises",
      difficulty: "Beginner",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "The Blueprint and the House",
          content: "A **Class** is the blueprint. It defines what attributes and methods a thing *should* have. It is just a concept, not a real thing.\n\nAn **Object** (also called an **Instance**) is the actual, physical house built from that blueprint. You can build 100 houses (objects) from 1 blueprint (class)."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Defining a Class",
          content: "We use the `class` keyword. By convention, class names always start with a CapitalLetter.\n\n```python\n# 1. The Blueprint\nclass Dog:\n    pass # pass just means 'do nothing for now'\n\n# 2. Building the actual Objects\nmy_dog = Dog()\nyour_dog = Dog()\n```"
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Building from Blueprints",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the Output",
            prompt: "What will print out when we look at the objects?",
            initialCode: "class Robot:\n    pass\n\nr1 = Robot()\nr2 = Robot()\nprint(r1 == r2)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "False! They are built from the same blueprint, but they are two completely separate, unique objects in memory."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "Create a Blueprint",
            prompt: "Define a class called `Player`. Use `pass` inside it. Then, create an instance of `Player` and store it in a variable named `player_one`. Print `player_one`.",
            initialCode: "# Define class here\n\n# Create instance and print",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "class Player:\n    pass\nplayer_one = Player()\nprint(type(player_one).__name__)", expectedOutput: "Player" }
            ],
            successMessage: "Perfect. You have laid the foundation for OOP."
          }
        ]
      }
    },
    {
      id: "lesson-03",
      title: "The Constructor (__init__)",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Setting Up the Object",
          content: "When a new house is built, you usually want to paint it immediately. When an object is created, we usually want to set its initial data (like giving a player a name and starting HP).\n\nWe do this using a special function inside the class called `__init__` (short for initialize, and known as the Constructor)."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "The Self Keyword",
          content: "```python\nclass Dog:\n    # The constructor\n    def __init__(self, dog_name):\n        # 'self' refers to the specific dog being created\n        self.name = dog_name\n\n# Python automatically calls __init__ when we do this:\nmy_dog = Dog(\"Fido\")\nprint(my_dog.name)\n```"
        },
        {
          id: "mistake",
          type: "concept",
          heading: "What is 'self'?",
          content: "Every function inside a class MUST have `self` as its very first parameter. When Python calls `my_dog = Dog(\"Fido\")`, it secretly passes the new `my_dog` object into the `self` parameter so the function knows *which* dog to modify."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Initializing Data",
        steps: [
          {
            id: "step-1-mistake",
            type: "debug",
            title: "The Missing Self",
            prompt: "Run this broken code. It tries to save the name to the object, but forgets to use `self.name`.",
            initialCode: "class Cat:\n    def __init__(self, cat_name):\n        # This just creates a local variable that dies!\n        name = cat_name\n\nmy_cat = Cat(\"Whiskers\")\nprint(my_cat.name)",
            buttonText: "Run Broken Code",
            hints: [
              "AttributeError: 'Cat' object has no attribute 'name'",
              "To attach data permanently to the object, you must attach it to `self`.",
              "Change `name = cat_name` to `self.name = cat_name`."
            ],
            expectedError: "AttributeError",
            solutionCode: "class Cat:\n    def __init__(self, cat_name):\n        self.name = cat_name\n\nmy_cat = Cat(\"Whiskers\")\nprint(my_cat.name)",
            nextStepMessage: "Fixed! `self.variable_name` is how objects remember their own data."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "The Hero",
            prompt: "Create a class `Hero`. Its `__init__` should take `self` and `hero_name`. Inside, set `self.name` to `hero_name`, and set `self.level` to `1` (a default value). Create a hero named 'Arthur' and print their level.",
            initialCode: "# Write your class here\n\n# Create Arthur and print level",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "class Hero:\n    def __init__(self, hero_name):\n        self.name = hero_name\n        self.level = 1\nh = Hero(\"Arthur\")\nprint(h.level)", expectedOutput: "1" }
            ],
            successMessage: "Outstanding. You are now controlling the internal state of custom objects."
          }
        ]
      }
    },
    {
      id: "lesson-04",
      title: "Methods (Object Actions)",
      time: "20 Mins",
      exercises: "2 Exercises",
      difficulty: "Intermediate",
      status: "completed",
      sections: [
        {
          id: "what",
          type: "concept",
          heading: "Making Objects Do Things",
          content: "Data (`self.name`) is only half the story. Objects also need Actions. A function built *inside* a class is called a **Method**."
        },
        {
          id: "syntax",
          type: "concept",
          heading: "Writing Methods",
          content: "```python\nclass Dog:\n    def __init__(self, name):\n        self.name = name\n        \n    # A custom method\n    def bark(self):\n        print(f\"{self.name} says Woof!\")\n\nmy_dog = Dog(\"Fido\")\nmy_dog.bark() # Fido says Woof!\n```\nNotice that `bark` also takes `self`. That's how it knows it is *Fido* barking, and not some other dog."
        },
        {
          id: "advanced",
          type: "concept",
          heading: "Encapsulation (Pro Tip)",
          content: "While you *can* do `my_car.speed = 100` directly from the outside, it's safer to use methods like `my_car.accelerate()` to change data. This prevents outside code from accidentally setting `speed = -50`."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Adding Behaviors",
        steps: [
          {
            id: "step-1-predict",
            type: "predict",
            title: "Predict the State Change",
            prompt: "Methods can change the object's internal data safely. What will `car.speed` be at the end?",
            initialCode: "class Car:\n    def __init__(self):\n        self.speed = 0\n    \n    def accelerate(self):\n        self.speed += 10\n\nmy_car = Car()\nmy_car.accelerate()\nmy_car.accelerate()\nprint(my_car.speed)",
            buttonText: "Lock Prediction & Run Code",
            nextStepMessage: "It printed 20! The object successfully updated its own internal state."
          },
          {
            id: "step-2-exercise",
            type: "exercise",
            title: "The Bank Account",
            prompt: "Create a class `Account`. The `__init__` sets `self.balance = 0`. Create a method `deposit(self, amount)` that adds `amount` to the balance. Create an account, deposit `50`, then deposit `20`, then print the balance.",
            initialCode: "# Write your Account class here\n\n# Create account, deposit 50, deposit 20, print balance",
            buttonText: "Run Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "class Account:\n    def __init__(self):\n        self.balance = 0\n    def deposit(self, amount):\n        self.balance += amount\na = Account()\na.deposit(50)\na.deposit(20)\nprint(a.balance)", expectedOutput: "70" }
            ],
            successMessage: "Great job! This is the core of Object-Oriented Programming: data and methods working together."
          }
        ]
      }
    },
    {
      id: "lesson-05",
      title: "Stage Milestone: The RPG Character",
      time: "40 Mins",
      exercises: "1 Challenge",
      difficulty: "Advanced",
      status: "completed",
      sections: [
        {
          id: "intro",
          type: "concept",
          heading: "The Final Challenge",
          content: "You will build a fully functional RPG character object that manages its own health and damage."
        },
        {
          id: "requirements",
          type: "concept",
          heading: "Requirements",
          content: "1. Create a class `Character`.\n2. `__init__(self, name)` should set `self.name` and `self.hp = 100`.\n3. Create a method `take_damage(self, amount)`. It should subtract `amount` from `self.hp`.\n4. **CRITICAL:** Inside `take_damage`, if `self.hp` drops below 0, it should be set exactly to 0. (Hint: Just use an `if self.hp < 0:` statement).\n5. Create a character named 'Hero', make them take `150` damage, and print their `hp`."
        }
      ],
      interactive: {
        type: "code_journey",
        heading: "Milestone Execution",
        steps: [
          {
            id: "step-1-challenge",
            type: "exercise",
            title: "Implement the Character",
            prompt: "Write the class according to the requirements.",
            initialCode: "# Implement your Character class here",
            buttonText: "Run Milestone Tests",
            validation: {
              requireOutput: true,
              rejectEmpty: true
            },
            hiddenTests: [
              { code: "class Character:\n    def __init__(self, name):\n        self.name = name\n        self.hp = 100\n    def take_damage(self, amount):\n        self.hp -= amount\n        if self.hp < 0:\n            self.hp = 0\nc = Character(\"Hero\")\nc.take_damage(150)\nprint(c.hp)", expectedOutput: "0" },
              { code: "class Character:\n    def __init__(self, name):\n        self.name = name\n        self.hp = 100\n    def take_damage(self, amount):\n        self.hp -= amount\n        if self.hp < 0:\n            self.hp = 0\nc = Character(\"Hero\")\nc.take_damage(20)\nprint(c.hp)", expectedOutput: "80" }
            ],
            successMessage: "Congratulations! You have completed Stage 08 and conquered the basics of OOP. Your object successfully protected its own internal state from dropping into negative numbers."
          }
        ]
      }
    }
  ]
};
