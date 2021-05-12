
import React from "react";

function Input(props) {
    return(
        <div>

        <div className="">
        <label for="exampleFormControlInput1" class="form-label">{props.formLabel}</label>
        <input type="email" class="form-control" style={{width: "85%"}} id="exampleFormControlInput1" placeholder="Enter your answer"></input>
        </div>
            
        </div>
    )
}

export default Input;