import { Card, CardActions, CardMedia, CardText, CardTitle, FlatButton } from "material-ui";

export default class ChallengeCard extends React.Component
{
    render()
    {
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title={this.props.challenge.title} subtitle={this.props.challenge.departureDate.substr(0, 10)} />}
                >
                    <div style={{ backgroundImage: `url(${this.props.challenge.pictures[0]})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: 530 }} />
                </CardMedia>
            </Card>
        );
    }
}
