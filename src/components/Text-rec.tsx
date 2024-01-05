import {useState,useEffect} from 'react';
import '../style/App.css';
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';


export default function Textrec(){
    
    const [file, setFile]=useState('');
    
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        else{
            //setFile(e.target.files[0]);
            //console.log(e.target.files[0]); 
            setFile(URL.createObjectURL(e.target.files[0]));
            console.log(e.target.files[0]);
        }
        
    }
    const processImage = () => {
            //const worker = await createWorker('eng');
            //await worker.load();
            //const ret = await worker.recognize(file);
            //console.log(ret.data.text);
            //await worker.terminate();
        
            //const cv = require('@u4/opencv4nodejs');
            //const img = cv.imread(file);
            //const gray = img.cvtColor(cv.COLOR_BGR2GRAY);
            ////const thresholded = gray.threshold(0, 255, cv.THRESH_BINARY + cv.THRESH_OTSU);
            //const buffer = thresholded.getData();
            Tesseract.recognize(
                file,
                'eng',
                { logger: m => console.log(m) }
              ).then(({ data: { text } }) => {
                console.log(text);
              })
    };
    //useEffect(() =>{
    //    processImage();
    //},[setFile])

    return(
        <div>
            <input type="file" onChange={onFileChange}>
            </input>
            
            <div>
                <input type="button" value='submit' onClick={processImage}>
                </input>
            </div>
            
            
        </div>
    )
}