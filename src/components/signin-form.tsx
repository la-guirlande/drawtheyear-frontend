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

  const nameRegister = register({
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
      <input className="bg-black" ref={nameRegister} type="text" name="email" />
      {errors.email && <small>{errors.email.message}</small>}
      <br />
      <input className="bg-black" ref={passwordRegister} type="password" name="password" />
      {errors.password && <small>{errors.password.message}</small>}
      <br />
      <button type="submit">Connexion</button>
    </form>
  );
}
