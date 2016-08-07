import { Card, CardActions, CardText, CardTitle, FlatButton } from "material-ui";
import { hashHistory } from 'react-router'

import Page from "./Page";

export default class Page404 extends Page
{
    render()
    {
        return (
            <div className="404-page" style={{ padding: 20 }}>
                <Card>
                    <CardTitle title="404" subtitle="Not Found" />
                    <CardText>
                      We're sorry, the page you requested cannot be found.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Back" onClick={() => hashHistory.goBack()} />
                        <FlatButton label="Home" onClick={() => hashHistory.push("/")} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}
