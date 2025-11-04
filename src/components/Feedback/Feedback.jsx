import ".styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback (){
const [likes, setLike]

    return(
        <div className="feedback-conteiner">
            <div className="feedback-result-conteiner">
                <div className="like-dislike-conteiner">
                    <div className="result">0</div>
                    <Button name="Like" onClick={() => {}} />
                </div>
                <div className="like-dilike-conteiner"></div>
            </div>
        </div>
    )
}