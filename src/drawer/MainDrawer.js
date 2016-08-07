import { Drawer } from "material-ui";

export default class MainDrawer extends React.Component
{
    render()
    {
        return (
            <Drawer
                docked={false}
                width={280}
                open={this.props.open}
                onRequestChange={(open) => this.setState({open})}
            >
            </Drawer>
        );
    }
}
