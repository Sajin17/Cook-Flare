import { useCollection } from '../../hooks/useCollection';
import RecipeList from '../../comp/RecipeList';
import './Home.css';

const Home = () => {
  const {documents, error} = useCollection('recipes')

  return ( 
    <div className="home">
      {error && <p className="error">{error}</p>}
      {documents && <RecipeList recipes={documents}/>}
    </div>
  );
}
 
export default Home;
