import React, { memo } from 'react';

function CheckboxInput({ name, placeholder, initValue, onChangeCb }) {
    // console.log("render");
    return (
        <>
            <input
                className="w3-check"
                type="checkbox"
                name={name}
                checked={initValue}
                onChange={e => onChangeCb(name, e.target.checked)}
            ></input>
            <label> {placeholder} </label>
        </>
    );
}

export default memo(CheckboxInput, (prevProps, nextProps) => { return prevProps.initValue === nextProps.initValue; });
// export default CheckboxInput;