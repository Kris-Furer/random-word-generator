'use client'

export default function Button({onClick, children  }) {
   
  
    return (
      <button onClick={onClick} className="generate-button border m-6 p-4" >
       {children}
      </button>
    );
  }
  