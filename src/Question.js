import React from "react";
import firebase from "./config/Firebase";
import FormControl from "@material-ui/core/FormControl";
import ControlLabel from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";

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
  };

  addQuestion = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("questions").add({
      choices: this.state.choices,
      correctAnswers: this.state.correctAnswers,
      difficulty: this.state.difficulty,
      images: this.state.images,
      questions: this.state.questions
    });
    this.setState({
      choices: "",
      correctAnswers: "",
      difficulty: 0,
      images: "",
      questions: ""
    });
  };

  render() {
    return (
      <form horizontal onSubmit={this.addQuestion}>
        <FormGroup controllId="formbasicText">
          <ControlLabel>
            Choices:
            <input
              type="text"
              name="choices"
              placeholder="Choices"
              onChange={this.updateInput}
            />
          </ControlLabel>
          <ControlLabel>
            Correct Answers:
            <input
              type="text"
              name="correctAnswers"
              placeholder="correct answer"
              onChange={this.updateInput}
            />
          </ControlLabel>
          <ControlLabel>
            Difficulty:
            <input
              type="number"
              name="difficulty"
              placeholder="difficulty"
              onChange={this.updateInput}
            />
          </ControlLabel>
          <ControlLabel>
            Images:
            <input
              type="text"
              name="images"
              placeholder="images"
              onChange={this.updateInput}
            />
          </ControlLabel>
          <ControlLabel>
            Questions:
            <input
              type="text"
              name="questions"
              placeholder="Enter the question"
              onChange={this.updateInput}
            />
          </ControlLabel>
          <button type="submit">Submit</button>
        </FormGroup>
      </form>
    );
  }
}

export default Question;
