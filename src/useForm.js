import {useState, useEffect} from 'react'
import validateInfo from "./validateInfo";
import FormSuccess from "./components/FormSuccess";

const useForm = () => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        date: '',
        phone: '',
        site: '',
        aboutUser: '',
        technologies: '',
        lastProject: '',
    })

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const [errors, setErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [submittedValues, setSubmittedValues] = useState({})

    const handleSubmit = event => {
        event.preventDefault()
        setErrors(validateInfo(values))
        setSubmittedValues({
            ...values
        })
        setFormSubmitted(true)
    }


    const handleClear = event => {
        event.preventDefault()
        setValues({
            name: '',
            lastName: '',
            date: '',
            phone: '',
            site: '',
            aboutUser: '',
            technologies: '',
            lastProject: '',
        })
        setErrors({})
    }


    return {handleChange, values, handleSubmit, errors, handleClear}

}

export default useForm