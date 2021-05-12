
import React from "react";

function Checkbox(props) {
    return (
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        <label class="form-check-label" for="flexCheckDefault">{props.checkboxText}
         </label>
        </div>
    );
}

export default Checkbox;