import React from 'react';

const TextInput = props => {
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
    <div className="input">
      <span>{createTitle()}</span>
      <input
        type="text"
        name={props.name}
        checked={props.value}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextInput;
