import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const { posts } = this.state;
    const newPosts = [];
    newPosts.push({
      img: 'https://randomuser.me/api/portraits/men/92.jpg',
      author: 'Thiago Yudi Fukunaga',
      createdAt: '2019-05-17 00:49:42',
      text:
        'Mauris a mi arcu. Duis vitae condimentum ligula, mattis tincidunt justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras at arcu in urna posuere ullamcorper tincidunt at enim. Suspendisse at malesuada nisi. Fusce tempor tincidunt pulvinar. Suspendisse porttitor libero diam, non pharetra urna hendrerit non. Fusce est arcu, vehicula id sagittis ac, facilisis in lorem. Sed non nibh imperdiet justo bibendum mattis non at arcu. Pellentesque et ante sed arcu consectetur volutpat. Fusce laoreet vel est non aliquet. Etiam tellus risus, laoreet in sem id, volutpat consequat sem. Aliquam ullamcorper lacus eros. Fusce viverra fermentum tincidunt. Aliquam ultrices, eros vitae blandit cursus, eros metus elementum nisi, eget tristique neque odio et neque. Sed rhoncus magna porta euismod facilisis. Donec dignissim ligula eu interdum tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rutrum justo non metus luctus finibus. Proin fringilla eu felis eu malesuada. Donec molestie est in turpis molestie, non sollicitudin velit fringilla. Fusce dapibus elit et auctor ullamcorper. Nunc rhoncus velit velit, vel pharetra libero aliquet sed. Vestibulum vestibulum eget sem non bibendum. Nullam eget felis rhoncus, malesuada arcu ac, porttitor dolor. Pellentesque varius ullamcorper sem, posuere egestas elit molestie ornare. Nunc tincidunt mollis libero, quis luctus arcu venenatis mollis. Aenean sollicitudin massa scelerisque varius laoreet.',
    });
    newPosts.push({
      img: 'https://randomuser.me/api/portraits/men/91.jpg',
      author: 'Rafael Napalme',
      createdAt: '2019-05-17 00:45:29',
      text:
        'Donec dignissim mi vitae dui ullamcorper iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis id pellentesque tellus. Praesent luctus ullamcorper dapibus. Maecenas viverra interdum libero, quis eleifend augue. Phasellus vel facilisis nunc. Vestibulum consequat malesuada ex at blandit. Sed pellentesque lacus eu nunc semper, at dignissim massa luctus. Vivamus nulla mauris, dignissim vitae mollis a, finibus a purus. Donec ornare, velit id vehicula bibendum, neque nunc condimentum dui, id ultricies nulla mi vel dui. Etiam mollis purus rhoncus felis consectetur, non iaculis tortor ornare. Vestibulum eleifend ac ex vitae ultricies. Maecenas viverra nisl eget justo iaculis, non pulvinar quam vestibulum. Pellentesque nunc ante, imperdiet quis tincidunt at, viverra non libero. Vivamus et odio elit.',
    });
    newPosts.push({
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      author: 'Fael Sandmore',
      createdAt: '2019-05-17 00:43:05',
      text:
        'Nulla vestibulum sem sit amet gravida semper. Etiam at orci sed justo pretium dapibus. Nam consectetur venenatis rhoncus. Donec vel facilisis nibh, quis placerat ipsum. Phasellus iaculis pharetra turpis, in tempor justo blandit id. Quisque congue, leo quis sodales feugiat, dui ipsum posuere quam, id ultrices risus nisl id augue. Donec venenatis nisl id rutrum blandit. Ut ac fermentum nisi, tempus scelerisque neque. Donec blandit lacus vel diam facilisis pretium. Pellentesque eu ex quis nunc rutrum vulputate non eu nibh. Quisque gravida arcu eros, nec pharetra nibh dictum in. Nulla commodo a nisl nec tempus. Sed id tempus elit, sed mollis nulla. Suspendisse commodo sem eu magna faucibus, et tempor quam bibendum. Morbi vel blandit lorem. Aliquam justo metus, eleifend tincidunt leo sit amet, ullamcorper rhoncus tellus. Curabitur ante quam, euismod vel diam aliquam, aliquam posuere diam. Nullam elementum, ipsum sed semper aliquam, ligula tortor euismod nulla, a venenatis diam lorem lobortis mauris. Suspendisse condimentum orci quis felis finibus vehicula. Donec auctor, turpis sit amet elementum mollis, nisi nulla iaculis metus, vel dictum dui nisi id lorem.',
    });

    this.setState({ posts: posts.concat(newPosts) });
  }

  render() {
    const { posts } = this.state;
    const list = posts.map(p => <Post key={p.author} post={p} />);
    return (
      <div>
        <Header title="RocketBox" />
        <div className="main-wrapper">
          <div className="content">{list}</div>
        </div>
      </div>
    );
  }
}

export default App;
