import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { stockAsync, selectLoading } from "./stockSlice";

export default function Stock(){
    const dispatch = useDispatch();
    const itemObject = {
        sku: '',
        name: '',
        stock: ''
    }
    const loading = useSelector(selectLoading);
    const [item, setItem] = useState(itemObject)

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(stockAsync(item));
        setItem(itemObject);
    }

    return (
        <>
            <h1>Stock Control</h1>
            <h2>Nuevos artículos</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="sku" value={item.sku} placeholder="sku" onChange={handleChange}/>
                <input type="text" name="name" value={item.name} placeholder="name" onChange={handleChange}/>
                <input type="number" name="stock" value={item.stock} placeholder="stock" onChange={handleChange}/>
                {loading ?
                    <button disabled>Cargando...</button>
                    :
                    <button type="submit">Añadir</button>}
            </form>
        </>
    )
}