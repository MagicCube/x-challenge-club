import { Card, CardActions, CardMedia, CardText, CardTitle, FlatButton } from "material-ui";

export default class ChallengeCard extends React.Component
{
    render()
    {
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title={this.props.challenge.title} subtitle={this.props.challenge.departureDate} />}
                >
                    <img src={this.props.challenge.pictures[0]} />
                </CardMedia>
            </Card>
        );
    }
}
