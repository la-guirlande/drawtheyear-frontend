import React, { useContext, useState } from 'react'
import { AuthenticationContext } from '../contexts/authentication-context'
import { GeneralContainer } from './general/general-container';
import { StatsSidebar, StatType } from './stats-sidebar';

export const StatsContainer: React.FC = () => {
  const { authUser } = useContext(AuthenticationContext);
  const [statType, setStatType] = useState<StatType>('general');

  const handleChangeStatType = (type: StatType) => {
    setStatType(type);
  }

  const generateView = () => {
    switch (statType) {
      default:
      case 'general':
        return <GeneralContainer />
      case 'other':
        return 'Another stat';
    }
  }

  return authUser && (
    <div className="h-screen flex flex-wrap">
      <div className="w-1/5">
        <StatsSidebar onSelect={handleChangeStatType} />
      </div>
      <div className="w-4/5 px-2">
        <div className="mx-2">
          {generateView()}
        </div>
      </div>
    </div>
  );
}
