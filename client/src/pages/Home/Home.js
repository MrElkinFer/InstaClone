import React from 'react'
import useAuth from '../../hooks/useAuth';

export default function Home() {

  const aut = useAuth();
  console.log(aut);
  return (
    <div>
      <h1>
        Estamos en la HOME
      </h1>
    </div>
  )
}
