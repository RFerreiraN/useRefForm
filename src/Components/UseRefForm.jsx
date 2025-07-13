import {useState} from 'react'

export const UseRefForm = () => {
  const [inputValue, setInputValue] = useState({
    email : '',
    password : ''
  })

  const { email, password } = inputValue;

  const handleInput = ({target}) => {
    const { name, value } = target;
    setInputValue({
      ...inputValue,
      [name] : value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(
      !inputValue.email?.trim() ||
      !inputValue.password?.trim()
    ) return
    console.log(inputValue)
    resetForm()
  }

  const resetForm = () => {
    setInputValue({
      email : '',
      password : ''
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
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
