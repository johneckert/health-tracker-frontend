import React from 'react';

const BoolInput = props => {
  const createTitle = () => {
    const titleArr = props.name.split('_');
    titleArr.map(word => {
      let wordArr = word.split('');
      wordArr[0] = wordArr[0].toUpperCase;
      return wordArr.join('');
    });
    return titleArr.join(' ');
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
