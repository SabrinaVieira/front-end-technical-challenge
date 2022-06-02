import React,{ createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import localities from '../data/data.json';
import { ILocalities } from '../data/interface';

const INITIAL_STORE_VALUES = localities.stores

interface IStoreContextDatatProvider { 
    children: ReactNode
 };

export interface IStoreContext {
    storedata: ILocalities[];
    setStoredata: Dispatch<ILocalities[]>;
};

export const StoreDataContext = createContext({} as IStoreContext)

const StoreContextProvider = ({children}:IStoreContextDatatProvider): JSX.Element => {
    const [storedata, setStoredata] = useState(INITIAL_STORE_VALUES);
    
    return(
        <StoreDataContext.Provider value={{storedata, setStoredata}}>
            {children}
        </StoreDataContext.Provider>
    )
};

export { StoreContextProvider };