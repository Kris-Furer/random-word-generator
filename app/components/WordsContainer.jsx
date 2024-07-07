'use client';
import React, { useState } from 'react';
import Button from "./Button";


const WordsContainer = () => {

  const [words, setWords] = useState([])
  const [savedWords, setSavedWords] = useState([])
  const [userError, setUserError] = useState([])
  const [inputValue, setInputValue] = useState('')


  // Fetch the words from the api and set 'words' variable to the result
  const fetchWords = async () => {
    try {
      const response = await fetch("https://random-word-api.herokuapp.com/word?number=10");
      const data = await response.json();
      setWords(data);

    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  // Add the new saved word to the previous
  const saveWord = (word, customWord = true) => {
    if (savedWords.includes(word)) {
      setUserError("Word already saved");
    } else if (customWord && inputValue === '') {
      setUserError('You must enter a word or choose from the random list')
    }
    else {
      setSavedWords([...savedWords, word]);
      setUserError('');
    }
    if (customWord) {
      
      setInputValue('');
    }
  }
  const removeWord = (wordToRemove) => {
    // Use filter to keep all saved words except the one clcicked 
    setSavedWords(savedWords.filter((w) => w !== wordToRemove));
  }
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <Button onClick={fetchWords}>Generate Word</Button>
      <input value={inputValue}  onChange={() => handleOnChange(event)} className='text-black p-4 m-4 ' type="text" />
      <Button onClick={() => saveWord(inputValue, true)}>Add</Button>

      <p>
        {userError}
      </p>

      <ul className='m-6'>
        {words.map((word) => (
          // Within arrow function to prevent excecuting on render. 
          // Takes its own text content as an argument for saving the word
          <li
            key={word}
            onClick={() => saveWord(word, false)}
            className='p-6 border border-white m-3 inline-block cursor-pointer'>{word}</li>
        ))}
      </ul>
      <p>Saved Words</p>
      <ul className='m-6'>
        {savedWords.map((savedWord) => (
          <li
            key={savedWord}
            onClick={() => removeWord(savedWord)}
            className='p-6 border border-white inline-block cursor-pointer m-3'>{savedWord}</li>
        ))}
      </ul>
    </div>
  );
}

export default WordsContainer;
