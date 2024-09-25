# Fireworks Game

An interactive web application where pressing random keys on the keyboard launches fireworks with various visual and sound effects. The game runs in sessions of configurable duration (default is 2 minutes) and is designed for a single player.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Customization](#customization)
- [License](#license)
- [Acknowledgments](#acknowledgments)


## Features

- **Interactive Gameplay**: Reacts to simultaneous key presses.
- **Visual Effects**: Displays fireworks with varying types, speeds, and colors.
- **Sound Effects**: Each firework launch is accompanied by a sound.
- **Timed Sessions**: Game sessions last for a configurable duration (default is 2 minutes).
- **Single Player**: Designed for individual play without scoring.

## Installation

1. **Clone the repository** (or download the ZIP file):

   ```bash
   git clone https://github.com/philbroz/fireworks-game.git

2. **Navigate to the project directory**
    cd fireworks-game

3. **Ensure the project structure is correct**

    ```plaintext
    fireworks-game/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── app.js
    └── sounds/
      └── fireworks.mp3

## Usage
1. Open index.html in a modern web browser:
   - You can double-click the index.html file.
   - Or serve the directory using a local web server for better performance.

2. Play the Game
   - Press random keys on your keyboard using both hands.
   - Each key press launches a firework on the screen.
   - Enjoy the visual and sound effects for the duration of the session.

3. Game Duration
   - The default game session lasts for 2 minutes.
   - The remaining time is displayed at the top-left corner of the screen.

4. End of Session:
   - When the time runs out, a "Game Over" message will appear.
   - To play again, refresh the page.

## Project Structure
    
    fireworks-game/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── app.js
    └── sounds/
      └── fireworks.mp3

   - index.html: The main HTML file that sets up the canvas and links to CSS and JS files.
   - css/styles.css: Contains the styling for the application.
   - js/app.js: Holds the game logic and animations.
   - sounds/fireworks.mp3: Sound effect played when a firework is launched.

 ## Technologies Used
   - HTML5 Canvas: For rendering fireworks animations.
   - CSS3: For styling the application.
   - JavaScript (ES6): For game logic and interactivity.

 ## Customization

 ### Changing Game Duration
 To modify the duration of the game session:

  1. Open js/app.js.
  2. Locate the line:
    ```bash
    let gameDuration = 120; // Duration in seconds
  3. Change 120 to your desired duration in seconds. 

 ### Adjusting Firework Effects

  - Number of Particles:
    In the explode() method of the Rocket class, change the 50 to increase or decrease the number of particles
    ```bash
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle(this.x, this.y, this.color));
    }

  - Particle Colors
   Modify the color in the createFirework() function to set specific colors:
     ```bash
     const color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';

 ### Using Custom Sounds
 To use your own sound effect:

1. Replace firework.mp3 in the sounds/ directory with your audio file.
2. Ensure the file is in .mp3 format or adjust the code for other formats.
3. Update the playSound() function in js/app.js if you change the file name:
    ```bash
    function playSound() {
        const audio = new Audio('sounds/fireworks.mp3');
        audio.play();
    }

 ## License
 MIT License

## Acknowledgments

- Inspiration: The game was created with my young son in mind, to provide him with an interactive and colorful experience.
- Resources
  - Sound effects obtained from https://pixabay.com/it/sound-effects/search/fireworks/.
  - Code snippets and ideas from various online tutorials on HTML5 Canvas animations.
