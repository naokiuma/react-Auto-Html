import {useState} from "react";

const roopComponent = (props) =>{
    const [recievehtml,setRecivehtml] = useState("");
    return(
        <div>
            <p>テスト</p>
            {recievehtml}
        </div>
    )
}