import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class DelayedSquenceService {

    getDelayedSquence() {
        const seq = [1, 2, 4]
        let timeoutId!: ReturnType<typeof setTimeout>
        const sequence  = new Observable(sequenceSubscriber)


        function sequenceSubscriber(observer: Observer<number>) {
            function doInSquence(arr: number[], idx: number) {
                timeoutId = setTimeout(() => {
                    observer.next(arr[idx])
                    if (idx === arr.length -1 ) {
                        observer.complete()
                    } else {
                        doInSquence(arr, ++idx)
                    }
                }, 1000)
            }
            doInSquence(seq, 0)

            return {
                unsubscribe() {
                    clearTimeout(timeoutId)
                }
            }
            
        }

        return sequence
    }
}