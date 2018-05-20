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
    presleep_routine: '', //text
    date: '', //date
    currentUser: {}
  };

  //Add a notes section

  handleChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

  toggleChange = event =>
    this.setState({ ...this.state, [event.target.name]: !this.state[event.target.name] });

  handleDaySubmit = event => {
    event.preventDefault();
  };

  setDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    this.setState({ ...this.state, date: `${yyyy}-${mm}-${dd}` });
  };

  setCurrentUser = () => {
    this.setState({ ...this.state, currentUser: this.props.currentUser });
  };

  componentDidMount() {
    this.setDate();
    this.setCurrentUser();
  }

  render() {
    return (
      <div>
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

        <DateInput name="date" handleChange={this.handleChange} date={this.state.date} />
        <button onClick={this.handleWeekSubmit}>Log It</button>
      </div>
    );
  }
}

export default DayForm;
