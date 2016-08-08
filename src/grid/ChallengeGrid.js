import { GridList, GridTile } from "material-ui";
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class ChallengeGrid extends React.Component
{
    render()
    {
        return (
            <GridList
                cols={2}
                cellHeight={210}
                padding={1}
            >
                {this.props.challenges.map((challenge, i) =>
                    <GridTile
                        key={challenge.id}
                        title={challenge.title}
                        subtitle={challenge.departureDate.substr(0, 10)}
                        actionIcon={i % 3 === 2 ? <IconButton><StarBorder color="white" /></IconButton> : null}
                        actionPosition="left"
                        titlePosition="top"
                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        cols={i % 3 === 2 ? 2 : 1}
                        rows={i % 3 === 2 ? 1 : 1}
                    >
                        <img src={challenge.pictures[0]} />
                    </GridTile>
                )}
            </GridList>
        );
    }
}
