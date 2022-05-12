import React, { useState } from 'react'
import "./SubscriptionForm.scss";
import Button from '../Button/Button'


const SubscriptionForm = () => {
  const [email, setEmail] = useState("")
  
  const handleInput =(event)=>{
    setEmail(event.target.value);
    console.log(event.target.value)
  }
  const handleSumbit = (e) =>{
    e.preventDefault();
    console.log(email)
  }
  return (
    <form onSubmit={handleSumbit} className="subscription-form">
      <input placeholder='Enter email address' type="email" value={email} onInput={handleInput} required/>
      <Button buttonText={"Subscribe"}/>
    </form>
  )
}

export default SubscriptionForm