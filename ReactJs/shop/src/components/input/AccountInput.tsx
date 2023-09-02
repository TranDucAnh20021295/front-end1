import React from 'react'
import { IFormLoginValue } from '../../domain/login'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'
interface IProps {
    name: keyof IFormLoginValue,
    type: 'text' | 'password',
    placeholder?: string,
    lable: string,
    className?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    register: UseFormRegister<IFormLoginValue>,
    errors?: FieldErrors<IFormLoginValue>,
    rules: RegisterOptions<IFormLoginValue>;
}
export const AccountInput = ({ name, type, placeholder, lable, className, value, onChange, register, errors, rules}: IProps) => {
    const errorMessenge = errors && errors[name]?.message;
    return (
        <div className={className}>
            <label
                className="block text-sm font-bold mb-6"
                htmlFor={name}
            >
                {lable}
            </label>
            <input
                {...register(name, rules)}
                className="border border-solid border-quickSilver rounded-xl h-20 w-96 py-2 px-3"
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
