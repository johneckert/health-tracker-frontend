import React from 'react';

const SliderInput = props => {
  const createTitle = () => {
    const capArr = props.name.split('_').map(word => {
      let wordArr = word.split('');
      wordArr[0] = wordArr[0].toUpperCase();
      if (word === 'am' || word === 'pm') {
        wordArr[1] = wordArr[1].toUpperCase();
      }
      return wordArr.join('');
    });
    return capArr.join(' ');
  };

  return (
    <div>
      <span>{createTitle()}</span>
      <input
        type="range"
        max="5"
        step="1"
        name={props.name}
        list="ticks"
        value={props.value}
        onChange={props.handleChange}
      />
      <span>{props.value}</span>
      <datalist id="ticks">
        <option value="0" label="0" />
        <option value="1" label="1" />
        <option value="2" label="2" />
        <option value="3" label="3" />
        <option value="4" label="4" />
        <option value="5" label="5" />
      </datalist>
    </div>
  );
};

export default SliderInput;
