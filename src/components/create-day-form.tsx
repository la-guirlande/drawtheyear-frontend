import moment from 'moment';
import { NestedValue, useForm } from 'react-hook-form';
import { EmotionData } from '../util/types/data-types';

export interface CreateDayFormValues {
  date: string;
  emotions: NestedValue<string[]>;
  description: string;
}

export interface CreateDayFormProps {
  emotions: EmotionData[];
  date?: string;
  onSubmit?(data: CreateDayFormValues): void;
}

export const CreateDayForm: React.FC<CreateDayFormProps> = ({ emotions, date, onSubmit }) => {
  const { errors, register, handleSubmit } = useForm<CreateDayFormValues>({
    defaultValues: { date, emotions: [], description: null }
  });

  const dateRegister = register({
    required: {
      value: true,
      message: 'Ce champ est requis'
    },
    validate: (value) => new Date(value).getTime() <= new Date().getTime() || 'Ce jour n\'est pas encore arrivé'
  });
  const emotionsRegister = register({
    required: {
      value: true,
      message: 'Ce champ est requis'
    }
  });
  const descriptionRegister = register();

  return (
    <form onSubmit={handleSubmit(data => onSubmit(data))}>
      <input className="bg-black m-2" ref={dateRegister} type="date" name="date" />
      {errors.date && <small>{errors.date.message}</small>}
      <textarea className="bg-black m-2" ref={descriptionRegister} name="description" />
      {errors.description && <small>{errors.description.message}</small>}
      {emotions.map((emotion, i) => (
        <div key={i}>
          <label htmlFor={`emotions_${emotion.id}`}>{emotion.name}</label>
          <input id={`emotions_${emotion.id}`} ref={emotionsRegister} type="checkbox" name="emotions" value={emotion.id} />
        </div>
      ))}
      {errors?.emotions && <small>{errors.emotions.message}</small>}
      <button type="submit">Créer</button>
    </form>
  );
}

CreateDayForm.defaultProps = {
  date: moment(new Date()).format('YYYY-MM-DD')
}
