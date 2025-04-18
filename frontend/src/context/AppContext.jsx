import { createContext, useContext } from "react"; 
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();


export const AppContextProvider = ({childern}) =>{

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    

    const value = {navigate, user, setUser, setIsSeller, isSeller};

    return <AppContext.Provider value={value}>
        {childern}
    </AppContext.Provider>

}


export const useAppContext = () => {
    return useContext(AppContext)
}