// import CalWrapper from "../CalWraaper/CalWrapper";

import { useState } from "react";
import CalWraaper from "../CalWraaper/CalWrapper";
import "./Cal.css";

// const Cal = () => {
//     const allBtArr = [
//        {value:0,btFun:()=>{console.log(0)}},
//        {value:1,btFun:()=>{console.log(1)}},
//        {value:2,btFun:()=>{console.log(2)}},
//        {value:3,btFun:()=>{console.log(3)}},
//     ];

//     return(
//         <div>
//             <CalWrapper allBtArr ={allBtArr}/>
//         </div>
//     )
// }

// export default Cal;

const Cal = () =>{

    const[inputVal1,setInputVal1] = useState(0);
    const[operationValue, setOperationValue] = useState(0);
    const[currentOperation, setCurrentOperation] = useState("");

    const allBtArr = [
        {value:0, btFun: () => {
            
            setInputVal1((prevValue)=> parseInt(prevValue.toString() + 0))  //setInputVal1(parseInt(newValue));
        }},
        {value:1, btFun: () => {
            const newValue = inputVal1.toString() + 1;  console.log("inputVal1",inputVal1);
            setInputVal1(parseInt(newValue));
        }},
        {value:2, btFun: () => {
            const newValue = inputVal1.toString() + 2;
            setInputVal1(parseInt(newValue));
        }},
        {value:3, btFun: () => {
            const newValue = inputVal1.toString() + 3;
            setInputVal1(parseInt(newValue));
        }},
        {value:4, btFun: () => {
            const newValue = inputVal1.toString() + 4;
            setInputVal1(parseInt(newValue));
        }},
        {value:5, btFun: () => {
            const newValue = inputVal1.toString() + 5;
            setInputVal1(parseInt(newValue));
        }},
        {value:6, btFun: () => {
            const newValue = inputVal1.toString() + 6;
            setInputVal1(parseInt(newValue));
        }},
        {value:7, btFun: () => {
            const newValue = inputVal1.toString() + 7;
            setInputVal1(parseInt(newValue));
        }},
        {value:8, btFun: () => {
            const newValue = inputVal1.toString() + 8;
            setInputVal1(parseInt(newValue));
        }},
        {value:9, btFun: () => {
            const newValue = inputVal1.toString() + 9;
            setInputVal1(parseInt(newValue));
        }}
    ];

    const operationArr = [
        
        {
            value:'+', 
            btFun: () => {
            setCurrentOperation("+");     
            setOperationValue(inputVal1);    
            setInputVal1(0)               
            }
        },
        {
            value:'-', 
            btFun: () => {
            setCurrentOperation("-");    
            setOperationValue(inputVal1);    
            setInputVal1(0) 
            }
        },
        {
            value:'/', 
            btFun: () => {
            setCurrentOperation("/");    
            setOperationValue(inputVal1);    
            setInputVal1(0) 
            }
        },
        {
            value:'*', 
            btFun: () => {
            setCurrentOperation("*");    
            setOperationValue(inputVal1);    
            setInputVal1(0) 
            }
        },
        {
            value:'=', 
            btFun: () => {
               if(currentOperation === '+'){
                setInputVal1((prevValue)=> {
                    return prevValue + operationValue
                }) 
               }else if(currentOperation === '-'){
                setInputVal1((prevValue)=> {
                    return  operationValue - prevValue 
                })    
               }else if(currentOperation === '/'){
                setInputVal1((prevValue)=> {
                    return  operationValue / prevValue   
                })    
               }else if(currentOperation === '*'){
                setInputVal1((prevValue)=> {
                    return  prevValue * operationValue   
                })    
               }
            }
        }
    ]

    return(
        <div className="input">
            <p>inputVal1 {inputVal1}</p>
            
            <p>OperationValue {operationValue}</p>
            <p>currentOperation {currentOperation}</p>
            
            <CalWraaper allBtArr={allBtArr} operationArr={operationArr}/>
        </div>
    )
}
export default Cal;