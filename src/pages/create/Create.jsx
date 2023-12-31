import './Create.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useFirestore } from '../../hooks/useFireStore';

const Create = () => {
   const [title, setTitle] = useState('')
   const [method, setMethod] = useState('')
   const [cookingTime, setCookingTime] = useState('')
   const [newIngredient, setNewIngredient] = useState('')
   const [ingredients, setIngredients] = useState([])
   const ingredientInput = useRef(null)
   const navigate = useNavigate()

   const { addDocument, response } = useFirestore('recipes')

   const handleSubmit = async (e) => {
    e.preventDefault();
    const recipes = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime.concat(" minutes ")
    }

    await addDocument(recipes)

    if (!response.error){
      navigate('/')
    }
   }
   
   const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)){
        setIngredients(prev => {
        return [...prev, newIngredient]
        })
    }

    setNewIngredient('')
    ingredientInput.current.focus()
   }

return ( 
    <div className='create'>
     <h2 className='page-title'>Add a new Recipe: </h2>
      <form onSubmit={handleSubmit}>
       <label>
       <span>Recipe name: </span>
       <input
         type='text'
         onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
       />
       </label>

       <label>
        <span>Ingredients: </span>  
        <div className="ingredients">
        <input 
        type='text'
        onChange={(e) => setNewIngredient(e.target.value)}
        value={newIngredient}
        ref={ingredientInput}
        />
        <button className="btn" onClick={handleAdd}>Add</button>
        </div>
       </label>
       <p>Ingredients: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>

       <label>
       <span>Recipe Method: </span>
       <textarea
        onChange={(e) => setMethod(e.target.value)}
        value={method}
        required
       />
       </label>



       <label>
       <span>Cooking time (in minutes): </span>
       <input
        type='number'
        onChange={(e) => setCookingTime(e.target.value)}
        value={cookingTime}
        required
       />
       </label>

       <button className='btn'>Submit</button>

      </form>         
     </div>
  );
}
 
export default Create;