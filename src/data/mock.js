const Mock = require("mockjs");
const Random = Mock.Random;

let PIC_INDEX = 7347;

export default {
    challenge()
    {
        return Mock.mock({
            id: Random.guid(),
            title: Random.title(1, 3),
            "pictures|1-1": [
                ()  => `/data/images/IMG_${PIC_INDEX++}.JPG`
            ],
            description: Random.paragraph(3, 5),
            departureDate: () => new Date(new Date(2016, 7, 10).getTime() + ~~(Math.random() * 30) * 24 * 60 * 60 * 1000).toDateString(),
            price: Random.pick([ 99, 199, 299, 499, 1500, 2000, 2499, 8000, 10000, 14999 ]),
            joinedCount: Random.natural(3, 30),
            expectedCount: Random.pick([ 30, 50, 60, 100 ])
        });
    },

    challenges(count = 5)
    {
        const results = [];
        for (let i = 0; i < count; i++)
        {
            results.push(this.challenge());
        }
        return results;
    }
};
