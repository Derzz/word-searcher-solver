import React, {useEffect, useRef} from 'react';
import '../index.css'

interface GridProps {
    preview: string[];
}

function makeRows(container: HTMLElement, rows: string, cols: string) {
    // Clear the container
    container.innerHTML = '';

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (parseInt(rows) * parseInt(cols)); c++) {
        console.log(c)
        let cell = document.createElement("div");
        cell.innerText = (c + 1).toString();
        container.appendChild(cell).className = "grid-item";
    }
}

export default function Grid({preview}: GridProps) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            makeRows(containerRef.current, "5", "5");
        }
    }, []);

    return (
        <div ref={containerRef} id="container"/>
    );

    /*
    return (
        <div>
            <div className="preview-bar">
                Preview
            </div>

            <div className="preview-backgorund">
                <div className="preview">
                    {preview.map((show, indexRow) => (
                        <div className='demo'
                             id={indexRow.toString()}> {show.split('').map((show2, indexCol) => (
                            <div id={indexCol.toString()}> {show2} </div>
                        ))} </div>

                    ))}
                </div>
            </div>
        </div>
    )
     */
}