import { ResponsivePie } from '@nivo/pie'
import React from 'react'

export type ChartData = {
  id: string;
  label: string;
  value: number;
  color: string;
}

export type EmotionsDistributionProps = {
  data: ChartData[];
}

export const EmotionsDistribution: React.FC<EmotionsDistributionProps> = ({ data }) => (
  <ResponsivePie
      data={data}
      margin={{ top: 40, right: 100, bottom: 80, left: 100 }}
      innerRadius={0.3}
      padAngle={0.7}
      cornerRadius={3}
      colors={element => element.data.color}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [[ 'darker', 0.2 ]] }}
      radialLabel={element => `${element.label} (${element.value} ${element.value === 1 ? 'jour' : 'jours'})`}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#fff4e4"
      radialLabelsLinkColor={{ from: 'color' }}
      radialLabelsLinkStrokeWidth={3}
      sortByValue
      enableSliceLabels={false}
      tooltip={element => (
        <div className="p-2 rounded border-black bg-gray-900">
          <span className="pr-4 mr-2 rounded-sm" style={{ backgroundColor: element.datum.color }}></span>
          {element.datum.label}
        </div>
      )}
    />
)
