export function fetchStock(item) {
    return new Promise((resolve) => 
        setTimeout(() => resolve({ item }), 1500)
    );
}