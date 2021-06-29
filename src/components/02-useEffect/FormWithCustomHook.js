import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import './effects.css';

export const ForrmWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({ name: '', email: '', password: '' });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Email cambio');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>ForrmWithCustomHook</h1>
            <hr />
            <div className='form-group'>
                <input type='text' name='name' className='form-control' autoComplete='off' value={name} onChange={handleInputChange} placeholder='Tu nombre'>
                </input>
            </div>
            <div className='form-group'>
                <input type='text' name='email' className='form-control' autoComplete='off' value={email} onChange={handleInputChange} placeholder='email@email.com'>
                </input>
            </div>
            <div className='form-group'>
                <input type='password' name='password' className='form-control' value={password} onChange={handleInputChange} placeholder='*******'>
                </input>
            </div>

            <button type='submit' className='btn btn-default'>
                Guardar
            </button>
        </form>
    )
}
