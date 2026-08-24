import { useSelector, useDispatch } from "react-redux";
import { selectStock, removeItem } from "./stockSlice";

export default function ListStock() {
  const dispatch = useDispatch();
  const stock = useSelector(selectStock);

  const handleRemoveItem = sku => {
    dispatch(removeItem({sku}));
  }

  return(
    <table>
      <thead>
        <tr>
          <th>SKU</th>
          <th>Nombre</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {stock.map(item => {
          return(
            <tr key={item.sku}>
              <td>{item.sku}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td onClick={() => handleRemoveItem(item.sku)}>Eliminar</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}