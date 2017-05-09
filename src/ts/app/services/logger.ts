export class Logger{
    public log(message:string){
        console.log(message);
    }
}

export const simpleLogger = {
    log: (message: String) => {
        console.log("Simple Logger", message);
    },
}