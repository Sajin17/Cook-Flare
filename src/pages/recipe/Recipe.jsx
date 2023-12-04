import './Recipe.css'
import useTheme from '../../hooks/useTheme';
import { useDocument } from '../../hooks/useDocument';
import { useNavigate, useParams } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFireStore';

const Recipe = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { document, error } = useDocument('recipes', id)
    const { deleteDocument } = useFirestore('recipes')
    const { mode } =useTheme() 

    const handleSubmit = (e) => {
        e.preventDefault()
        deleteDocument(document.id)
        navigate('/')
      }

    return ( 
    <>  
     <div className={`recipe ${mode}`}>
        {error && <p className='error'>{error}</p>}
        {document && (
        <div>
        <h2 className='page-title'>{document.title}</h2>
        <p>Takes {document.cookingTime} to cook</p>
        <ul>
        {document.ingredients && document.ingredients.map(ing =>(
        <li key={ing}>{ing}</li>
        ))}
        </ul>
        <p className='method'>{document.method}</p>
        </div>
        )}    
     </div>
     <div className='btn-container'> 
      <button className="btn" onClick={handleSubmit}>Delete recipe</button>    
     </div>
    </>  
     );
}
 
export default Recipe;