import { Card, CardActions, CardText, CardTitle, FlatButton } from "material-ui";

export default class ChallengeCard
{
    render()
    {
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="images/nature-600-337.jpg" />
                </CardMedia>
            </Card>
        );
    }
}
