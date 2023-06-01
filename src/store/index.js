import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counter/counter-reducer";
import { counterInitialState } from "./counter/counter-initial-state";
import { authReducer } from "./auth/auth-reduces";
import { authInitialState} from "./auth/auth-initial-state"



/*boş merkezi state olusturuluyor*/ 
const StoreContext = createContext();

export const useStore =() => useContext(StoreContext);


/*uygulamayı sarmallayacak Store Provider olusturuluyor*/
export const StoreProvider = ({children}) => {
    /*useREducer hook u 2 parametre alır ilki reducer , diğeri inital state tir
      useReducer geriye iki yapı döndürür. İlki getter methodu , diğeri ise setter methodu(dispatch) */

      //     getter          setter
    const [counterState , dispatchCounter] = useReducer(counterReducer , counterInitialState);

    const [authState , dispatchAuth] = useReducer(authReducer , authInitialState);

    return (
        <StoreContext.Provider value={{counterState , dispatchCounter ,authState , dispatchAuth}}>
            {/* Tüm uygulama children üzerinden buraya alınıp merkezi state ile sarmallanır */}
            {children}
        </StoreContext.Provider>
    )


}