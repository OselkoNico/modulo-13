import { useState, useEffect } from "react";
import { getCounterItems } from "../services/itemsService";

export default function HeaderMenu() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        getCounterItems()
            .subscribe({
                next: data => setCounter(data.counter)
            })
    }, [counter])
    return(
        <nav>
            <div className="basket">
                cesta
                <div className="counter">{counter}</div>
            </div>
        </nav>
    )
}