import React, { memo } from 'react';

function TextInput({ name, placeholder, initValue, onChangeCb }) {

    return (
        <label>
            {placeholder}
            <input 
                className="w3-input"
                type="text"
                name={name}
                placeholder={placeholder}
                value={initValue}
                onChange={e => onChangeCb(name, e.target.value)}
            ></input>
        </label>
    );
}

export default memo(TextInput, (prevProps, nextProps) => { return prevProps.initValue === nextProps.initValue; });
// export default TextInput;