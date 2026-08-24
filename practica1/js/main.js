const stockReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_STOCK':
            return [...state, payload];
        default:
            return state;
    }
}

const addStockAction = (sku, name, stock) => {
    return {
        type: 'ADD_STOCK',
        payload: {sku, name, stock}
    }
}

const store = Redux.createStore(stockReducer);

 // store.dispatch(addStockAction('C123', 'Portátil ASUS', 10));

const skuInput = document.getElementById('sku');
const nameInput = document.getElementById('name');
const stockInput = document.getElementById('stock');

document.getElementById('addButton').addEventListener('click', () => {
    store.dispatch(addStockAction(skuInput.value, nameInput.value, stockInput.value));
    skuInput.value = '';
    nameInput.value = '';
    stockInput.value = '';
})

const showStock = () => {
    const items = store.getState();
    let stockList = document.getElementById('stockList');
    stockList.innerHTML = '';
    items.forEach(item => {
        let row = document.createElement('tr');
        let sku = document.createElement('td');
        let name = document.createElement('td');
        let stock = document.createElement('td');
        sku.appendChild(document.createTextNode(item.sku));
        name.appendChild(document.createTextNode(item.name));
        stock.appendChild(document.createTextNode(item.stock));
        row.appendChild(sku);
        row.appendChild(name);
        row.appendChild(stock);
        stockList.appendChild(row);
    })
}

store.subscribe(showStock);