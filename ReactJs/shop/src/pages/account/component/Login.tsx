import React from 'react'
import { AccountInput } from '../../../components/input'
import { useForm } from 'react-hook-form'
import { IFormLoginValue } from '../../../domain/login';
import { useNavigate } from 'react-router-dom';
import { Register } from './Register';

export const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<IFormLoginValue>();
  const navigate = useNavigate();
  const onSubmitForm = (data: IFormLoginValue) => {
    navigate("./home");
    console.log(data);
  }
  return (
    <div className='ml-24 flex gap-7 py-16'>
      <form className='flex-1 ml-20 my-9' onSubmit={handleSubmit(onSubmitForm)}>
        <h1 className='text-4xl font-semibold mb-9'>Log In</h1>
        <AccountInput
          className='mb-9'
          name='usernameOrEmailAddress'
          type='text'
          lable='Username or email address'
          register={register}
          errors={errors}
          rules={{
            required: "This field is require",
            minLength : {
              value: 6,
              message: 'Min length is 6 characters!'
            }
          }}
        />
        <AccountInput
          className='mb-9'
          name='password'
          type='password'
          lable='Password'
          register={register}
          errors={errors}
          rules={{
            required: "This field is require",
            minLength : {
              value: 8,
              message: 'Min length is 8 characters!'
            }
          }}
        />
        <div className='flex gap-5 mb-9 items-center'>
          <input type='checkbox' className='w-8 h-7' />
          <p className='text-base font-normal'>Remember me</p>
        </div>
        <div className='flex gap-8 items-center'>
          <button type='submit' className='border border-black border-solid rounded-2xl w-56 h-16 text-xl font-normal'>Log In</button>
          <p className='text-base font-light hover:underline cursor-pointer'>Lost Your Password?</p>
        </div>
      </form>
      <Register/>
    </div>
  )
}
