import {useState, useRef, useEffect} from 'react'
import { useFormRef } from '../Hooks/useFormRef';

export const UseRefForm = () => {

  const {onSubmit, resetForm, handleInput, inputValue} = useFormRef()

  const { email, password } = inputValue;

  const focusRef = useRef()

  useEffect(() => {
    focusRef.current.focus()
  } , [])

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          ref={focusRef}
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleInput}

        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
