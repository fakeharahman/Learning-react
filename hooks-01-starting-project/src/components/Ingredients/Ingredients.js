import React, { useEffect, useCallback, useReducer, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal'
import useHttp from '../../Hooks/http'

const ingredientReducer = (currentIngs, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngs, action.ing]
    case 'DELETE':
      return currentIngs.filter(ing => ing.id !== action.id)
    default: throw new Error('Should not get here!')
  }
}


const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier, clear } = useHttp()

  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState()


  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: reqExtra })
    }
    else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({ type: 'ADD', ing: { id: data.name, ...reqExtra } })
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error])

  const filteredIngredientHandler = useCallback((filteredIngredient) => {
    // setUserIngredients(filteredIngredient)
    dispatch({ type: 'SET', ingredients: filteredIngredient })
  }, [])


  const addIngredientHandler = useCallback(ingredient => {
    sendRequest('https://react-hooks-bacc.firebaseio.com/ingredients.json',
      'POST', JSON.stringify(ingredient), ingredient, 'ADD_INGREDIENT')
    // dispatchHttp({ type: 'SEND' })
    // fetch('https://react-hooks-bacc.firebaseio.com/ingredients.json', {
    //   method: 'POST',
    //   body: JSON.stringify(ingredient),
    //   headers: { 'Content-Type': 'application/json' }
    // }).then(response => {
    //   return response.json()
    // })
    //   .then(responseData => {
    //     // setUserIngredients(prevIngs => [...prevIngs,
    //     // { id: responseData.name, ...ingredient }])
    //     dispatch({ type: 'ADD', ing: { id: responseData.name, ...ingredient } })
    //     dispatchHttp({ type: 'RESPONSE' })

    //   })
  }, [sendRequest])

  const removeIngredientHandler = useCallback((id) => {
    sendRequest(`https://react-hooks-bacc.firebaseio.com/ingredients/${id}.json`, 'DELETE', null, id, 'REMOVE_INGREDIENT')
  }, [sendRequest])

  const ingList = useMemo(() => {
    return <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
  }, [userIngredients, removeIngredientHandler])
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientHandler} />
        {ingList}
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
