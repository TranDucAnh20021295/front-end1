import { AccountInput } from '../../../components/input'
import { useForm } from 'react-hook-form'
import { IFormLoginValue } from '../../../domain/login';

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormLoginValue>();
    return (
        <><form className='flex-1 ml-20 my-9' onSubmit={handleSubmit(() => {})}>
            <h1 className='text-4xl font-semibold mb-9'>Register</h1>
            <AccountInput
                className='mb-9'
                name='emailAddress'
                type='text'
                lable='Email Address'
                register={register}
                errors={errors}
                rules={{
                    required: "This field is require",
                    minLength: {
                        value: 6,
                        message: 'Min length is 6 characters!'
                    }
                }}
            />
            <p className='text-base font-light mb-5'>A link to set a new password will be sent to your email address.</p>
            <p className='text-base font-light mb-16'>Your personal data will be used to support your experience
                throughout this website, to manage access to your account
                , and for other purposes described in our privacy policy.</p>
            <button type='submit' className='border border-black border-solid rounded-2xl w-56 h-16 text-xl font-normal'>Register</button>
        </form></>
    )
}
