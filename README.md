# MDA_Memmory
Memory Game for MDA


Create a simple memory game. The game should consist of a single HTML page with associated JavaScript and CSS and should be runnable directly from the file system. On page load, the user should be presented with a 4x4 grid of blank squares. Each square has a number between 1 and 8 randomly assigned to it such that there are exactly two squares in the grid for each number. For example, there are two squares that have the number 1, two that have the number 2, etc. These numbers are hidden from the user. The game is played as follows:
-          When the user clicks a grid square, the number is displayed in the square.
-          When the user clicks another square and the new square has the same number as the previous one, both squares are marked to indicate a match and the user can no longer click on them. If the new square does not have the same number as the previous one, the numbers on both squares are displayed briefly before being hidden again. These mismatched squares can then be clicked again.
-          Once all squares can been matched, the user is notified that they have won the game.
 
Additional notes:
-          You are free to use third-party libraries or frameworks as you see fit (ex: jQuery, underscore, etc). However, the game must still be directly runnable from the file system.
-          The game should be visually appealing.