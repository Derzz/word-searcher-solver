/**
 * Coordinates are as followed:
 * EG:
 *
 * ABC
 * EFG
 * HIJ
 *
 * x goes down
 * y goes across so:
 *
 * x = 0, y = 0 gives A
 * x = 0, y = 2 gives C
 * x = 2, y = 0 gives H
 * x = 2, y = 2 gives J
 */
interface coordinate {
    x: number;
    y: number;
};

interface foundWord {
    name: string;
    color: string; // TODO Might need to change based on those
    found: boolean;
    foundCoords: Array<coordinate>;
}

// The GRID, accessible to all functions
let GRID: Array<Array<string>>;
let GRIDY: number;
let GRIDX: number;

/**
 * directionCheck checks if the given direction will contain the word needed to be found
 * @param word The word that needs to be found
 * @param analyze The coordinate in the grid to check word[counter]
 * @param direction The direction to search in
 * @param counter How many characters have been checked so far
 */
const directionCheck = (word: string, analyze: coordinate, direction: coordinate, counter: number): boolean => {
    console.log("Checking ", word, " at ", analyze, " with direction ", direction, " and counter ", counter);
    if (counter === word.length) return true;
    else if (analyze.x < 0 || analyze.y < 0 || analyze.x > GRIDX || analyze.y > GRIDY) return false;
    else if (word[counter] !== GRID[analyze.x][analyze.y]) return false;
    else return directionCheck(word, {x: analyze.x + direction.x, y: analyze.y + direction.y}, direction, counter + 1);
}

/**
 * solver determines if the word can be found in the grid
 * @param word The word to be found
 */
const solver = (word: string): foundWord => {
    let solved: foundWord = {name: word, color: "blue", found: false, foundCoords: new Array<coordinate>()};
    for (let indexX = 0; indexX < GRID.length; indexX++) {
        for (let indexY = 0; indexY < GRID[indexX].length; indexY++) {
            if (GRID[indexX][indexY] === word[0]) {
                console.log("Found first letter of ", word, "at", indexX, " ", indexY);
                for (let i = -1; i <= 1; ++i) {
                    for (let j = -1; j <= 1; ++j) {
                        if (i !== 0 && j !== 0 || indexX + i >= 0 || indexX + i <= GRIDX || indexY + j >= 0 || indexX + j <= GRIDY) {
                            if (directionCheck(word, {x: indexX + i, y: indexY + j}, {x: i, y: j}, 1)) {
                                console.log("Found ", word, " at ", indexX, " ", indexY, " with direction ", i, " ", j);
                                for (let num = 0; num < word.length; ++num) {
                                    solved.foundCoords.push({
                                        x: indexX + i * num,
                                        y: indexY + j * num
                                    });
                                    console.log("x:", indexX + i * num, "y: ", indexY + j * num);
                                }

                                solved.found = true;
                                return solved;
                            }
                        }
                    }
                }
            }
        }
    }
    return solved; // return solved if the word is not found
}

/**
 * setUp finds all the words in wordString in the array
 * @param gridString The string of words to be put in a grid
 * @param wordString The string of words to be found
 */


const setUp = function (gridString: string, wordString: string): Array<foundWord> {
    GRID = gridString.split('\n').map(str => str.split(''));
    let words: Array<string> = wordString.split('\n');

    GRIDY = gridString.split('\n')[0].length - 1;
    GRIDX = GRID.length - 1;
    // TODO Perform check and check if grid is a rectangle, if it's irregular, return error
    let foundWords: Array<foundWord> = new Array<foundWord>();
    words.forEach((str) => {
        foundWords.push(solver(str));
    });

    foundWords.forEach((value) => {
        console.log(value);
    });

    console.log("finish!");

    return foundWords;
}

export default setUp;
