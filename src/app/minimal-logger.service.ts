// class used as a 'narrowing' interface that exposes a minimal logger 
// other memebers of the actual implementation are invisible 

export abstract class MinimalLogger {
    abstract logs: string[]
    abstract logInfo: (msg: string) => void
}



// // transpiles to: 
// var MinimalLogger = (function () {
//     function MinimalLogger() {}
//     return MinimalLogger
// }())
// exports('MinmalLogger', MinimalLogger)


