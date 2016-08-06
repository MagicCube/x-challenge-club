import { Tab, Tabs } from "material-ui";

import SignInForm from "../form/SignInForm";
import SignUpForm from "../form/SignUpForm";

export default class WelcomePage extends React.Component
{
    render()
    {
        return (
            <Tabs>
                <Tab label="Sign up">
                    <div style={{ padding: 25 }}>
                        <SignUpForm/>
                    </div>
                </Tab>
                <Tab label="Sign in" value="sign-in" >
                    <div style={{ padding: 25 }}>
                        <SignInForm/>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}
