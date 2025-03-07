import React, { useReducer,useContext, useEffect } from "react";
import reducer from "./reducer";
const API = "https://hp-api.onrender.com/api/characters?limit=10";
const AppContext = React.createContext();

const initialState = {
    name: "",
    image: "",
    services: []
}



const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "RAVI",
                image: "./images/hero.svg"
            },
        });
    };
    
    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "RAVI SHARMA",
                image: "./images/about1.svg"
            },
        });
    };
    //to get the api data
    const getServices = async(url) =>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type: "GET_SERVICES", payload: data});
    }catch(error){
        console.log(error);
    }
    };
    //to call the api
    useEffect(() =>{
        getServices(API);
    },[]);
    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage, role: "Frontend Developer",
    exp : "6 years",
    skills: "HTML,CSS,JavaScript,React,Jquery,Bootstrap etc"}} >{children}</AppContext.Provider>
};

// gloabal custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
  };

export {AppContext, AppProvider, useGlobalContext}