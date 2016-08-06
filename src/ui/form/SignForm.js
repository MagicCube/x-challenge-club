import React from "react";

export default class SignForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            emailDataSource: [],
            errors: {
                email: null,
                password: null
            }
        };
    }





    showError(field, error)
    {
        const state = {
            errors: {}
        };
        state.errors[field] = error;
        this.setState(state);
    }

    clearError(field)
    {
        const state = {
            errors: {}
        };
        state.errors[field] = null;
        this.setState(state);
    }


    validateRequires(field, value)
    {
        if (value.trim() === "")
        {
            this.showError(field, "This field is required.");
            return false;
        }
        return true;
    }

    validateEmail(value)
    {
        if (this.validateRequires("email", value))
        {
            if ((/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([A-Za-z0-9]+(?:-[A-Za-z0-9]+)?\.)+[A-Za-z0-9]+(?:-[A-Za-z0-9]+)?$/i).test(value))
            {
                this.clearError("email");
            }
            else
            {
                this.showError("email", "This seems not a valid email address.");
            }
        }
    }

    validateMobilePhone(value)
    {
        if (this._validateRequires("mobilePhone", value))
        {
            if ((/^\+[1-9]{1}[0-9]{3,14}$/i).test(value))
            {
                this.clearError("mobilePhone");
            }
            else
            {
                this.showError("mobilePhone", "This seems not a valid phone number.");
            }
        }
    }

    validatePassword(value)
    {
        if (this.validateRequires("password", value))
        {
            if ((/^[a-zA-Z]\w{5,14}$/i).test(value))
            {
                this.clearError("password");
            }
            else
            {
                this.showError("password", "At least 6 letters or numbers, begins with letter.");
            }
        }
    }




    _email_onUpdateInput(value)
    {
        this.setState({
            emailDataSource: [ "@qq.com", "@163.com", "@gmail.com", "@hotmail.com" ].map(addr => value.split("@")[0] + addr)
        });
    }
}
