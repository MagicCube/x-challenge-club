const Carousel = require("nuka-carousel");

import data from "../data";
import ChallengeCard from "../card/ChallengeCard.js";
import Page from "./Page";

export default class HomePage extends Page
{
    render()
    {
        const challenges = data.challenges(3);

        return (
            <div className="home-page">
                <header>
                    <Carousel autoplay={true} decorators={[]}>
                        {challenges.map(challenge => (
                            <ChallengeCard key={challenge.id} challenge={challenge}/>
                        ))}
                    </Carousel>
                </header>
            </div>
        );
    }
}
