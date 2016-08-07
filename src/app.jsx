import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from "react-dom";

import { hashHistory, Route, Router } from 'react-router'

import getMuiTheme from "material-ui/styles/getMuiTheme";
import { AppBar, AutoComplete, RaisedButton, Checkbox, Tab, Tabs, TextField  } from "material-ui";
import { deepOrange400, deepOrange500, deepOrange700 } from 'material-ui/styles/colors';

import HomePage from "./page/HomePage";
import MainDrawer from "./drawer/MainDrawer";
import Page404 from "./page/Page404";
import SignInPage from "./page/SignInPage";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            drawerOpen: false
        };
    }

    getTheme()
    {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: deepOrange500,
                primary2Color: deepOrange700,
                primary3Color: deepOrange400
            }
        });
        return muiTheme;
    }

    render()
    {
        return (<MuiThemeProvider muiTheme={this.getTheme()}>
            <div>
                <AppBar title="X-CHALLENGE" onLeftIconButtonTouchTap={() => this.setState({drawerOpen: true})}/>
                <MainDrawer open={this.state.drawerOpen}/>
                <Router history={hashHistory}>
                    <Route path="/" component={HomePage} />
                    <Route path="/sign-in" component={SignInPage} />
                    <Route path="*" component={Page404} />
                </Router>
            </div>
        </MuiThemeProvider>)
    }
}

injectTapEventPlugin();
const app = <App name="Henry"/>;
ReactDOM.render(app, document.getElementById("app"));
