import React, { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import Api from '../apiType';

type props = {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>,
  display: boolean,
  weather: Api | undefined
}

const Header: FC<props> = ({ setDisplay, display, weather }) =>
{

  return (
    <>
      <div className="flex">
        <h2>{weather?.name}</h2>
        <FaSearch onClick={() => setDisplay(!display)} />
      </div>
    </>
  )
}

export default Header;
