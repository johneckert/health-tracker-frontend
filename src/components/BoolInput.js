import React from 'react';

const BoolInput = props => {
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
        type="checkbox"
        name={props.name}
        checked={props.value}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default BoolInput;
