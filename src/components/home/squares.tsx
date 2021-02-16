import _ from 'lodash';
import React, { useMemo } from 'react';

export interface SquaresProps {
  count?: number;
  size?: [min: number, max: number];
}

export const Squares: React.FC<SquaresProps> = ({ count, size }) => {

  const squares = useMemo(() => {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      const squareSize = _.random(size[0], size[1], false);
      elements.push(
        <li key={i} className="absolute -bottom-150px block list-none bg-white-transparent animate-square" style={{
          left: `${_.random(10, 90, false)}%`,
          width: `${squareSize}px`,
          height: `${squareSize}px`,
          animationDelay: `${_.random(0, count, false)}s`,
          animationDuration: `${_.random(10, 30, false)}s`
        }}></li>
      );
    }
    return elements;
  }, []);

  return (
    <div className="w-full h-1/2-screen" >
      <ul className="absolute left-8 top-0 bottom-0 w-11/12 h-11/12 overflow-hidden squares">
        {squares}
      </ul>
    </div >
  )
}

Squares.defaultProps = {
  count: 10,
  size: [15, 100]
}
