// import "./Button.css"

// const Button = (props) => {
    
   

//     return(
//         <div>
//             <button className="bt-cal" onClick={props.btFun}>
//              {props.btName}
//             </button>
//         </div>
//     )
// }

// export default Button;
import './Button.css'
const Button = (props) =>{

    
    const{btName,btFun}=props;

    return(
        <div>
            <button className="btn-cal" onClick={btFun}>
                {btName}
            </button>
        </div>
    )
  }
  export default Button;