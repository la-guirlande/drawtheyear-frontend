import { useForm } from 'react-hook-form'

export type SignupFormValues = {
  email: string;
  name: string;
  password: string;
  passwordRepeat: string;
}

export type SignupFormProps = {
  onSubmit(data: SignupFormValues): void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const { errors, register, watch, handleSubmit } = useForm<SignupFormValues>({
    defaultValues: { email: '', name: '', password: '', passwordRepeat: '' }
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
  const nameRegister = register({
    required: {
      value: true,
      message: 'Ce champ est requis'
    },
  });
  const passwordRegister = register({
    required: {
      value: true,
      message: 'Ce champ est requis'
    }
  });
  const passwordRepeatRegister = register({
    required: {
      value: true,
      message: 'Ce champ est requis'
    },
    validate: {
      value: value => value === watch('password')
    }
  });

  return (
    <form onSubmit={handleSubmit(data => onSubmit(data))}>
      <input className="bg-black m-2" ref={emailRegister} type="text" name="email" />
      {errors.email && <small>{errors.email.message}</small>}

      <input className="bg-black m-2" ref={nameRegister} type="text" name="name" />
      {errors.name && <small>{errors.name.message}</small>}

      <input className="bg-black m-2" ref={passwordRegister} type="password" name="password" />
      {errors.password && <small>{errors.password.message}</small>}

      <input className="bg-black m-2" ref={passwordRepeatRegister} type="password" name="passwordRepeat" />
      {errors.passwordRepeat && <small>Les mots de passe sont différents</small>}

      <button type="submit">Inscription</button>
    </form>
  );
}
