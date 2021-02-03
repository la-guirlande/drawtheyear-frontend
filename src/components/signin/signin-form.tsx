import { useForm } from 'react-hook-form'

/**
 * Signin form values.
 */
export interface SigninFormValues {
  email: string;
  password: string;
}

/**
 * Signin form props.
 */
export interface SigninFormProps {
  onSubmit(data: SigninFormValues): void;
}

/**
 * Signin form component.
 * 
 * @param onSubmit When the form is submitted
 */
export const SigninForm: React.FC<SigninFormProps> = ({ onSubmit }) => {
  const { register, errors, handleSubmit } = useForm<SigninFormValues>({
    defaultValues: { email: '', password: '' }
  });

  const emailRegister = register({
    required: {
      value: true,
      message: 'Ce champ est requis'
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Ce champ doit contenir une adresse mail'
    }
  });
  const passwordRegister = register({
    required: {
      value: true,
      message: 'Ce champ est requis'
    }
  });

  return (
    <form onSubmit={handleSubmit(data => onSubmit(data))}>
      <input className="bg-black m-2" ref={emailRegister} type="text" name="email" />
      {errors.email && <small>{errors.email.message}</small>}

      <input className="bg-black m-2" ref={passwordRegister} type="password" name="password" />
      {errors.password && <small>{errors.password.message}</small>}

      <button type="submit">Connexion</button>
    </form>
  );
}
