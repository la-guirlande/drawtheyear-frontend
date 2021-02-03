import { DayData, UserData } from '../../util/types/data-types';
import { Button } from '../button';
import { Icon } from '../icon';

/**
 * Details sidebar props.
 */
export interface DetailsSidebarProps {
  user: UserData;
  day: DayData;
  editable?: boolean;
  onShouldClose?(): void;
}

/**
 * Details sidebar component.
 * 
 * This component shows a day details.
 * 
 * @param user Details owner
 * @param day Day to show
 * @param editable True if the details sidebar is editable
 * @param onShouldClose When the sidebar shoulds close
 */
export const DetailsSidebar: React.FC<DetailsSidebarProps> = ({ user, day, editable, onShouldClose }) => {

  const getDateName = () => {
    const date = new Date(day.date);
    let monthName;
    switch (date.getMonth()) {
      default:
        monthName = 'Unknown';
        break;
      case 0:
        monthName = 'Janvier';
        break;
      case 1:
        monthName = 'Février';
        break;
      case 2:
        monthName = 'Mars';
        break;
      case 3:
        monthName = 'Avril';
        break;
      case 4:
        monthName = 'Mai';
        break;
      case 5:
        monthName = 'Juin';
        break;
      case 6:
        monthName = 'Juillet';
        break;
      case 7:
        monthName = 'Août';
        break;
      case 8:
        monthName = 'Septembre';
        break;
      case 9:
        monthName = 'Octobre';
        break;
      case 10:
        monthName = 'Novembre';
        break;
      case 11:
        monthName = 'Décembre';
        break;
    }
    return `${date.getDate()} ${monthName} ${date.getFullYear()}`;
  }

  const getDescription = (maxLength: number = 300) => {
    if (day.description) {
      return day.description.length > maxLength ? `${day.description.substring(0, maxLength)}...` : day.description;
    }
    return 'Aucune description';
  }

  return (
    <div className="fixed z-20 w-1/2 lg:w-1/3 h-5/6 bg-secondary-dark shadow-big rounded-r-lg">
      <div className="m-2 flex justify-end">
        <Button onClick={onShouldClose}>
          <Icon type="close" />
        </Button>
      </div>
      <div className="px-5">
        <div className="m-2 flex justify-center">
          <h1 className="text-lg lg:text-xl">Détails du {getDateName()}</h1>
        </div>
        <div className="m-2 border-secondary-light border-2">
          <p className="p-2 text-justify">{getDescription(300)}</p>
        </div>
        {editable && (
          <div className="m-2 flex justify-between">
            <Button className="bg-primary-dark hover:bg-primary" href={`/grid/${user.name}/day/${day.date}`}>Voir tous les détails</Button>
            <Button className="bg-primary-dark hover:bg-primary" href={`/grid/${user.name}/day/${day.date}/modify`}>Modifier</Button>
          </div>
        )}
      </div>
    </div>
  );
}

DetailsSidebar.defaultProps = {
  editable: false
}
