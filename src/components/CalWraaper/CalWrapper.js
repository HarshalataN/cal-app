// import Button from "../../common/Button";

import Button from "../../common/Button";

// const CalWrapper = (props) => {
  
//   const allButton = props.allBtArr.map((btObj) => {
//     return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun}/>;
//   });

//   console.log("allButton", allButton);

//   return (
//     <div>
//        {allButton}
//     </div>);
// };

// export default CalWrapper;
import "./CalWrapper.css"


const CalWraaper = (props) =>{

  const{allBtArr, operationArr}=props;

  const allButton = allBtArr? allBtArr.map((btObj)=>{
           return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun}/>;
  }) : [];
  const allOperationButton = operationArr? operationArr.map((btObj)=>{
    return <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun}/>;
}) :[];

 console.log(allButton);

  return(
      <div className="all-css">
      <div className="bt-name">
         {allButton}
      </div>
      <div className="op-name">
      {allOperationButton}
      </div>   
         
      </div>
  )
}
export default CalWraaper;
