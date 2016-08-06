import { AutoComplete, RaisedButton, TextField  } from "material-ui";

import SignForm from "./SignForm";

export default class SignInForm extends SignForm
{
    render()
    {
        return (
            <form id="sign-in-form">
                <AutoComplete
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
                  hintText="Password"
                  floatingLabelText="Password"
                  fullWidth={true}
                  errorText={this.state.errors.password}
                  onBlur={(e => this.validatePassword(e.target.value)).bind(this)}
                />
                <RaisedButton label="Sign in" primary={true} fullWidth={true} style={{ marginTop: 25, height: 50 }}/>
            </form>
        );
    }
}
