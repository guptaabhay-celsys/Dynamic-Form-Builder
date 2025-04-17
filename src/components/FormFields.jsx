import React, { useState } from 'react';
import CustomField from './CustomField';
import { Button } from '@mui/material';

const FormFields = ({ fieldsData }) => {
  const [fieldValue, setFieldValue] = useState({});

  const handleChange = (event, field) => {
    const { id, type, action } = field;

    let value;
    if (type === 'multiSelect') {
      value = event.target.value.toString().split(',');
    } else {
      value = event.target.value;
    }

    setFieldValue((prev) => ({
      ...prev,
      [id] : value,
    }));
    
    if(action){
      action();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', fieldValue);

    const buttonField = fieldsData.find((field) => field.type === 'button');
      buttonField.action();
  };

  return (
    <form onSubmit={handleSubmit}>
      {fieldsData.map((field) => {
        if (field.type === 'button') {
          return (
            <Button key={field.id} variant='outlined' type="submit">
              {field.value}
            </Button>
          );
        }

        return (
          <CustomField key={field.id} field={field} value={fieldValue[field.id] || (field.type === 'multiSelect' ? [] : (field.type === 'text') ? field.value : "")} onChange={(e) => handleChange(e, field)} />
        );
      })}
    </form>
  );
};

export default FormFields;