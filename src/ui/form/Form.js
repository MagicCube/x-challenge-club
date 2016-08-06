import React from "react";

export default class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            errors: { }
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
}
