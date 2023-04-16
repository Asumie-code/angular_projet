import { Injectable } from "@angular/core";


import { LoggerService } from "./logger.service";

@Injectable({
    providedIn: "root"
})
export class DateLoggerService extends LoggerService {
    override logInfo(msg: any): void { super.logInfo(stamp(msg)) }
    override logDebug(msg: any): void { super.logDebug(stamp(msg)) }
    override logError(msg: any): void { super.logError(stamp(msg)) }


}

function stamp(msg: any) { return msg + ' at ' + new Date() }