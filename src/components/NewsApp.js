import React from "react";
import CountryList from "./CountryList";
import NewsList from "./NewsList";


export default class NewsApp extends React.Component{

    state = {
    countryChosen:"in",
        news: [],
        loader:false
    }
    
    setLoader=()=>{
        this.setState({
          loader:true
      })
    }

    fetchNews = (countryCode) => {
        const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=c632afcd124f48c099bbba2608c31c7a`;
        fetch(NEWS_URL).then((response)=> {
            return response.json()
        }).then((json) => {
            this.setState({
                news: json.articles,
                loader:false
            })
        });
    }

    componentDidMount() {
        this.fetchNews(this.state.countryChosen)
    }


    render() {

        const { news, countryChosen,loader } = this.state;

        return (
            <div>
                <CountryList setLoader={this.setLoader} countryChosen={countryChosen} fetchNews={this.fetchNews} />
                {loader?<h2 style={{textAlign:"center"}}>Loading...</h2>:<NewsList news={news}/>}
            </div>
        )
    }
}