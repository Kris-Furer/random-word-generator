'use client';
import React, { useState } from 'react';
import GenerateButton from "./GenerateButton";


  const WordsContainer = () => {
   
    const [words, setWords] = useState([]);
  
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


  return (
    <div>
      <GenerateButton onClick={fetchWords}>Generate Word</GenerateButton>
      <p className='m-6'>Here are the words</p>
      <ul className='m-6'>
        {words.map((word) => (
          <li className='p-6 border border-white m-3 inline-block' key={word}>{word}</li>
          ))}
      </ul>
    </div>
  );
}

export default WordsContainer;
