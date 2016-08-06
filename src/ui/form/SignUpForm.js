import React from "react";

import { AutoComplete, RaisedButton, Checkbox, Snackbar, TextField  } from "material-ui";
import { blue500 } from "material-ui/styles/colors";

import SignForm from "./SignForm";
import validate from "../../validate";

export default class SignUpForm extends SignForm
{
    constructor(props)
    {
        super(props);
        this.state.agree = true;
    }

    render()
    {
        return (
            <form id="sign-up-form">
                <AutoComplete
                  type="text"
                  animated={false}
                  hintText="you@example.com"
                  floatingLabelText="Email"
                  fullWidth={true}
                  dataSource={this.state.emailDataSource}
                  errorText={this.state.errors.email}
                  onUpdateInput={this._email_onUpdateInput.bind(this)}
                  onBlur={(e => this.validateEmail(e.target.value)).bind(this)}
                  onNewRequest={(value => this.validateEmail(value)).bind(this)}
                />
                <TextField
                  type="phone"
                  hintText="+86"
                  floatingLabelText="Mobile phone"
                  fullWidth={true}
                  errorText={this.state.errors.mobilePhone}
                  onBlur={(e => this.validateMobilePhone(e.target.value)).bind(this)}
                />
                <TextField
                  type="password"
                  hintText="At least 6 characters"
                  floatingLabelText="Password"
                  fullWidth={true}
                  errorText={this.state.errors.password}
                  onBlur={(e => this.validatePassword(e.target.value)).bind(this)}
                />
                <Checkbox
                  ref="agree"
                  label="I agree to the Terms of Service and Privacy Policy."
                  defaultChecked={true}
                  style={{ marginTop: 25 }}
                  labelStyle={{ color: "silver", fontSize: 12 }}
                  onCheck={((e, checked) => this.setState({ agree: checked })).bind(this)}
                />
                <RaisedButton label="AGREE AND Sign up" disabled={!this.state.agree} primary={true} fullWidth={true} style={{ marginTop: 25, height: 50 }}/>
            </form>
        );
    }
}
