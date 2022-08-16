import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setUsername} from "./stateSlice";
import {addTopping} from "./pizzaSlice";


function App() {

    const mainState = useSelector(state => state.mainState)
    const pizza = useSelector(state => state.pizza)
    const kebab = useSelector(state => state.kebab)
    const dispatch = useDispatch()


  return (
    <div className="App">

          <div>
              <h1> User State</h1>
              {mainState.repositories.map(repo => <div key={repo}> {repo} </div>)}
              <button onClick={() => dispatch(setUsername('Bociasan'))}> Add</button>
              <h3> {`Username: ${mainState.username}`}</h3>
          </div>

        <div>
            <h1>Pizza</h1>
            {
                pizza.toppings.map(topping => <div key={topping}>{topping}</div>)
            }
            <button onClick={() => dispatch(addTopping('pepperoni'))}>Add</button>
        </div>

    </div>
  );
}

export default App;
