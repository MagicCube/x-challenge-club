const Carousel = require("react-swipe");

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
                    <Carousel swipeOptions={{ continuous: true, auto: 3000 }}>
                        {challenges.map(challenge => (
                            <div style={{ float: "left" }}>
                                <ChallengeCard key={challenge.id} challenge={challenge}/>
                            </div>
                        ))}
                    </Carousel>
                </header>
                <h1>abc</h1>
            </div>
        );
    }
}
