import React, { Component } from 'react';

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
    date: '' //date
  };

  handleChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

  toggleChange = event =>
    this.setState({ ...this.state, [event.target.name]: !this.state[event.target.name] });

  render() {
    console.log(this.state);
    return (
      <form>
        <h2>Day Form</h2>
        <label htmlFor="hunger">Hunger</label>
        <input
          type="range"
          max="5"
          step="1"
          name="hunger"
          list="ticks"
          value={this.state.hunger}
          onChange={this.handleChange}
        />
        <span>{this.state.hunger}</span>
        <br />
        <label htmlFor="cravings">Cravings</label>
        <input
          type="range"
          max="5"
          step="1"
          name="cravings"
          list="ticks"
          value={this.state.cravings}
          onChange={this.handleChange}
        />
        <span>{this.state.cravings}</span>
        <br />
        <label htmlFor="satiety">Satiety</label>
        <input
          type="range"
          max="5"
          step="1"
          name="satiety"
          list="ticks"
          value={this.state.satiety}
          onChange={this.handleChange}
        />
        <span>{this.state.satiety}</span>
        <br />
        <label htmlFor="energy_level">Energy Level</label>
        <input
          type="range"
          max="5"
          step="1"
          name="energy_level"
          list="ticks"
          value={this.state.energy_level}
          onChange={this.handleChange}
        />
        <span>{this.state.energy_level}</span>
        <br />
        <label htmlFor="well_being">Well Being</label>
        <input
          type="range"
          max="5"
          step="1"
          name="well_being"
          list="ticks"
          value={this.state.well_being}
          onChange={this.handleChange}
        />
        <span>{this.state.well_being}</span>
        <br />
        <label htmlFor="processed_carbs">Processed Carbs</label>
        <input
          type="range"
          max="5"
          step="1"
          name="processed_carbs"
          list="ticks"
          value={this.state.processed_carbs}
          onChange={this.handleChange}
        />
        <span>{this.state.processed_carbs}</span>
        <br />
        <label htmlFor="stress_reduction_am">Stress Reduction AM?</label>
        <input
          type="checkbox"
          id="stress_reduction_am"
          name="stress_reduction_am"
          checked={this.state.stress_reduction_am}
          value={this.state.stress_reduction_am}
          onChange={this.toggleChange}
        />
        <br />
        <label htmlFor="stress_reduction_pm">Stress Reduction PM?</label>
        <input
          type="checkbox"
          id="stress_reduction_pm"
          name="stress_reduction_pm"
          checked={this.state.stress_reduction_pm}
          value={this.state.stress_reduction_pm}
          onChange={this.toggleChange}
        />
        <br />
        <label htmlFor="after_meal_walk_am">After Meal Walk AM?</label>
        <input
          type="checkbox"
          id="after_meal_walk_am"
          name="after_meal_walk_am"
          checked={this.state.after_meal_walk_am}
          value={this.state.after_meal_walk_am}
          onChange={this.toggleChange}
        />
        <br />
        <label htmlFor="after_meal_walk_pm">After Meal Walk PM?</label>
        <input
          type="checkbox"
          id="after_meal_walk_pm"
          name="after_meal_walk_pm"
          checked={this.state.after_meal_walk_pm}
          value={this.state.after_meal_walk_pm}
          onChange={this.toggleChange}
        />
        <br />
        <label htmlFor="joyful_movement">Joyful Movement</label>
        <input
          type="text"
          name="joyful_movement"
          value={this.state.joyful_movement}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="presleep_routine">Presleep Routine</label>
        <input
          type="text"
          name="presleep_routine"
          value={this.state.presleep_routine}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
        <br />
        <input type="submit" />

        <datalist id="ticks">
          <option value="0" label="0" />
          <option value="1" label="1" />
          <option value="2" label="2" />
          <option value="3" label="3" />
          <option value="4" label="4" />
          <option value="5" label="5" />
        </datalist>
      </form>
    );
  }
}

export default DayForm;
