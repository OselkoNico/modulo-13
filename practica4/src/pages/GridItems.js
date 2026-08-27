import { useState } from "react";
import { addItem } from '../services/itemsService';

export default function ItemsGrid() {
    const [items, setItems] = useState([
        {sku: 'A123', name: 'Pace', brand: 'Adidas', price: 40},
        {sku: 'N456', name: 'Court', brand: 'Nike', price: 65},
        {sku: 'NW67', name: 'Essential', brand: 'New Balance', price: 55},
    ])

    const handleAddItem = (sku) => {
        addItem(sku);
    }

    return(
        <div className="container flex">
            {items.map(item => {
                return(
                    <div className="card" key={item.sku}>
                        <p>{item.brand} {item.name}</p>
                        <p>{item.price}</p>
                        <div className="buttons-row">
                            <button onClick={() => handleAddItem(item.sku)}>Add</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}