import {useState} from 'react'

export const useFormRef = () => {

  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  })


  const handleInput = ({ target }) => {
    const { name, value } = target;
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (
      !inputValue.email?.trim() ||
      !inputValue.password?.trim()
    ) return
    console.log(inputValue)
    resetForm()
  }

  const resetForm = () => {
    setInputValue({
      email: '',
      password: ''
    })
  }

  return {
    handleInput,
    onSubmit,
    resetForm,
    inputValue
  }
}
