import React from "react";

const buttonuserstyles = {
    padding: '10px 20px',
    background: 'blsck',
    border: 'none',
    borderRadius: 5,
}

function ButtonUser () {
    return(
    <button style={buttonuserstyles} > action </button>
    )
}

class FormInput extends React.Component{
    render(): React.ReactNode {
        return(
            <div className="form-input-user">
                <hr></hr>
                <p>Form Newsletter</p>
                <ButtonUser />
                <hr></hr>

            </div>

        )
    }
}

export default FormInput