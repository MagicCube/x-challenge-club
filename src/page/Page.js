import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AppBar } from "material-ui";
import { deepOrange400, deepOrange500, deepOrange700 } from 'material-ui/styles/colors';

import getMuiTheme from "material-ui/styles/getMuiTheme";

import MainDrawer from "../drawer/MainDrawer";

export default class Page extends React.Component
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
        return (
            <MuiThemeProvider muiTheme={this.getTheme()}>
                <div>
                    <AppBar title="X-CHALLENGE" onLeftIconButtonTouchTap={() => this.setState({drawerOpen: true})}/>
                    <MainDrawer open={this.state.drawerOpen}/>
                    {this.renderBody()}
                </div>
            </MuiThemeProvider>
        );
    }

    renderBody()
    {
        return null;
    }
}
