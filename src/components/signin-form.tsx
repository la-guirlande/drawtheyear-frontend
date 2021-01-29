import { useForm } from 'react-hook-form'

export type SigninFormValues = {
  email: string;
  password: string;
}

export type SigninFormProps = {
  onSubmit(data: SigninFormValues): void;
}

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
