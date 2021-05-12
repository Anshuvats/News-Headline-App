import React from "react";
import "../style.css";
const countries = { in: "INDIA", us: "USA",ru:"RUSSIA" };
export default class CountryList extends React.Component{
    render() {
    const {fetchNews,setLoader}=this.props
        return (
            <div className="countrylist-container">
                {
                    Object.keys(countries).map((code) => {
                        return <button key={code} onClick={() => { setLoader(); fetchNews(code) }}>{countries[code]}</button>
                    })
                }
            </div>
        )
    }
}