import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Ryan Morik",
      title:
        "USA cricket team, filled with office workers, pulls off huge upset over Pakistan",
      description:
        "The United States cricket team pulled off one of the biggest upsets in sports history Thursday, taking down Pakistan at the T20 World Cup of cricket.",
      url: "https://www.foxnews.com/sports/usa-cricket-team-filled-office-workers-pulls-off-huge-upset-over-pakistan",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/usa-cricket-1.jpg",
      publishedAt: "2024-06-07T19:09:23Z",
      content:
        "Do you believe in miracles?\r\nOne of the biggest upsets in sports history happened Thursday when the United States defeated Pakistan in the T20 World Cup of cricket.\r\nThe match was decided in a super … [+2247 chars]",
    },
    {
      source: {
        id: null,
        name: "Legalinsurrection.com",
      },
      author: "Mary Chastain",
      title:
        "Olympics to the Media: Avoid ‘Problematic Language’ Like ‘Born Male,’ ‘Biologically Male,’ and ‘Genetically Female’",
      description:
        "Feels > Science.\nThe post Olympics to the Media: Avoid ‘Problematic Language’ Like ‘Born Male,’ ‘Biologically Male,’ and ‘Genetically Female’ first appeared on Le·gal In·sur·rec·tion.",
      url: "https://legalinsurrection.com/2024/06/olympics-tells-media-to-avoid-problematic-language-like-born-male-biologically-male-and-genetically-female/",
      urlToImage:
        "https://legalinsurrection.com/wp-content/uploads/2024/06/Paris-Olympics.jpg",
      publishedAt: "2024-06-07T19:09:16Z",
      content:
        "I could probably write eight articles a day on this crap.\r\nThe International Olympic Committee (IOC) released media guidelines addressing athletes “to promote inclusivity and equality.”\r\nYou all know… [+3254 chars]",
    },
    {
      source: {
        id: null,
        name: "New Zealand Herald",
      },
      author: "Kris Shannon",
      title:
        "New Zealand v Afghanistan: Black Caps face uncertainty to begin T20 World Cup",
      description:
        "New Zealand belatedly begin their T20 World Cup against a dangerous Afghanistan today.",
      url: "https://www.nzherald.co.nz/sport/cricket/black-caps/new-zealand-v-afghanistan-black-caps-face-uncertainty-to-begin-t20-world-cup/VQ53V4WP4RF5JFOZMFTMU5AZSI/",
      urlToImage:
        "https://www.nzherald.co.nz/resizer/v2/E4ESCB6R2RHFRB4TSMVZXRMEEA.jpg?auth=2069c09286cc4cbab58e6f33b23bc4568a91ea9980ad245aa6be43ffe9de0fe3&width=1200&height=675&quality=70&smart=true",
      publishedAt: "2024-06-07T18:05:55Z",
      content:
        "Kane Williamson and the Black Caps have spent plenty of time practising. Photo / Getty ImagesThere is plenty of uncertainty surrounding the Black Caps as they belatedly kick off their T20 World Cup.\r… [+3446 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "D Magazine",
      },
      author: "Mike Piellucci",
      title: "Historic Cricket Things Are Going Down in Grand Prairie",
      description:
        "If you’ve been around these parts for a while, you’re aware that we’ve become cricket-pilled over the past year. So it goes when Grand Prairie has become the epicenter of the world’s second-most popular sport and its attempt to conquer America. But as impress…",
      url: "https://www.dmagazine.com/sports/2024/06/cricket-usa-pakistan-world-cup/",
      urlToImage:
        "https://assets.dmagstatic.com/wp-content/uploads/2024/06/Screenshot-2024-06-07-114905.png",
      publishedAt: "2024-06-07T17:48:59Z",
      content:
        "If youve been around these parts for a while, youre aware that weve become cricket-pilled over the past year. So it goes when Grand Prairie has become the epicenter of the worlds second-most popular … [+1665 chars]",
    },
    {
      source: {
        id: null,
        name: "Globalresearch.ca",
      },
      author: "Michael Welch",
      title:
        "From Servant to Master? The New Boss in Town. Welcome The Rise of AI",
      description:
        "All Global Research articles can be read in 51 languages by activating the Translate Website button below the author’s name (only available in desktop version). To receive Global Research’s Daily Newsletter (selected articles), click here. Click the share but…",
      url: "https://www.globalresearch.ca/from-servant-to-master-the-new-boss-in-town-welcome-the-rise-of-ai/5859415",
      urlToImage:
        "https://www.globalresearch.ca/wp-content/uploads/2023/03/Artificial-Intelligence-600x338.jpg",
      publishedAt: "2024-06-07T17:45:01Z",
      content:
        "All Global Research articles can be read in 51 languages by activating the Translate Website button below the authors name (only available in desktop version).\r\nTo receive Global Researchs Daily News… [+7294 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "observer.com",
      title:
        "A Cricket Star Is Also a Top Engineer at Oracle: Tech Leaders With Successful Second Careers",
      description:
        "Saurabh Netravalkar already has a demanding day job as a principal engineer for Oracle, one of the world’s largest software companies. But the 32-year-old still manages to make time for his second career as a cricket player. Netravalkar is a left-arm fast bow…",
      url: "https://biztoc.com/x/cc67304a0439744d",
      urlToImage: "https://c.biztoc.com/p/cc67304a0439744d/s.webp",
      publishedAt: "2024-06-07T17:44:07Z",
      content:
        "Saurabh Netravalkar already has a demanding day job as a principal engineer for Oracle, one of the worlds largest software companies. But the 32-year-old still manages to make time for his second car… [+307 chars]",
    },
    {
      source: {
        id: null,
        name: "Observer",
      },
      author: "Alexandra Tremayne-Pengelly, Alexandra Tremayne-Pengelly",
      title:
        "A Cricket Star Is Also a Top Engineer at Oracle: Tech Leaders With Successful Second Careers",
      description:
        "Saurabh Netravalkar isn't the only notable tech worker to have found success in the world of sports.",
      url: "https://observer.com/2024/06/saurabh-netravalkar-oracle-engineer-cricket-player/",
      urlToImage:
        "https://observer.com/wp-content/uploads/sites/2/2024/06/GettyImages-2156392804.jpg?quality=80",
      publishedAt: "2024-06-07T17:37:45Z",
      content:
        "Saurabh Netravalkar celebrates with teammate Harmeet Singh after the U.S. defeat Pakistan during the ICC Men’s T20 Cricket World Cup. Matt Roberts/ICC via Getty Images\r\nSaurabh Netravalkar already ha… [+3730 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "USA cricket player Aaron Jones feeling 'great' after win",
      description:
        "Jones speaks to the BBC about the team's victory against Pakistan and what he hopes it will do for the sport in the US.",
      url: "https://www.bbc.com/news/videos/cv22klkkzlvo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/6537/live/ff895b30-24e4-11ef-baa7-25d483663b8e.jpg",
      publishedAt: "2024-06-07T17:26:28Z",
      content:
        "In a surprising win, the USA cricket team defeated Pakistan at a T20 World Cup match in Dallas, Texas on Thursday. \r\nPlayer Aaron Jones talks to the BBC about the victory and what he hopes it will do… [+25 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "'Absolute ripper!' - Zafar bowls Tector for 7",
      description:
        "Watch Saad Bin Zafar's \"absolute ripper\" of a delivery to dismiss Harry Tector, leaving Ireland on 41-3 in their ICC Men's T20 Cricket World Cup match against Canada in New York.",
      url: "https://www.bbc.com/sport/cricket/videos/cmllwr7ljejo",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/62b3/live/8d251270-24f1-11ef-80aa-699d54c46324.jpg",
      publishedAt: "2024-06-07T17:17:55Z",
      content:
        "Watch Saad Bin Zafar's \"absolute ripper\" of a delivery to dismiss Harry Tector, leaving Ireland on 41-3 in their ICC Men's T20 Cricket World Cup match against Canada in New York.\r\nFOLLOW LIVE: Canada… [+64 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0822cc06a6734fabbc4e2b0d0eb42a4a";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <h2>New headlines of today</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-3" key={element.url}>
                <Newsitem
                  title={
                    !element.title ? "No any title" : element.title.slice(0, 30)
                  }
                  description={
                    !element.description
                      ? "No any description"
                      : element.description.slice(0, 60)
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        ;
      </div>
    );
  }
}
