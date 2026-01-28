export class Countdown {
    private interval : ReturnType<typeof setInterval> | undefined;
    private timeout : ReturnType<typeof setTimeout> | undefined;
    public currentSecond: number;

    constructor( 
        private secondBase: number
    ) {
        this.currentSecond = this.secondBase;
    }

    // METHODS
    public start(
        handlerTimeout: () => void,
        handlerInterval?: () => void,
        handlerInit?: () => void,
    ) {
        handlerInit ? handlerInit() : null;

        this.interval = setInterval(()=>{
            
            this.currentSecond--;
            handlerInterval ? handlerInterval() : null;

            if ( this.currentSecond === 1 ) {
                clearInterval(this.interval);
                const randomTimer = Math.round( Math.random() * (3000-200) - 200 )
                this.timeout = setTimeout(()=>{ handlerTimeout() }, randomTimer)
            }

        }, 1000)
    }

    public reset() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
        this.currentSecond = this.secondBase;
    }
}