// Store what coordinate to put
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
declare var GRID: Array<Array<string>>;

/**
 * directionCheck checks if the given direction will contain the word needed to be found
 * @param word The word that needs to be found
 * @param analyze The coordinate in the grid to check word[counter]
 * @param direction The direction to search in
 * @param counter How many characters have been checked so far
 */
const directionCheck = (word: string, analyze: coordinate, direction: coordinate, counter: number): boolean => {
    if (counter === word.length) return true;
    else if (word[counter] !== GRID[analyze.x][analyze.y]) return false;
    else return directionCheck(word, {x: analyze.x + direction.x, y: analyze.y + direction.y}, direction, counter + 1);
}

/**
 * solver determines if the word can be found in teh grid
 * @param word The word to be found
 */
const solver = (word: string): foundWord => {
    let solved: foundWord = {name: word, color: "blue", found: false, foundCoords: new Array<coordinate>()};
    GRID.forEach((row, indexX) => {
        row.forEach((symbol: string, indexY) => {
            if (symbol === word[0]) {
                for (let i = -1; i <= 1; ++i) {
                    for (let j = -1; j <= 1; ++j) {
                        if (i !== 0 && j !== 0)
                            if (directionCheck(word, {x: indexX + i, y: indexY + j}, {x: i, y: j}, 1)) {
                                for (let num = 0; num < directionCheck.length; ++i) solved.foundCoords.push({
                                    x: indexX + i * num,
                                    y: indexY + j * num
                                });
                                solved.found = true;
                            }
                    }
                }
            }
        });
    });
    return solved; // Means incomplete solve
}

/**
 * setUp finds all the words in wordString in the array
 * @param gridString The string of words to be put in a grid
 * @param wordString The string of words to be found
 */
const setUp = function (gridString: string, wordString: string): Array<foundWord> {
    GRID = gridString.split('\n').map(str => str.split(''));
    let words: Array<string> = wordString.split('\n');
    // TODO Perform check and check if grid is a rectangle, if it's irregular, return error
    let foundWords: Array<foundWord> = new Array<foundWord>();
    words.forEach((str) => {
        foundWords.push(solver(str));
    });

    foundWords.forEach((value) => {
        console.log(value);
    })

    return foundWords;
}

export default setUp;