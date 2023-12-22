// Store what coordinate to put
type coordinate = {
    x: number;
    y: number;
};

type foundWord = {
    name: string;
    color: string; // TODO Might need to change based on those
    foundCoords: Array<coordinate>;
}

const solver = (word: string, grid: Array<Array<string>>) => {
    let counter: number = 0;
    grid.forEach((row) => {
        row.forEach((symbol: string) => {
            if (symbol == word[counter]) {
                // TODO Found first letter, check eight directions
            }
        })
    });
}

const setUp = function (gridString: string, wordString: string) {
    // Return an Array of Array of foundWords
    let grid: Array<Array<string>> = gridString.split('\n').map(str => str.split(''));
    let words: Array<string> = wordString.split('\n');
    // TODO Perform check and check if grid is a rectangle, if it's irregular, return error

    words.forEach((str) => {
        solver(str, grid);
    });
    // 3. Implement logic of searching for words one by one(aka brute force), we'll deal with bigger algorithm later
}

export default setUp;