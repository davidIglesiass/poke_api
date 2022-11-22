import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [anterior, setAnterior] = useState(null)
  const [siguiente, setSiguiente] = useState(null)
  const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')


  useEffect(() => {
    async function obtenerPokemons(){
      //inicializa la consulta
      const response = await fetch(actual)
      const data = await response.json();
      //Obtengo result que es la informacion relevante a mostrar 
      //en este caso los pokemons
      const result = (await data.results);
      setPokemons(result)

      setAnterior(data.previous)
      setSiguiente(data.next)

    }

    obtenerPokemons()

  }, [actual])

  return (
    
    <>

      <h2>Practica9</h2>
      <ul>
        {pokemons.map((pokemon) => {
          return <li>{pokemon.name}</li>
        })}
      </ul>
      <button onClick={() => anterior!==null && setActual(anterior)}>Pag.anterior</button>
      <button onClick={() => siguiente!==null && setActual(siguiente)}>Pag.siguiente</button>




    </>
  )
}

export default App
