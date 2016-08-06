import Form from "./Form";

export default class SignForm extends Form
{
    constructor(props)
    {
        super(props);
        this.state.emailDataSource = [];
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

    validatePassword(value)
    {
        if (this.validateRequires("password", value))
        {
            if ((/^\w{6,15}$/i).test(value))
            {
                this.clearError("password");
            }
            else
            {
                this.showError("password", "Password should be 6-15 characters including letters and numbers.");
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
