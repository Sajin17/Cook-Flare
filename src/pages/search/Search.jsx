import {useLocation} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../comp/RecipeList'
import './Search.css'

const Search = () => {
   const queryString = useLocation().search
   const queryParams = new URLSearchParams(queryString)
   const query = queryParams.get('q')

   const url = `http://localhost:3000/recipes?q=${query}`
   const {data, isPending, error} = useFetch(url)

    return ( 
    <div>
        <h2 className="page-title">Recipes related with '{query}'</h2>
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        {data && <RecipeList recipes={data} />}
    </div>
     );
}
 
export default Search;