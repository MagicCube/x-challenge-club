import injectTapEventPlugin from 'react-tap-event-plugin';

import ReactDOM from "react-dom";

import { hashHistory, Route, Router } from 'react-router'

import HomePage from "./page/HomePage";
import Page404 from "./page/Page404";
import SignInPage from "./page/SignInPage";

class App extends React.Component
{
    render()
    {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomePage} />
                <Route path="/sign-in" component={SignInPage} />
                <Route path="*" component={Page404} />
            </Router>);
    }
}

injectTapEventPlugin();
const app = <App name="Henry"/>;
ReactDOM.render(app, document.getElementById("app"));
