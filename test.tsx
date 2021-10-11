import { useState } from 'react'

export default function InputTest(){
  const [nameValue, setNameValue] = useState('Chris')
  return(
    <>
      <input 
        value={nameValue}
        onChange={(e) => {
          setNameValue(e.target.value)
        }}
      />
    </>
  )
}