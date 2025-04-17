import React, { useState } from 'react';
import CustomField from './CustomField';
import { Button } from '@mui/material';

const FormFields = ({ fieldsData }) => {
  const [fieldValue, setFieldValue] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event, field) => {
    const { id, type, action } = field;

    let value;
    if (type === 'multiSelect') {
      value = event.target.value.toString().split(',');
    } else {
      value = event.target.value;
    }
    setFieldValue((prev) => ({...prev, [id]: value}))
    setErrors((prev) => ({...prev, [id]: ''}));

    if (action) {
      action();
    }
  };

  const validateFields = () => {
    const fieldErrors = {};

    fieldsData.forEach((field) => {
      const { id, type, condition } = field;
      const value = fieldValue[id];

      if (Object.keys(condition).length > 0) {
        if (type === 'text') {
          if (value.trim().length < (condition.minLength)) {
            fieldErrors[id] = `Minimum ${condition.minLength} characters required`;
          }
        }
        
        if (type === 'multiSelect') {
          if (value.length < (condition?.minItems)) {
            fieldErrors[id] = `Select at least ${condition.minItems} items`;
          }
        }

        if (type === 'singleSelect') {
          if (value === '') {
            fieldErrors[id] = `Please select a value`;
          }
        }
      }
    });

    setErrors(fieldErrors);

    if(Object.keys(fieldErrors).length === 0)
      return true;
    else 
      return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }
    console.log('Form Submitted:', fieldValue);

    const buttonField = fieldsData.find((field) => field.type === 'button');
    if (buttonField?.action) {
      buttonField.action();
    }
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
          <CustomField key={field.id} field={field} value={fieldValue[field.id] || (field.type === 'multiSelect' ? [] : '')} onChange={(e) => handleChange(e, field)} error={errors[field.id]} />
        );
      })}
    </form>
  );
};

export default FormFields;
