import Form from "./Form";
import validate from "../validate";

export default class SignForm extends Form
{
    constructor(props)
    {
        super(props);
        this.state.emailDataSource = [];
    }



    validateEmail(value)
    {
        this.validateField("email", validate(value).required().email());
    }

    validateMobilePhone(value)
    {
        this.validateField("mobilePhone", validate(value).required().phoneNumber());
    }

    validatePassword(value)
    {
        this.validateField("password", validate(value).required().password());
    }




    _email_onUpdateInput(value)
    {
        this.setState({
            emailDataSource: [ "@qq.com", "@163.com", "@gmail.com", "@hotmail.com" ].map(addr => value.split("@")[0] + addr)
        });
    }
}
