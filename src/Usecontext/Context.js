import { useContext, createContext, useState } from "react";
import "./Context.css";

const themes = {
    light: {
        text: "rgb(97, 218, 251)",
        background: "#DEE4E7",
    },
    dark: {
        text: "#DEE4E7",
        background: "rgb(40, 44, 52)",
    },
};

const ThemeContext = createContext();

export default function Context(){
    const [valueTheme, setValueTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={valueTheme}>
            <div className="contentWrapper">
                <Content />
                <button className="Button" onClick={( ) => {}}>
                    change
                </button>
            </div>
        </ThemeContext.Provider>
    )
}

function Content(props){
    return(
        <div>
            <Text />
        </div>
    )
}
function Text(props){
    const theme = useContext(ThemeContext);
    console.log("[context value]", theme);
    return <p className="titlecontext">context value {theme.text}</p>
}