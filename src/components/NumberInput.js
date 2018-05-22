import React from 'react';

const NumberInput = props => {
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
        type="number"
        step="0.01"
        name={props.name}
        value={parseInt(props.value, 10)}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default NumberInput;
