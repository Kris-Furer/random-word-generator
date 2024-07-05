'use client'

export default function GenerateButton({onClick, children  }) {
   
  
    return (
      <button onClick={onClick} className="generate-button border m-6 p-6">
       {children}
      </button>
    );
  }
  