import { Button } from '../button'
import { Icon } from '../icon';

export type StatType =
    'general'
  | 'other';

export interface StatsSidebarProps {
  onSelect?(type: StatType): void;
}

export const StatsSidebar: React.FC<StatsSidebarProps> = ({ onSelect }) => {
  return (
    <div className="h-5/6 bg-secondary-dark shadow-big rounded-r-lg">
      <div className="my-2 flex justify-center">
        <h1 className="text-lg lg:text-xl">Statistiques</h1>
      </div>
      <div className="my-2 flex justify-center" onClick={() => onSelect('general')}>
        <Button className="w-full">
          <div className="flex justify-between">
            <Icon type='home' />
            Général
            <Icon type='keyboard_arrow_right' />
          </div>
        </Button>
      </div>
      <div className="my-2 flex justify-center" onClick={() => onSelect('other')}>
        <Button className="w-full">
          <div className="flex justify-between">
            <Icon type='cloud' />
            Other stats
            <Icon type='keyboard_arrow_right' />
          </div>
        </Button>
      </div>
    </div>
  );
}
