const  fileReader  = require("./18-file-processor");

const testingLogs = `[2026-10-15] ERROR_500: Falló todo
[2026-10-15] INFO: Todo bien
[2026-10-15] UNAUTHORIZED_401: Sin token`;

describe("Testing de fileReader ", () => {
    
    test("En caso de funcionar el contador aumenta",()=>{
        expect (fileReader(testingLogs)).toEqual({ ERROR_500: 1, UNAUTHORIZED_401: 1 })
    })
    test("En caso de texto vacio el contador se mantiene en 0",()=>{
        expect (fileReader('')).toEqual({ ERROR_500: 0, UNAUTHORIZED_401: 0 })
    })
})
