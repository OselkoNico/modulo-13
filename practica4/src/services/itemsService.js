import { Subject } from "rxjs";

let items = [];
const counterSubject = new Subject();

export function addItem(item) {
    items.push(item);
    counterSubject.next({counter: items.length});
}

export function getCounterItems() {
    return counterSubject.asObservable()
}