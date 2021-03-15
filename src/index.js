module.exports = function toReadable (number) {

    let singleDigits = function (number) {

        switch(number) {
            case 0: return 'zero';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';            
        }
    }
    
    let doubleDigits = function (number) {

        switch(number) {
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
        }
    }

    let dozens = function (number) {

        switch(number) {
            case 2: return 'twenty';
            case 3: return 'thirty';
            case 4: return 'forty';
            case 5: return 'fifty';
            case 6: return 'sixty';
            case 7: return 'seventy';
            case 8: return 'eighty';
            case 9: return 'ninety';
        }
    }

    let a = number / 10;
    let b = number / 100;

    let c = number % 10;
    let d = number % 100;

    if(number < 10) {
        return singleDigits(number);
    }

    if (number < 20) {
        return doubleDigits(number);
    }

    if (number < 100) {
        if(c === 0) {
            return (dozens(Math.floor(a)));
        }
        else return (dozens(Math.floor(a)) + ' ' + singleDigits(c));
    }

    if (number < 1000) {

        if(d === 0) {
            return `${singleDigits(Math.floor(b))} hundred`;
        }

        if(d < 10) {
            return `${singleDigits(Math.floor(b))} hundred ${singleDigits(c)}`;
        }

        if(d < 20 && d >= 10) {
            return `${singleDigits(Math.floor(b))} hundred ${doubleDigits(d)}`;
        }

        if(c === 0) {
            return `${singleDigits(Math.floor(b))} hundred ${dozens((Math.floor((d) / 10)))}`;
        }

        else return `${singleDigits(Math.floor(b))} hundred ${dozens((Math.floor((d) / 10)))} ${singleDigits(c)}`;
    }
}
