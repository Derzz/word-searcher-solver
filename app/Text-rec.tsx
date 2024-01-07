import React, {useState,useEffect} from 'react';
import {createWorker} from 'tesseract.js';


export default function Textrec(props: any){
    
    const [file, setFile]=useState('');
    const [error, setError] = useState('');
    
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        else{
            //setFile(e.target.files[0]);
            //console.log(e.target.files[0]); 
            setFile(URL.createObjectURL(e.target.files[0]));
            console.log(e.target.files[0]);
        }
        
    }
    const processImage = async () => {
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
        console.log(file);
        if(file == ""){
            setError("Error: No image provided!");
            return;
        }

        const worker = await createWorker('eng');

        try {
            await (async () => {
                const {data: {text}} = await worker.recognize(file);
                console.log(text);
                props.setGrid(text);
                await worker.terminate();
            })();
            props.setError("Image recognition was successful. Please check for any errors and input your words.");
            props.setImageButton();
        }catch(e){
            // @ts-ignore
            console.log(e.message);
        }

        // try {
        //     Tesseract.recognize(
        //         file,
        //         'eng',
        //         {logger: m => console.log(m)}
        //     ).then(({data: {text}}) => {
        //         console.log(text);
        //     })
        // }catch(e){
        //     if (typeof e === "string") {
        //         e.toUpperCase() // works, `e` narrowed to string
        //     } else if (e instanceof Error) {
        //         e.message // works, `e` narrowed to Error
        //     }
        // }
    };
    //useEffect(() =>{
    //    processImage();
    //},[setFile])

    return(
        <div>
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Upload Grid Image Here!
                                </h3>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex flex-col">
                                <div>{error}</div>
                                <input type="file" onChange={onFileChange}/>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => props.setImageButton()}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => processImage()}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>

            
            
        </div>
    )
}