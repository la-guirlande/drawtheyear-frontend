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
      <div className="flex flex-col justify-center items-center mx-auto lg:mt-40 mt-16">
        <div>
          <input className="m-2 p-4 w-80 rounded focus:outline-none text-gray-800" ref={emailRegister} type="text" name="email" placeholder="Adresse Email"/>
          {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div>
          <input className="m-2 p-4 w-80 mt-8 rounded focus:outline-none text-gray-800" ref={passwordRegister} type="password" name="password" placeholder="Mot de passe"/>
          {errors.password && <small>{errors.password.message}</small>}
        </div>
        <div className="text-sm text-gray-400 cursor-pointer hover:text-gray-200">
          Mot de passe oublié ?
        </div>

        <button className="mt-8 p-4 rounded bg-secondary-dark w-60 waves-effect mb-12 lg:mb-0" type="submit">Connexion</button>
      </div>

    </form>
  );
}
