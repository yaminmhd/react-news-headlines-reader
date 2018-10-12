import React, { Component } from "react";
import Article from "./Article";
import { getNewsApi } from "./utils";
import "./App.css";
import LoadingSpinner from "./LoadingSpinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true
    };
  }

  componentDidMount = async () => {
    const articles = await getNewsApi();
    this.setState({
      articles,
      loading: false
    });
  };

  render() {
    const { articles, loading } = this.state;
    let displayArticles;
    loading
      ? (displayArticles = <LoadingSpinner />)
      : (displayArticles = articles.map((article, index) => {
          return <Article key={index} article={article} />;
        }));

    return (
      <div className="App">
        <h1>Latest Articles</h1>
        <i style={{ fontSize: "5rem" }} className="fas fa-newspaper" />
        <div className="card-columns">{displayArticles}</div>
      </div>
    );
  }
}

export default App;
