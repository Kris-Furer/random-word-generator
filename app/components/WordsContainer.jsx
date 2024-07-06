'use client';
import React, { useState } from 'react';
import GenerateButton from "./GenerateButton";


const WordsContainer = () => {

  const [words, setWords] = useState([])
  const [savedWords, setSavedWords] = useState([])
  const [useError, setUserError] = useState([])

  const fakeData = ["cow", "pig"]


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
  const saveWord = (word) => {
    setSavedWords([...savedWords, word]);
  }
  const removeWord = (wordToRemove) => {
    // Use filter to keep all saved words except the one clcicked 
    setSavedWords(savedWords.filter((w) => w !== wordToRemove));
  }
  

  return (
    <div>
      <GenerateButton onClick={fetchWords}>Generate Word</GenerateButton>

      <ul className='m-6'>
        {words.map((word) => (
          // Within arrow function to prevent excecuting on render. 
          // Takes its own text content as an argument for saving the word
          <li
            key={word}
            onClick={() => saveWord(word)}
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
