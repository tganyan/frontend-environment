import React from 'react';
import Header from '../header/header';
import faker from 'faker';
import cowsay from 'cowsay-browser';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
    this.state.content = cowsay.say({
      text: faker.lorem.words(4),
    });
  }

  handleCowSay = () => {
    this.setState(() => {
      return {
        content: cowsay.say({
          text: faker.lorem.words(4),
        }),
      }
    })
  };

  render() {
    return (
        <body>
          <div>
            <Header/>
            <pre>
              { this.state.content }
            </pre>
            <button onClick={this.handleCowSay}>moo</button>
          </div>
        </body>
    )
  }
}

export default App;
