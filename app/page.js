

import Image from "next/image";
import WordsContainer from "./components/WordsContainer";

export default async function Home() {
   
  
  return (
    <div>
      <div className="m-6">
      <h1 className="text-6xl my-6 p-6">Random Word Generator</h1>
      <WordsContainer></WordsContainer>
      </div>
    </div>
  );
}
