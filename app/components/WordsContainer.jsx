'use client';
import React, { useState } from 'react';
import GenerateButton from "./GenerateButton";


  const WordsContainer = () => {
   
    const [words, setWords] = useState([])
    const [savedWords, setSavedWords] = useState(["Your Saved Goes Here"])

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


  return (
    <div>
      <GenerateButton onClick={fetchWords}>Generate Word</GenerateButton>
      <p className='m-6'>Here are the words</p>
      <ul className='m-6'>
        {words.map((word) => (
          // Within arrow function to prevent excecuting on render
          <li onClick={() => saveWord(word)} className='p-6 border border-white m-3 inline-block' key={word}>{word}</li>
          ))}
      </ul>
      <p>Saved Words</p>
      <ul className='m-6'>
        {savedWords.map((savedWord) => (
          <li className='p-6 border border-white m-3 inline-block' key={savedWord}>{savedWord}</li>
          ))}
      </ul>
    </div>
  );
}

export default WordsContainer;
