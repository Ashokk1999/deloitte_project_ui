import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    alert("Your data is accepted")
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangename}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ad">Address</label>
              <input
                type="text"
                className="form-control"
                id="ad"
                required
                value={this.state.ad}
                onChange={this.onChangead}
                name="ad"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={this.state.city}
                onChange={this.onChangecity}
                name="city"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pin">Pin</label>
              <input
                type="text"
                className="form-control"
                id="pin"
                required
                value={this.state.pin}
                onChange={this.onChangepin}
                name="pin"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone no</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangephone}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="form-control"
                id="Email"
                required
                value={this.state.Email}
                onChange={this.onChangeEmail}
                name="Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                required
                value={this.state.dob}
                onChange={this.onChangedob}
                name="dob"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
