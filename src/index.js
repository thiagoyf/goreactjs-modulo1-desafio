import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './Header';

import './style.scss';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const posts = [];
    posts.push({
      img: 'https://randomuser.me/api/portraits/men/92.jpg',
      author: 'Thiago Yudi Fukunaga',
      createdAt: '2019-05-15 20:00:42',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu massa vel arcu dapibus fermentum. Sed efficitur maximus quam, vel sollicitudin urna cursus ut. Quisque a mollis ipsum. Ut tristique luctus odio. Proin mauris erat, eleifend eget fringilla in, interdum quis ante. Nunc imperdiet nibh vel ex gravida, at tristique ipsum fringilla. Duis ornare nisl eget tincidunt molestie. Sed vestibulum ullamcorper turpis ut pulvinar. Curabitur ornare interdum lectus, in tempus ligula vehicula non. Pellentesque sed felis venenatis, auctor lacus quis, fermentum risus. Quisque eleifend cursus elit, eu hendrerit purus volutpat eu. Mauris et fermentum ante, at porta ipsum. Nulla nibh quam, sagittis eget congue nec, egestas vulputate lorem. Suspendisse at diam velit. Etiam placerat ut lacus sed blandit. Quisque tincidunt non massa at posuere.',
    });
    posts.push({
      img: 'https://randomuser.me/api/portraits/men/91.jpg',
      author: 'Lorem Tree',
      createdAt: '2019-05-15 20:10:29',
      text:
        'Aenean eu massa vel arcu dapibus fermentum. Sed efficitur maximus quam, vel sollicitudin urna cursus ut. Etiam placerat ut lacus sed blandit. Quisque tincidunt non massa at posuere.',
    });
    posts.push({
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      author: 'Fael Darus',
      createdAt: '2019-05-15 20:18:31',
      text:
        'Aenean eu massa vel arcu dapibus fermentum. Sed efficitur maximus quam, vel sollicitudin urna cursus ut. Etiam placerat ut lacus sed blandit. Quisque tincidunt non massa at posuere.',
    });
    this.setState({ posts });
  }

  render() {
    const posts = this.state;
    return (
      <div>
        <Header title="RocketBox" />
        <div className="main-wrapper">
          <div className="content">
            <div className="post">
              <div className="post-header">
                <img src="https://randomuser.me/api/portraits/men/92.jpg" alt="" />
                <div>
                  <strong>Thiago Yudi Fukunaga</strong>
                  <span>há 3 min</span>
                </div>
              </div>
              <hr className="post-separator" />
              <div className="post-body">
                <p>
                  Mauris aenean eu massa vel arcu dapibus fermentum. Sed efficitur maximus quam, vel
                  sollicitudin urna cursus ut. Etiam placerat ut lacus sed blandit. Quisque
                  tincidunt non massa at posuere.
                </p>
              </div>
            </div>
            <div className="post">
              <div className="post-header">
                <img src="https://randomuser.me/api/portraits/men/92.jpg" alt="" />
                <div>
                  <strong>Thiago Yudi Fukunaga</strong>
                  <span>3 minutos atrás</span>
                </div>
              </div>
              <hr className="post-separator" />
              <div className="post-body">
                <p>
                  Aenean eu massa vel arcu dapibus fermentum. Sed efficitur maximus quam, vel
                  sollicitudin urna cursus ut. Etiam placerat ut lacus sed blandit. Quisque
                  tincidunt non massa at posuere.
                </p>
              </div>
            </div>
            <div className="post">
              <div className="post-header">
                <img src="https://randomuser.me/api/portraits/men/92.jpg" alt="" />
                <div>
                  <strong>Thiago Yudi Fukunaga</strong>
                  <span>3 minutos atrás</span>
                </div>
              </div>
              <hr className="post-separator" />
              <div className="post-body">
                <p>
                  Aenean eu massa vel arcu dapibus fermentum. Sed efficitur maximus quam, vel
                  sollicitudin urna cursus ut. Etiam placerat ut lacus sed blandit. Quisque
                  tincidunt non massa at posuere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
