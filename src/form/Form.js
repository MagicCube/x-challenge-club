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
            errors: this.state.errors
        };
        state.errors[field] = error;
        this.setState(state);
    }

    clearError(field)
    {
        this.showError(field, null);
    }

    validateField(field, validation)
    {
        this.showError(field, validation.errorMessage);
    }
}
