import Login1 from "./login";
import Tablecomp from "./table";
import { useState } from "react";
import DataDisplay from "./displaydata";
import DataDisplay2 from "./displaydata2";

const Navigation = () => {
    const Style = {
        backgroundColor: "#f0f8ff", // Dim light green color
        minHeight: "100vh",
        fontFamily: "sans-serif", // Specify your desired font-family
        // Add more styles as needed
      };

    const DisplayComponent = () => {
        return(
            <div>
                <h2><DataDisplay2></DataDisplay2></h2>
            </div>
        );
    };
    const DisplayComponent2 = () => {
        return(
            <div>
                <h2><DataDisplay></DataDisplay></h2>
            </div>
        );
    };
    const [showComponent, setShowComponent] = useState(false);
    const [showComponent2, setShowComponent2] = useState(false);
    const handleClick = () => {
        setShowComponent(!showComponent);   
    };
    const handleClick2 = () => {
        setShowComponent2(!showComponent2);   
    };

    return (
        <div className="navigate" style={Style}>
            <h2> Patient's Data </h2>
            <button onClick={handleClick}>Show Patient's Data
            </button>
            {showComponent && <DisplayComponent />}
            <h2></h2>
        <div className="navigate2">
            <h2>Doctor's Data</h2>
            <button onClick={handleClick2}>Show Doctor's Data
            </button>
            {showComponent2 && <DisplayComponent2 />}
            </div>
            </div>
            
    );

}
 
export default Navigation;

