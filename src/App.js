import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import FormBlock from './components/FormBlock';

const initValues = () => {
  let initValues = [];
  for (let i=0; i < 50; i++) {
    initValues = [ 
        ...initValues, 
        {
            name: "Janko",
            surname: "Hrasko",
            email: "hrasko@gmail.com",
            phone: "0959111000",
            city: "Cabaj",
            street: "Hlavna",
            number: i,
            postalCode: "95117",
            gender: "male",
            emailInfo: true,
            smsInfo: false
        }
    ];
  }
  return initValues;
}

function App() {

  const [values, setValues] = useState(() => initValues());
  const ref = useRef(initValues());

  const getData = async () => {
    return fetch('http://localhost:5500/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(res => {
      setValues(res);
    });
  }
  
  const postData = (data) => {
    console.log('posting data', data);
    fetch('http://localhost:5500/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log('Response', res);
      });
  }

  const onChangeBlockCb = (block, prop, value) => {
    if (prop === "name") {
      const v = ref.current.map(val => {
        return {
          ...val,
          name: value
        };
      });
      setValues(v);
      return;
    }
    const v = ref.current.map((val, i) => {
      return block === i ? { ...val, [prop]: value } : val;
    });
    setValues(v);
  };

  useEffect (() => {
    getData();
  }, []);

  useEffect(() => {
    ref.current = values;
  }, [values]);

return (
  <form className="w3-card" onSubmit={() => postData(values)}>
    {
      [...values].map((v, i) => 
        <FormBlock
            key={i}
            values={v}
            block={i}
            onChangeBlockCb={onChangeBlockCb}
        />)
    }
    <input type="submit" hidden={true}/>
  </form>
  );
}

export default App;
