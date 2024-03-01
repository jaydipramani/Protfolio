import React,{useEffect, useState} from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme : dark)";
    const [mode, setMode] = useState("")

    useEffect(() => {

        const mediaQuery = windows.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem("theme");

        const handleChange =()=>{
            if(userPref){
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if(check === "dark"){
                    document.documentElement.classList.add("dark");
                }else{
                    document.documentElement.classList.remove("dark");
                }
            }else{
                let check = mediaQuery.matched ? "dark" : "light";
                setMode(check);
                if(check === "dark"){
                    document.documentElement.classList.add("dark");
                }else{
                    document.documentElement.classList.remove("dark");
                }
            }
        

        }
        mediaQuery.addEventListener("change", handleChange);
        return() => mediaQuery.removeEventListener("change", handleChange);
    },[])

    useEffect(() => {
        if(mode === "dark"){
           window.localStorage.setItem("theme", "dark");
           document.documentElement.classList.add("dark");

        }else{
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }

    },[mode])

    return(
        <div></div>
    )
}