import './App.css';
import {useRef, useState} from "react";


const App = () => {
    // const name = useRef()
    // const age = useRef()

    const [user, setUser] = useState({})

    const handler = (e) => {
        e.preventDefault()
        // console.log(e.target.name.value);
        // console.log(e.target.age.value)
        setUser(prev => ({...prev, [e.target.name] : e.target.value}))

    }

        console.log(user)


  return (
      <form>
          <input type={'text'} placeholder={'username'} name={'name'} onChange={handler}/>
          <input type={'text'} placeholder={'age'} name={'age'} onChange={handler}/>
          <button>Save</button>
      </form>
  );
};

export default App
