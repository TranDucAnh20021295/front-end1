import React from 'react'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { IFormContactValue } from '../../domain/contact';
interface IProps {
    name: keyof IFormContactValue,
    type: 'text' | 'password',
    placeholder?: string,
    lable: string,
    className?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    register: UseFormRegister<IFormContactValue>,
    errors?: FieldErrors<IFormContactValue>,
    rules: RegisterOptions<IFormContactValue>
}
export const ContactInput = ({name, type, placeholder, lable, className, value, onChange, register, errors, rules} : IProps) => {
    const errorMessenge = errors && errors[name]?.message;
    return (
        <div className={className}>
            <label
                className="block text-sm font-bold mb-5"
                htmlFor={name}
            >
                {lable}
            </label>
            <input
                {...register(name, rules)}   
                className="border border-solid border-quickSilver rounded-xl w-96 h-14 py-2 px-3"
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {errorMessenge && (
                <p className='text-sm text-red-500 mt-2'>{errorMessenge}</p>
            )}
        </div>
    )
}
