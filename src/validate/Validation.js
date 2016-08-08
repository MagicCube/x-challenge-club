export default class Validation
{
    constructor(value)
    {
        this._value = value;
        this._isValid = true;
        this._errorMessage = null;
    }

    get value()
    {
        return this._value;
    }

    get isValid()
    {
        return this._isValid;
    }

    get errorMessage()
    {
        return this._errorMessage;
    }

    invalidate(errorMessage)
    {
        this._isValid = false;
        if (errorMessage !== undefined && errorMessage !== null)
        {
            this._errorMessage = errorMessage;
        }
    }

    check(rule, errorMessage)
    {
        if (this.isValid)
        {
            if (typeof(rule) === "boolean")
            {
                if (rule === false)
                {
                    this.invalidate(errorMessage);
                }
            }
            else if (typeof(rule) === "function")
            {
                if (!rule(this.value))
                {
                    this.invalidate(errorMessage);
                }
            }
            else if (rule instanceof RegExp)
            {
                if (!rule.test(this.value))
                {
                    this.invalidate(errorMessage);
                }
            }
            else
            {
                throw new Error(`check(rule) only accepts boolean, function and RegExp as 'rule' argument. But a ${rule} is given.`);
            }
        }
        return this;
    }






    required(errorMessage = "This field is required.")
    {
        return this.check(
            typeof(this.value) === "string" ? (this.value.trim() !== "")
          : (this.value != undefined && this.value !== null && !isNaN(this.value)), errorMessage);
    }






    typeOf(type, errorMessage = `This field must be a ${type}.`)
    {
        return this.check(typeof(this.value) === type, errorMessage);
    }
    string(errorMessage)
    {
        return this.typeOf("string", errorMessage);
    }
    number(errorMessage)
    {
        return this.typeOf("number", errorMessage);
    }





    password(errorMessage = "Password should be 6-15 characters including letters and numbers.")
    {
        return this.check(
            /^\w{6,15}$/,
            errorMessage);
    }

    email(errorMessage = "This seems not a valid email address.")
    {
        return this.check(
            /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@([A-Za-z0-9]+(?:-[A-Za-z0-9]+)?\.)+[A-Za-z0-9]+(?:-[A-Za-z0-9]+)?$/i,
            errorMessage);
    }

    phoneNumber(errorMessage = "This seems not a valid phone number.")
    {
        return this.check(/^\+[1-9]{1}[0-9]{3,14}$/i, errorMessage);
    }
}
