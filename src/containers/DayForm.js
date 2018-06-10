import React, { Component } from 'react';
import DateInput from '../components/DateInput';
import SliderInput from '../components/SliderInput';
import BoolInput from '../components/BoolInput';
import TextInput from '../components/TextInput';

class DayForm extends Component {
  state = {
    hunger: 0, // 0-5
    cravings: 0, // 0-5
    satiety: 0, // 0-5
    energy_level: 0, // 0-5
    well_being: 0, // 0-5
    processed_carbs: 0, // 0-5
    stress_reduction_am: false, //boolean
    stress_reduction_pm: false, //boolean
    after_meal_walk_am: false, //boolean
    after_meal_walk_pm: false, //boolean
    joyful_movement: '', //text
    presleep_routine: '' //text
  };

  //Add a notes section?

  defaultState = (() => this.state)();

  handleChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

  toggleChange = event =>
    this.setState({ ...this.state, [event.target.name]: !this.state[event.target.name] });

  handleDaySubmit = event => {
    event.preventDefault();
  };

  handleDaySubmit = () => {
    const dayData = {
      hunger: this.state.hunger,
      cravings: this.state.cravings,
      satiety: this.state.satiety,
      energy_level: this.state.energy_level,
      well_being: this.state.well_being,
      processed_carbs: this.state.processed_carbs,
      stress_reduction_am: this.state.stress_reduction_am,
      stress_reduction_pm: this.state.stress_reduction_pm,
      after_meal_walk_am: this.state.after_meal_walk_am,
      after_meal_walk_pm: this.state.after_meal_walk_pm,
      joyful_movement: this.state.joyful_movement,
      presleep_routine: this.state.presleep_routine,
      user_id: this.props.currentUser.id,
      date: this.props.date
    };

    fetch('https://skinnybitches-api.herokuapp.com/days', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dayData)
    })
      .then(response => response.json())
      .then(alert('Day Logged!! Good Job!!!!'));
  };

  render() {
    return (
      <div className="form">
        <h2>Day Form</h2>
        <SliderInput name="hunger" value={this.state.hunger} handleChange={this.handleChange} />
        <SliderInput name="cravings" value={this.state.cravings} handleChange={this.handleChange} />
        <SliderInput name="satiety" value={this.state.satiety} handleChange={this.handleChange} />
        <SliderInput
          name="energy_level"
          value={this.state.energy_level}
          handleChange={this.handleChange}
        />
        <SliderInput
          name="well_being"
          value={this.state.well_being}
          handleChange={this.handleChange}
        />
        <SliderInput
          name="processed_carbs"
          value={this.state.processed_carbs}
          handleChange={this.handleChange}
        />
        <BoolInput
          name="stress_reduction_am"
          value={this.state.stress_reduction_am}
          handleChange={this.toggleChange}
        />
        <BoolInput
          name="stress_reduction_pm"
          value={this.state.stress_reduction_pm}
          handleChange={this.toggleChange}
        />
        <BoolInput
          name="after_meal_walk_am"
          value={this.state.after_meal_walk_am}
          handleChange={this.toggleChange}
        />
        <BoolInput
          name="after_meal_walk_pm"
          value={this.state.after_meal_walk_pm}
          handleChange={this.toggleChange}
        />
        <TextInput
          name="joyful_movement"
          value={this.state.joyful_movement}
          handleChange={this.handleChange}
        />
        <TextInput
          name="presleep_routine"
          value={this.state.presleep_routine}
          handleChange={this.handleChange}
        />

        <DateInput
          name="date"
          handleDateChange={this.props.handleDateChange}
          date={this.props.date}
        />

        <button onClick={this.handleDaySubmit}>Log It</button>
      </div>
    );
  }
}

export default DayForm;
