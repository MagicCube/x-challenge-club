import { Avatar, Drawer, Divider, IconButton, IconMenu, List, ListItem, MenuItem, Subheader } from "material-ui";
import { deepOrange50, deepOrange100, deepOrange500, deepOrange900 } from "material-ui/styles/colors";

import ArrowDownIcon from "material-ui/svg-icons/hardware/keyboard-arrow-down";
import HomeIcon from "material-ui/svg-icons/action/home";
import SearchIcon from "material-ui/svg-icons/action/search";
import DiscoverIcon from "material-ui/svg-icons/image/remove-red-eye";

export default class MainDrawer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { open: props.open };
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            open: nextProps.open
        });
    }

    render()
    {
        return (
            <Drawer
                docked={false}
                width={280}
                open={this.state.open}
                containerStyle={{ backgroundColor: deepOrange500 }}
                onRequestChange={(open) => this.setState({open})}
            >
                <header style={{ color: deepOrange100, backgroundColor: deepOrange900, height: 150, paddingLeft: 25, paddingTop: 60 }}>
                    <Avatar
                        src="/images/user.jpg"
                        size={80}
                    />
                    <div style={{height:48, lineHeight:"48px"}}>
                        <div className="greeting" style={{display: "inline-block"}}>Hello, Helen</div>
                        <div style={{float: "right"}}>
                            <IconMenu
                              iconStyle={{color: deepOrange100}}
                              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                              targetOrigin={{horizontal: 'left', vertical: 'top'}}
                              iconButtonElement={<IconButton><ArrowDownIcon /></IconButton>}
                            >
                                <MenuItem primaryText="Recommended for you" />
                                <MenuItem primaryText="My Profile" />
                                <MenuItem primaryText="My Account" />
                                <MenuItem primaryText="Sign out" />
                            </IconMenu>
                        </div>
                    </div>
                </header>
                <nav>
                    <List>
                        <Subheader style={{ color: deepOrange100 }}>X-Challenge Club</Subheader>
                        <ListItem primaryText="Home" style={{ color: deepOrange50 }} leftIcon={<HomeIcon color={deepOrange50} />} />
                        <ListItem primaryText="Discover" style={{ color: deepOrange50 }} leftIcon={<DiscoverIcon color={deepOrange50} />} />
                        <ListItem primaryText="Search" style={{ color: deepOrange50 }} leftIcon={<SearchIcon color={deepOrange50} />} />
                    </List>
                    <Divider inset={true} />
                    <List>
                        <Subheader style={{ color: deepOrange100 }}>My challenges</Subheader>
                        <ListItem primaryText="Joined challenges" style={{ color: deepOrange50 }} rightIcon={<div className="number badge">5</div>} />
                        <ListItem primaryText="Liked challenges" style={{ color: deepOrange50 }} rightIcon={<div className="number badge">18</div>} />
                        <ListItem primaryText="Recommended challenges" style={{ color: deepOrange50 }} />
                    </List>
                </nav>
            </Drawer>
        );
    }
}
