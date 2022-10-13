import { FaSearch } from 'react-icons/fa';
import { useState, FC } from 'react';

type props = {
  setCity: React.Dispatch<React.SetStateAction<string>>,
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

const Search: FC<props> = ({ setCity, setDisplay, setIsLoading }) =>
{
  const [searched, setSearched] = useState('');

  const onSubmit = () => 
  {
    if (!searched)
    {
      alert('Pls add a city');
    }
    else
    {
      setCity(searched);
      setSearched('');
      setDisplay(false);
      setIsLoading(true);
    }
  }

  return (
    <div className={"searched-city flex"}>
      <input type="text" placeholder="City" value={searched} onChange={(e) => setSearched(e.target.value)} />
      <FaSearch onClick={() => onSubmit()} className='search' />
    </div>
  )
}

export default Search;
