import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useTheme = () => {
    const context = useContext(ThemeContext)

   if (context === undefined){
    throw new Error("Context must be use within the scope of the context provider.")
   }

    return context;
}
 
export default useTheme;