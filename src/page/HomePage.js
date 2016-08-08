const Carousel = require("react-swipe");

import data from "../data";
import ChallengeCard from "../card/ChallengeCard";
import ChallengeGrid from "../grid/ChallengeGrid";
import Page from "./Page";

export default class HomePage extends Page
{
    componentDidMount()
    {
        document.title = "Welcome";
    }

    renderBody()
    {
        if (!this.headlineChallenges)
        {
            this.headlineChallenges = data.challenges(3);
            const titles = ["西贡 • 独木舟", "澳门 • War Game", "巴厘 • 冲浪"];
            this.headlineChallenges.forEach((challenge, i) => {
                challenge.title = titles[i];
            });
            this.mostPopularChallenges = data.challenges(6);
        }

        return (
            <div className="home-page">
                <section className="headline">
                    <Carousel swipeOptions={{ continuous: true, auto: 5000 }}>
                        {this.headlineChallenges.map(challenge =>
                            <div key={challenge.id + "-container"} style={{ float: "left" }}>
                                <ChallengeCard key={challenge.id} challenge={challenge}/>
                            </div>
                        )}
                    </Carousel>
                </section>
                <section className="most-polular">
                    <ChallengeGrid challenges={this.mostPopularChallenges}/>
                </section>
            </div>
        );
    }
}
