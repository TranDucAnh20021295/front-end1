import React from 'react'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { IFormContactValue } from '../../domain/contact';
interface IProps {
    name: keyof IFormContactValue,
    placeholder?: string,
    lable: string,
    className?: string,
    value?: string,
    register: UseFormRegister<IFormContactValue>,
    errors?: FieldErrors<IFormContactValue>,
    rules: RegisterOptions<IFormContactValue>
}
export const MessageInput = ({name, placeholder, lable, className, value, register, errors, rules} : IProps) => {
    const errorMessenge = errors && errors[name]?.message;
    return (
        <div className={className}>
            <label
                className="block text-sm font-bold mb-5"
                htmlFor={name}
            >
                {lable}
            </label>
            <textarea
                {...register(name, rules)}   
                className="border border-solid border-quickSilver rounded-xl w-96 h-32 py-3 px-3"
                id={name}
                placeholder={placeholder}
                value={value}
            ></textarea>
            {errorMessenge && (
                <p className='text-sm text-red-500 mt-2'>{errorMessenge}</p>
            )}
        </div>
    )
}
