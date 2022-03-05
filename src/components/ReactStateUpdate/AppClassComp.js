import React from 'react';

class AppClassComp extends React.Component {
    state = {
      count: 0
    };
    handleClick = async () => {
      const { count } = this.state;
      console.log("Class:Count before update", count);
      await this.setState({ count: count + 1 });
      console.log("Class:Count post update", this.state.count);
    };
    render() {
      const { count } = this.state;
      return (
        <div className="container">
          <h1>Hello Class Component!</h1>
          <p>Press button to see the magic :)</p>
          <button onClick={this.handleClick}>Increment</button>
          {!!count && (
            <div className="message">You pressed button {count} times</div>
          )}
        </div>
      );
    }
  }

  export default AppClassComp;