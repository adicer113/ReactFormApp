import React from 'react';
import TextInput from './TextInput'
import SelectInput from './SelectInput';
import CheckboxInput from './CheckboxInput';

function FormBlock({block, values, onChangeBlockCb }) {
    
    const onChangeCb = (name, value) => {
        onChangeBlockCb(block, name, value);
    }

    return (
        <>
            <div className="w3-container w3-blue">
                <h4>{block}</h4>
            </div>
            <div className="formBlock">
                <TextInput
                    name="name"
                    placeholder="Meno"
                    initValue={values.name}
                    onChangeCb={onChangeCb}
                />
                <TextInput
                    name="surname"
                    placeholder="Priezvisko"
                    initValue={values.surname}
                    onChangeCb={onChangeCb}
                />
                <TextInput
                    name="email"
                    placeholder="Email"
                    initValue={values.email}
                    onChangeCb={onChangeCb}
                />
                <TextInput
                    name="phone"
                    placeholder="Telefon"
                    initValue={values.phone}
                    onChangeCb={onChangeCb}
                />
                <TextInput
                    name="city"
                    placeholder="Mesto"
                    initValue={values.city}
                    onChangeCb={onChangeCb}
                />
                <TextInput
                    name="street"
                    placeholder="Ulica"
                    initValue={values.street}
                    onChangeCb={onChangeCb}
                />
                <TextInput
                    name="number"
                    placeholder="Číslo domu"
                    initValue={values.number}
                    onChangeCb={onChangeCb}
                />
                <TextInput
                    name="postalCode"
                    placeholder="PSČ"
                    initValue={values.postalCode}
                    onChangeCb={onChangeCb}
                />
                <SelectInput
                    name="gender"
                    placeholder="Pohlavie"
                    initValue={values.gender}
                    onChangeCb={onChangeCb}
                />
                <CheckboxInput
                    name="emailInfo"
                    placeholder="Zaslat info emailom"
                    initValue={values.emailInfo}
                    onChangeCb={onChangeCb}
                />
                <CheckboxInput
                    name="smsInfo"
                    placeholder="Zaslat info SMS"
                    initValue={values.smsInfo}
                    onChangeCb={onChangeCb}
                />
            </div>
        </>
      );
}

export default FormBlock;