// import { useState, useEffect } from 'react';

const WordsList = ({ words, setWords }) => {
  //   const [newWord, setNewWord] = useState();

  //   useEffect(() => {
  //     setWords(
  //       words.map(word => {
  //         if (word.id === newWord.id) {
  //           word.value = newWord.value;
  //         }
  //         return words;
  //       }),
  //     );
  //     console.log(newWord);
  //   }, [newWord]);

  const addLetter = word => {
    const a = Math.random().toString(36).slice(-1);
    // return (word.value += a);
    return word.value + a;
  };

  const handleClick = word => {
    // addLetter(word);
    // setNewWord(word);
    setWords(
      words.map(item =>
        item.id === word.id ? { ...item, value: addLetter(word) } : item,
      ),
    );
  };

  return (
    <>
      {words &&
        words.map(word => (
          <div
            className="words-title"
            key={JSON.stringify(word)}
            onClick={() => handleClick(word)}
          >
            {word.value}
          </div>
        ))}
    </>
  );
};
export default WordsList;
