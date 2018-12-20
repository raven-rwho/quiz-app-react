import React from 'react';
import firebase from "./firebase";

class Question extends React.Component {
    constructor() {
        super();
        this.state = {
         choices: "",
         correctAnswers: "",
         difficulty: -1,
         images: "",
         questions: ""
        };
      }

      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

  render() {
    return (
        <form>
          <input
            type="text"
            name="choices"
            placeholder="Choices"
            onChange={this.updateInput}
          />
          <input
            type="text"
            name="correctAnswers"
            placeholder="corrext answer"
            onChange={this.updateInput}
          />
          <input
            type="number"
            name="difficulty"
            placeholder="difficulty"
            onChange={this.updateInput}
          />
          <input
            type="text"
            name="images"
            placeholder="images"
            onChange={this.updateInput}
          />
          <input
            type="text"
            name="questions"
            placeholder="Enter the question"
            onChange={this.updateInput}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }

export default Question;