import React, { Component } from "react";
import Article from "./Article";
import { getNewsApi } from "./utils";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount = async () => {
    const articles = await getNewsApi();
    this.setState({
      articles
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <h1>Latest Articles</h1>
        <i style={{ fontSize: "5rem" }} className="fas fa-newspaper" />
        <div className="card-columns">
          {articles.map((article, index) => {
            return <Article key={index} article={article} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
