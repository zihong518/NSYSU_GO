    let count = document.getElementById('count')
    const nowMoney = document.getElementById('nowMoney').innerHTML
    const goalMoney =document.getElementById('goalMoney').innerHTML
    const moneyRatio = Math.floor( nowMoney / goalMoney * 100);

    function valueNumber(id,startNumber,endNumber,duration){
        if (startNumber === endNumber) return;
        let range = endNumber-startNumber;
        let current = startNumber;
        let increment = endNumber > startNumber? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const obj = document.getElementById(id);
        let timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current+"%";
            if (current == endNumber) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    valueNumber("count",0, moneyRatio, 1000);

    let s = Snap('#animated');
    let progress = s.select('#progress');


    if (moneyRatio>60){
        progress.attr({stroke: '#89F084'});
    }
    else if (moneyRatio > 30){
        progress.attr({stroke: '#F6BF03'});
    }
    else{
        progress.attr({stroke: '#FF8077'});
    }

    progress.attr({strokeDasharray: '0, 251.2'});

    let progressGoal = 251.2*moneyRatio/100;
    
    Snap.animate(0,progressGoal, function( value ) {
        progress.attr({ 'stroke-dasharray':value+',251.2'});
    }, 1000, mina.easeinout(0));