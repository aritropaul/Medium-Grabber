import React, { Component } from 'react';
import parser from 'fast-xml-parser'
import './App.css';
import Articles from './Components/Articles';
import './normalize.css';
import './skeleton.css';

class App extends Component {

  state = {
    title : '',
    desc : '',
    articles : []
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://medium.com/feed/gdg-vit")
    .then(res => res.text())
    .then((data) => {
      var json = parser.parse(data)
      console.log(json["rss"]["channel"]["item"])
      this.setState({title: json["rss"]["channel"]["title"]})
      this.setState({desc: json["rss"]["channel"]["description"]})
      this.setState({articles: json["rss"]["channel"]["item"]})
    })
    .catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <div className="App container">
        <h1>{this.state.title}</h1>
        <p>{this.state.desc}</p>
        <Articles articles={this.state.articles}></Articles>
      </div>
    )
  }
}


export default App;
