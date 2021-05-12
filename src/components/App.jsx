import React from "react";
import Input from "./Input";
import Heading from "./Heading";
import Checkbox from "./Checkbox";

function App() {
    return (
        <div>
        <Heading/>
        <p style = {{margin: "25px 42px"}}>Required*</p>
        
        <Input formLabel = "1.Your Name *" />
        <Input formLabel = "2.Name of your Organization *"/>
        <Input formLabel = "3.Your role in the organization *"/>
        <Input formLabel = "4.Email Address *"/>
        <Input formLabel = "5.Contact Number *"/>
        <p style = {{margin: "25px 42px"}}>6.Which of the following best describes your organization? *</p>
        <Checkbox checkboxText = "Digitial Marketing Agency"></Checkbox>
        <Checkbox checkboxText = "Creative Agency"></Checkbox>
        <Checkbox checkboxText = "Media Buying Agency"></Checkbox>
        <Checkbox checkboxText = "Print Media Agency"></Checkbox>
        <Checkbox checkboxText = "PR Agency"></Checkbox>
        <Checkbox checkboxText = "HR consultants"></Checkbox>
        <Checkbox checkboxText = "Other Services like CA, Management, Law, Manpower, etc"></Checkbox>
        
        <Input formLabel = "7.Your Address (you may also share the link to business listing) *"/>
        <Input formLabel = "8.GST Number *"/>

        <div class="">
            <label for="exampleFormControlInput1" class="form-label">9.Bank Detials (Only share your current account detials) *</label>
            <textarea class="form-control" style={{width: "85%"}} aria-label="With textarea"></textarea>
        </div>

        <button class="submit-button" type="submit">Submit</button>

        <p style = {{margin: "25px 42px"}}>Never give out your password. <a href="#">Report abuse</a></p>
        </div>
    );
}

export default App;
