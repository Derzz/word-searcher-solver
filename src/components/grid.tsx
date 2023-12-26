import React from 'react';

interface GridProps {
    preview: string[];
}

export default function Grid({preview}: GridProps) {
    return (
        <div>
            <div className="preview-bar">
                Preview
            </div>

            <div className="preview-backgorund">
                <div className="preview">
                    {preview.map((show, indexRow) => (
                        <p className='demo'
                           id={indexRow.toString()}> {show.split('').map((show2, indexCol) => (
                            <p id={indexCol.toString()}> {show2} </p>
                        ))} </p>

                    ))}
                </div>
            </div>
        </div>
    )
}