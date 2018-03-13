$(document).ready(function(){
    var timerObject =
    {
        displaySeconds: 0,
        displayMinutes: 0,
        intervalTimer: null,
        incrementSeconds: function(){
            if(this.displaySeconds < 59)
            {
                this.displaySeconds++;
                this.refreshDisplay();
                return true;
            }
            this.displaySeconds = 0;
            return this.incrementMinutes();
            
        },
        decrementSeconds: function(){
            if(this.displaySeconds > 0)
            {
                this.displaySeconds--;
                this.refreshDisplay();
                return true;
            }
            else
            {
                if(this.decrementMinutes())
                {
                    this.displaySeconds = 59;
                    this.refreshDisplay();
                    return true;
                }
                else
                {
                    return false;
                }
            } 
        },
        incrementMinutes: function(){
            if(this.displayMinutes < 100)
            {
                this.displayMinutes++;
                this.refreshDisplay();
                return true;
            }
            return false;
        },
        decrementMinutes: function(){
            if(this.displayMinutes > 0)
            {
                this.displayMinutes--;
                this.refreshDisplay();
                return true;
            }

        },
        refreshDisplay: function(){
            var strSeconds = this.displaySeconds >= 10 ? this.displaySeconds : "0" + this.displaySeconds;
            var strMinutes = this.displayMinutes >= 10? this.displayMinutes : "0" + this.displayMinutes;

            $("#timeSecond").html(strSeconds);
            $("#timeMinute").html(strMinutes);
        },
        startTimer: function(){
            if(this.intervalTimer === null)
            {
                this.intervalTimer = setInterval(() => this.decrementSeconds(), 1000);
                return true;
            }
            return false;
        },
        stopTimer: function(){
            if(this.intervalTimer !== null)
            {
                clearInterval(this.intervalTimer);
                this.intervalTimer = null;
                return true;
            }
            return false;
        },
        resetTimer: function()
        {
            this.stopTimer();
            this.displayMinutes = 0;
            this.displaySeconds = 0;
            this.refreshDisplay();
        }
    };
    
    $('#btnStart').on('click', () => timerObject.startTimer());
    $('#btnStop').on('click', () => timerObject.stopTimer());
    $('#btnReset').on('click', () => timerObject.resetTimer());
    
    $('#btnUpSeconds').on('click', () => timerObject.incrementSeconds());
    $('#btnDownSeconds').on('click', () => timerObject.decrementSeconds());
    
    $('#btnUpMinutes').on('click', () => timerObject.incrementMinutes());
    $('#btnDownMinutes').on('click', () => timerObject.decrementMinutes());
});