import { useState } from 'react';
import WordsList from './WordList';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const RandomWords = () => {
  const [words, setWords] = useState([]);

  const handleClick = () => {
    fetchApi();
  };

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        'https://random-word-api.herokuapp.com/word?number=5',
      );
      setWords(
        response.data.map(el => {
          return { value: el, id: uuidv4() };
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="random-words">
        <button
          className="button btn-random"
          type="submit"
          onClick={handleClick}
        >
          get random words
        </button>
        <div>
          <WordsList words={words} setWords={setWords} />
        </div>
      </div>
    </>
  );
};

export default RandomWords;
