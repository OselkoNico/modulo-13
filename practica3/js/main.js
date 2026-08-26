const { Observable } = rxjs;
const observable = new Observable((subscriber) => {
    subscriber.next(5);
    subscriber.next(10);
    subscriber.next(15);
    setTimeout(() => {
        subscriber.next(20);
        subscriber.complete();
    }, 2000);
});

console.log('Antes de la suscripción');
observable.subscribe({
    next: value => console.log(value),
    error: err => console.error(err),
    complete: () => console.log('Suscripción finalizada')
});

console.log('Después de la suscripción');