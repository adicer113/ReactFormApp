import React, { memo } from 'react';

function SelectInput({ name, placeholder, initValue, onChangeCb }) {
    // console.log("render");
    return (
        <label>
            {placeholder} 
            <select
                className="w3-select"
                name={name}
                value={initValue === "male" ? "male" : "female"}
                onChange={e => onChangeCb(name, e.target.value)}
            >
                <option
                    value="male"
                >
                    Muž
                </option>
                <option
                    value="female"
                >
                    Žena
                </option>
            </select>
        </label>
    );
}

export default memo(SelectInput, (prevProps, nextProps) => { return prevProps.initValue === nextProps.initValue; });
// export default SelectInput;
