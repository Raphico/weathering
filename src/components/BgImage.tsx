import snowy from '../background/snowy.jpg';
import clearSky from '../background/clear-sky.jpg';
import cloudy from '../background/cloudy.jpg';
import lightening from '../background/lightening.jpg';
import rainy from '../background/rainy.jpg';
import { FC } from 'react';

type props = {
  type: String | undefined
}

const BgImage: FC<props> = ({ type }) =>
{
  let bg = '';

  if (type?.includes('cloud'))
  {
    bg = cloudy;
  }
  else if (type?.includes('clear') || type?.includes('sunny'))
  {
    bg = clearSky;
  }
  else if (type?.includes('rain'))
  {
    bg = rainy;
  }
  else if (type?.includes('snow'))
  {
    bg = snowy;
  }
  else if (type?.includes('light') || type?.includes('thunder'))
  {
    bg = lightening;
  }

  return (
    <>
      <img src={bg} className='bg' alt='' />
    </>
  )
}

export default BgImage;
