const Carousel = require("react-swipe");

import data from "../data";
import ChallengeCard from "../card/ChallengeCard";
import ChallengeGrid from "../grid/ChallengeGrid";
import Page from "./Page";

export default class HomePage extends Page
{
    render()
    {
        const headlineChallenges = data.challenges(3);
        const mostPopularChallenges = data.challenges(9);

        return (
            <div className="home-page">
                <section className="headline">
                    <Carousel swipeOptions={{ continuous: true, auto: 3000 }}>
                        {headlineChallenges.map(challenge =>
                            <div key={challenge.id + "-container"} style={{ float: "left" }}>
                                <ChallengeCard key={challenge.id} challenge={challenge}/>
                            </div>
                        )}
                    </Carousel>
                </section>
                <section className="most-polular">
                    <ChallengeGrid challenges={mostPopularChallenges}/>
                </section>
            </div>
        );
    }
}
