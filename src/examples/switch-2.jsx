import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class NewsItem extends React.Component {
  constructor() {
    super();
    this.state = {
      newsStory: 'empty news story',
    };
  }

  // eslint-disable-next-line react/sort-comp
  componentDidUpdate(prevProps) {
    const oldNewsId = prevProps.match.params.newsId;
    const newNewsId = this.props.match.params.newsId;

    if (oldNewsId !== newNewsId) {
      fetch(`http://localhost:3000/news/${newNewsId}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({
            newsStory: data.title,
          });
        });
    }
  }

  componentDidMount() {
    // eslint-disable-next-line prefer-destructuring
    const newsId = this.props.match.params.newsId;
    fetch(`http://localhost:3000/news/${newsId}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          newsStory: data.title,
        });
      });
  }

  render() {
    return <h1>{this.state.newsStory}</h1>;
  }
}

const Users = () => <h1>Users</h1>;

const NotFound = () => <h1>Not Found</h1>;

const App = () => (
  <div>
    <Link to="/news/weather-1">Uk Weather</Link>{' '}
    <Link to="/news/uk-2">Lancashire Tremor</Link>{' '}
    <Link to="/news/world-3">Africa Fires</Link>{' '}
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/news/:category-:newsId" component={NewsItem} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

// try reordering

export default App;
