import React, {useEffect, useRef} from "react";
import "../style/index.css";
import "../style/App.css";
import {foundWord} from "../logic/Solver";

//import 'bootstrap/dist/css/bootstrap.min.css';

interface GridProps {
    preview: string[];
    found: foundWord[];
}

function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
        ]
        : null;
}

function makeGrid(
    container: HTMLElement,
    arr: string[],
    foundWordArr: foundWord[]
) {
    // Clear the container
    container.innerHTML = "";
    let rows: string = arr.length.toString();
    let cols: string = arr[0].length.toString();
    let rowCount: number = 0;
    let colCount: number = 0;

    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let c = 0; c < parseInt(rows) * parseInt(cols); c++) {
        rowCount = Math.floor(c / parseInt(cols));
        colCount = c % parseInt(cols);
        let cell = document.createElement("div");
        cell.innerText = arr[rowCount][colCount];
        container.appendChild(cell).className = "grid-item";
        container.appendChild(cell).id = "cell" + c;
    }

    // Add ability to color cells based on foundWord
    // Index will be row * xPos + yPos

    for (let c = 0; c < foundWordArr.length; ++c) {
        if (foundWordArr[c].found) {
            for (let i = 0; i < foundWordArr[c].foundCoords.length; ++i) {
                let temp = foundWordArr[c].foundCoords[i];
                let index: number = temp.x * parseInt(cols) + temp.y;
                let div: HTMLElement | null = document.getElementById("cell" + index);
                // @ts-ignore
                div.style.background = "#" + foundWordArr[c].color;
                let rgb = hexToRgb(foundWordArr[c].color);
                if (rgb) {
                    const brightness = Math.round(
                        (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
                    );
                    // @ts-ignore
                    div.style.color = brightness > 125 ? "black" : "white";

                }
            }
        }
    }
}


export default function Grid({preview, found}: GridProps) {
    const containerRef = useRef(null);

    function isEmpty(found: foundWord[]) {
        if (found.length === 0) {
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        if (containerRef.current) {
            makeGrid(containerRef.current, preview, found);
        }
    }, [preview, found]);

    return (
        <div className="preview-backgorund">

            <div className="grid-block">
                <div ref={containerRef} id="container">
                </div>

            </div>

            <table style={{height: '200px', width: '150px'}}>

                <thead>
                {isEmpty(found) ?
                    "" : (<tr>
                        <th className="grid-border">Word</th>
                        <th className="grid-border">Color</th>
                    </tr>)
                }
                </thead>

                <tbody>
                {found.map((word, index) => (
                    <tr key={index} className="grid-border">
                        <td className="grid-border">{word.name}</td>
                        <td className="grid-border">
                            {word.found ?
                                <div style={{
                                    backgroundColor: `#${word.color}`,
                                    width: '20px',
                                    height: '20px',
                                    margin: 'auto'
                                }}></div>
                                : "NOT FOUND"
                            }
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
