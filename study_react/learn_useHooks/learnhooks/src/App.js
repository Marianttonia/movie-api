import './index.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(10); //create a new state
  const [user, setUser] = useState();

  useEffect(() => {
    //use effect in function, performs something based on our action. anything that changes this component on the screen - and he needs to make an update to the DOM element - will be a render.

    console.log('roda a cada renderizacao');
  });

  // 2- When we want to control when it is used we create a dependency array, this useEffect just load when the count is changed
  useEffect(() => {
    console.log('So roda ao incrementar o valor!');
  }, [count]);


  // 3 - array any. example used for loading external data
  useEffect(() => {
    console.log('so executa uma vez! ');
  },[]);

  // 4 - clean up function, function by clean memory
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`o incrementador foi alterado ${count} vezes`)
    }, 2000)

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  // 5 - fetch with useEffect
  useEffect(() => {
    fetch('https://api.github.com/users/matheusbattisti')
    .then((res) => res.json())
    .then((json) => setUser(json));
}, []);

  return(
    <div className='App'>
      <div>
        <button onClick={()=> setCount((prevCount) => prevCount + 1)}>
          Renderizar
        </button>
        {/* change display */}
        <p> {count} </p> 
      </div>
      <div>
        <button onClick={() => setCountB((prevCount) => prevCount + 1)}>
          Renderizar B
        </button>
        <p> {countB} </p>
      </div>
      {user && (
          <div>
          <p> Dados do usuario: </p>
          <h1> Nome: {user.name} </h1>
          <p>
            Site: <a href={user.blog}> {user.blog} </a>
          </p>
          <img src={user.avatar_url} alt='user avatar' />
        </div>
      )}
    </div>
  )
};

// if it is outside my useEffect it will run whenever the component is used. That's why you can't have an api call outside of useEffect, if you don't call the api with each modification of the component. MOre datas... (for back and front.. problemns.. )

export default App;
