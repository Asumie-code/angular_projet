import { Injectable } from "@angular/core";
import { catchError, filter, map } from "rxjs/operators";
import { of, pipe } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class OperatorsService {
    _nums = of(1,2,4,5,6,7,8)

    squareOddValsOperator() {
        return pipe(
            filter((n: number) =>  n % 2  !== 0),
            map(n => n ** 2),
            catchError(() => of([])) 
        )
    }

    get nums() {
        return this._nums
    }

    squaredOddNums() {
        const operator = this.squareOddValsOperator() 
        const squaredOddVals = operator(this.nums)
        return squaredOddVals
    }
}