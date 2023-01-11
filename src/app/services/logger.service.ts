import { Injectable }    from '@angular/core'



@Injectable() 
export  class LoggerService {
    logs: string[] = []
    prevMsg = ''; 
    prevMsgCount = 1


    log(msg: string) {
        if (msg === this.prevMsg) {
            // repeat message: update last log entry with count. 
            this.logs[this.log.length - 1 ] = msg + `(${this.prevMsg += 1}x)`
        } else {
            // new message; log it 
            this.prevMsg = msg
            this.prevMsgCount = 1 
            this.logs.push(msg)
        }
    }

    clear() { this.logs = []}

    // schedules a vew refresh to ensure display catches up 
    tick() { this.tick_then(() => { })}
    tick_then(fn: () => any) {setTimeout(fn, 0 )}
}