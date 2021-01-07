const mongoose = require("mongoose")

const Reviews = require("../models/ReviewsSchema");

const reviews = [
    {
        title: "We're Back!",
        writer: "Steven Sarria",
        reviews: [
            {
                heading: "",
                info: "First and foremost, we’d like to apologize to our fans for our unannounced absence. After taking some time off to re-evaluate where we wanted to take Backlot, we realized we needed a complete re-vamp of our website, culture and mission statement. Inside the Backlot (formerly known as Backlot Review), is no longer just a film review website. No longer is this a website where all our content will be long, thought-out reviews on the latest films in Hollywood and television. Inside the Backlot is something much bigger than that. Inside the Backlot is a community. A place for cinephiles and filmmakers to connect and interact with one another. Our goal here at the Backlot is to expose the public to new films and up-and-coming filmmakers looking to leave their mark on the industry. Here at the Backlot, you are joined by hundreds of other people who share the same passion and interests as you – film and all it’s components. This is a hub for filmmakers, film critics and film lovers to come together and discuss new ideas, the latest trends and their favorite movies with one another. Inside the Backlot is proud to introduce The Backlot Podcast Network. Here, you will find the first two introductions to the network with Inside the Backlot’s first two podcasts: Backlot Review and The Stream Exchange. Backlot Review will be a weekly film podcast where co-hosts Steven Sarria and Nick Sarmiento discuss that week’s big theatrical release. The Stream Exchange will be more television-oriented: a podcast where co-hosts Steven Sarria and Remy Sallinger each choose a season of television that the other is forced to watch, and discuss them episode-by-episode. Inside the Backlot will continue to produce written articles, and look to release videos in the near-future. These videos will include behind-the-scenes looks at various Miami-based film festivals and interviews with local up-and-coming directors, producers and actors. As Backlot continues to grow, we look for young aspiring filmmakers to grow with us. As our platform continues to grow and our reach continues to expand, Backlot wants to partner with aspiring filmmakers to give them a platform to preview their films and projects. For many, film is a hobby. For some, film is a passion. Though one thing is certain: film is art, and like any art, it’s a way to get your voice heard. Here are our voices. Welcome to Inside the Backlot."
            }
        ],
        img: "https://insidethebacklothome.files.wordpress.com/2019/05/cropped-detpikachunewheader-1.jpg"
    },
    {
        title: "5 Questions We Still Have After the Series Finale of Game of Thrones",
        writer: "Nick Sarmiento",
        reviews: [
            {
                heading: "What was the point of Jon Snow being a Targaryen?",
                info: "In the season 7 finale “The Dragon and the Wolf” we learn that Jon Snow is not the bastard of Ned Stark, but that he is the son of Rhaegar Targaryen and Lyanna Stark. With Jon having the rightful claim to the throne this kept fans wondering how this would affect the relationship not only between him and Daenerys but all of Westeros. Throughout the final season we are teased with moments regarding Jon’s true identity, it even seems at one point that the secret gets out thanks to Varys. But ultimately Jon being the rightful heir to the Iron Throne serves no real purpose in the final season. Was his true identity only used as a crutch to help support Daenerys turning mad so quickly this season? It seems that the biggest secret in the shows universe proved to be pointless and served no real purpose in furthering the shows plot."
            },
            {
                heading: "Did we ever get Azor Ahai?",
                info: "Throughout the show the viewer has been constantly reminded of the importance of The Prince That Was Promised. Fans have had their predictions as to who exactly this would be and as of late many though it would be Arya to fulfill the prophecy, after all she did kill the Night King. But what if the Night King wasn’t the “darkness” the Prince was supposed to save the people from. What if it was Daenerys, in the final episode she reveals her plans to free the world of tyrants, but she essentially is a tyrant herself. When Jon confronts her by the Iron Throne he is conflicted but does what is right by killing Daenerys. He did truly love her as Azor Ahair truly loved Nissa Nissa. By Jon killing Daenerys this fulfills the prophecy making him The Prince That Was Promise. So at the end of it all we did get Azor Ahai right? Just not exactly how everyone planned for it."
            },
            {
                heading: "Did Bran know everything that was going to happen?",
                info: "“Why do you think I came all this way.” That is how Bran responds to Tyrion when asked if he would serve as king of Westeros. Does this mean that he knew this was going to happen the entire time? We don’t know how clearly Bran can see in the future or if he can at all, it’s never really established. But with that sentence it makes you wonder whether or not he knew everything that was going to happen. The way Bran ended up playing out as a character was somewhat disappointing, after all he is the Three Eyed Raven, but unfortunately not much was done with that part of his character in the final season. Making Bran the king makes sense though, he does know the entire history of everything, and history repeats itself so he could essentially stop all of the bad stuff from happening again right?"
            },
            {
                heading: "What’s west of Westeros?",
                info: "During the series finale last night we finally saw Arya leave Westeros and head west. This left fans wanting more, and maybe we will get a future spin-off centered around Arya? Okay, probably not but it’s pretty cool to think about it and we could dream. Arya heading west left viewers with so many questions to what exactly she will be doing on her new adventures. What will she see? Who will she encounter? These are just some of the things we would want to know but unfortunately these are questions we may not get answered anytime soon."
            },
            {
                heading: "What happened to Drogon?",
                info: "After Jon killed Daenerys he has a confrontation with Drogon. Out of anger and pain Drogon melts down the Iron Throne instead of roasting Jon. We then see him pick up Dany and fly away never to be seen again by the viewer, although later in the show we see Sam tell Bran that he was last seen flying east. Bran then hints at being able to find him, maybe Bran will be able to control Drogon now? Either way, there is still a dragon out on the loose in Westeros and let’s just hope he isn’t out there burning down villages and eating people."
            }
        ],
        img: "https://insidethebacklothome.files.wordpress.com/2019/05/cropped-detpikachunewheader-1.jpg"
    },
    {
        title: "John Wick 3 Continues to Build Upon An Already Great Series",
        writer: "Steven Sarria",
        reviews: [
            {
                heading: "",
                info: "Before we start this review, let’s get three things straight right off the bat."
            },
            {
                heading: "I’m a sucker for action films.",
                info: ""
            },
            {
                heading: "I’m a sucker for world-building.",
                info: ""
            },
            {
                heading: "I’m a sucker for stylized violence in action films.",
                info: ""
            },
            {
                heading: "",
                info: "With that being said, it’s very apparent that the John Wick films feel like they are specifically tailored to check off every interest box I  have. They contain everything I look for in an action film: well-choreographed and coherent action, stylized visuals, steady camerawork with minimal shaky-cam, and top-notch world-building. John Wick 3 begins right where John Wick 2 ended. John Wick, played by Keanu Reeves, is now ex-communicado from The Continental, and has an active bounty of $14 million on his head. John Wick must fight off hordes of people who have not yet learned to stop fucking with this guy (seriously, why do people still try?!) while he tries to find ways to get this massive bounty off his head and work his way back to the High Table and Continental. One of my favorite things about this series is how every film has raised the stakes for John Wick little by little. The first movie, simply headingd John Wick, is the story of a grieving widowed man who seeks revenge on those who took away the last living remembrance he had of his dead wife – the puppy she left him. It’s a simple story, yet we connect to it so thoroughly because the loss feels so human and sincere. In John Wick 2, things are escalated when John gets dragged back into the life of a hit-man when the nigh-untouchable High Table is introduced. Although this story is less personal, we already connect to John Wick emotionally because of the events that happened in the first film. John Wick 2 takes advantage of the fact that the audience is already so bought-in to this world and it’s characters and decides to open up the world just a bit more, introducing us to the concept of “markers”, the High Table, The Bowery King, The Continental and the world of assassins as a whole. John Wick 3 takes this pattern and continues to expand the world little-by-little. In this film, we learn John Wick’s true name (Jardani Jovonovich), some more about Winston and the Continental,, the Adjudicator, the High Table and some more about the more powerful players in the world of assassins. In a series where John Wick goes from catalyst to pawn as the world grows around him, the very idea of John Wick 4 excites me more than any other previous John Wick installment."
            },
            {
                heading: "BUT ENOUGH OF THAT, LET’S TALK ABOUT JOHN WICK 3.",
                info: "John Wick 3 continues to solidify this series as one of the best action series of all time. Highly stylized with it’s own identity, these films feel like such a breath of fresh air in an era of Hollywood where it seems like every other film being released is a remake, re-boot, or superhero film. The film has some of the best choreographed fight scenes I’ve seen in Hollywood in quite some time, and due to the steady camera work during the film’s action sequences, these scenes are easier and much more satisfying to watch. In regards to the action, It feels like there’s less “gun-fu” in this John Wick when compared to the others. There’s more of a focus on knife and sword fights (which is fine by me), with the occasional fist-to-fist brawl thrown in there. Although don’t get it twisted, many people get shot in this movie. The gun fight sequences are up there with the best of the series, especially the film’s final gun sequence that takes place inside the Continental. The sound design continues to be top-notch, and the passion Keanu Reeves and the filmmakers put into every gun sequence is astounding. Seriously, John Wick builds his own gun from scratch before blowing someone’s head off. It’s refreshing seeing films treat their guns realistically, and  I never knew how much I’d love seeing Keanu Reeves reload a gun mid-fight. The acting was all-around pretty good, which is normal for these John Wick movies. Laurence Fishburne continues to ham it up and chew on the scenery, and Halle Berry’s character was a great addition to the story. Asia Kate Dillon was fantastically irritating as the Adjudicator, and new ninja-like assassin group provided some great fights (the guys from The Raid need to be in every action movie ever). One of my favorite things about this series is how real the consequences feel. John Wick is not some Superman-like figure who takes all these beatings without signs of slowing down. John bleeds, he visits doctors, he doubles over, he gets the ever-loving shit kicked out of him. But it makes it feel all the more real. Even though we know John Wick is gonna eventually kill those who try to get to him, there’s an ever-present sense of mortality and danger that lingers as we see John Wick continually take all these beatings. The film also does a wonderful job of intertwining it’s action and serious bits with the perfect amount of dead-pan humor. It’s not quippy and out-of-place like The Last Jedi or some of the Marvel movies, but done in the spirit of the film."
            },
            {
                heading: "FINAL THOUGHTS.",
                info: "Overall, this is a great addition to an already great series. After quite a bit of thinking, I can’t really say which is my favorite, as I feel they are equally fantastic. Each new film takes pieces of the old and adds to it, helping further flesh out an already amazing world. I’ll keep watching these movies as long as they maintain this amount of quality, love and care. Give me more John Wick."
            },
            {
                heading: "Final score: 4 out of 5."
            }
        ],
        img: "https://insidethebacklothome.files.wordpress.com/2019/05/cropped-detpikachunewheader-1.jpg"
    }
]


mongoose
    .connect("mongodb://localhost/final-project", { useNewUrlParser: true })
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
        return Reviews.insertMany(reviews);
    })
    .then((reviews) => {
        console.log("Db Seeded");
    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });


