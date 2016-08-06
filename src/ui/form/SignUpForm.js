import React from "react";

import { AutoComplete, RaisedButton, Checkbox, Snackbar, TextField  } from "material-ui";
import { blue500 } from "material-ui/styles/colors";

import SignForm from "./SignForm";

export default class SignUpForm extends SignForm
{
    render()
    {
        return (
            <form id="sign-up-form">
                <AutoComplete
                  ref="email"
                  type="email"
                  hintText="you@example.com"
                  floatingLabelText="Email"
                  fullWidth={true}
                  dataSource={this.state.emailDataSource}
                  errorText={this.state.errors.email}
                  onUpdateInput={this._email_onUpdateInput.bind(this)}
                  onBlur={(e => this.validateEmail(e.target.value)).bind(this)}
                />
                <TextField
                  ref="mobilePhone"
                  type="phone"
                  hintText="+86"
                  floatingLabelText="Mobile phone"
                  fullWidth={true}
                  errorText={this.state.errors.mobilePhone}
                  onBlur={(e => this.validateMobilePhone(e.target.value)).bind(this)}
                />
                <TextField
                  ref="password"
                  type="password"
                  hintText="At least 6 characters"
                  floatingLabelText="Password"
                  fullWidth={true}
                  errorText={this.state.errors.password}
                  onBlur={(e => this.validatePassword(e.target.value)).bind(this)}
                />
                <Checkbox
                  label="I agree to the Terms of Service and Privacy Policy"
                  defaultChecked={true}
                  style={{ marginTop: 25 }}
                  labelStyle={{ color: "silver", fontSize: 12 }}
                />
                <RaisedButton label="AGREE AND Sign up" primary={true} fullWidth={true} style={{ marginTop: 25, height: 50 }}/>
            </form>
        );
    }
}
