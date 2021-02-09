import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form'
import utils from '../../../util/utils';

export interface ControlFormValues {
  year: string;
  month: string;
}

export interface ControlFormProps {
  onSubmit?(data: ControlFormValues): void;
}

export const ControlForm: React.FC<ControlFormProps> = ({ onSubmit }) => {
  const { register, setValue, handleSubmit } = useForm<ControlFormValues>({
    defaultValues: { year: new Date().getFullYear().toFixed(), month: new Date().getMonth().toFixed() }
  });

  const generateYearOptions = () => {
    const elements: JSX.Element[] = [];
    const currentYear = new Date().getFullYear();
    for (let i = 2017; i <= currentYear; i++) {
      elements.push(<option key={i} value={i}>{i}</option>);
    }
    return elements;
  }

  const generateMonthOptions = () => {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < 12; i++) {
      elements.push(<option key={i} value={i}>{utils.monthMap.get(i)}</option>);
    }
    return elements;
  }

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue('year', e.target.value);
    handleSubmit(data => onSubmit(data))();
  }

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue('month', e.target.value);
    handleSubmit(data => onSubmit(data))();
  }

  return (
    <form onSubmit={handleSubmit(data => onSubmit(data))}>
      <select ref={register()} className="bg-dark" name="year" onChange={handleYearChange}>
        {generateYearOptions()}
      </select>
      <select ref={register()} className="bg-dark" name="month" onChange={handleMonthChange}>
        {generateMonthOptions()}
      </select>
    </form>
  );
}