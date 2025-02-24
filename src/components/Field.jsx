
import React from 'react'

function Field({label,name,value}) {
  return (
    <div className='field'>
        <label>{label}</label>
        <input type="text" name={name} defaultValue={value} />
    </div>
  );
}

export default Field;