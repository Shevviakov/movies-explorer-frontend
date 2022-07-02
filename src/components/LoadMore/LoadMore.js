import React from "react";
import Button from "../Button/Button";

import './LoadMore.css'

export default function LoadMore(props) {
    return (
        <div className="load-more">
            <Button className="load-more__btn">Ещё</Button>
        </div>
    )
}