module.exports = function toReadable(number) {
    let num = number.toString().split("");

    function switcherOne(num) {
        let phrase = "";
        switch (num[0]) {
            case "0":
                phrase = "zero";
                break;
            case "1":
                phrase = "one";
                break;
            case "2":
                phrase = "two";
                break;
            case "3":
                phrase = "three";
                break;
            case "4":
                phrase = "four";
                break;
            case "5":
                phrase = "five";
                break;
            case "6":
                phrase = "six";
                break;
            case "7":
                phrase = "seven";
                break;
            case "8":
                phrase = "eight";
                break;
            case "9":
                phrase = "nine";
                break;
        }
        return phrase;
    }

    function switcherTen(num) {
        let tens = "";

        switch (num[0]) {
            case "1":
                tens = "ten";
                break;
            case "2":
                tens = "twenty";
                break;
            case "3":
                tens = "thirty";
                break;
            case "4":
                tens = "forty";
                break;
            case "5":
                tens = "fifty";
                break;
            case "6":
                tens = "sixty";
                break;
            case "7":
                tens = "seventy";
                break;
            case "8":
                tens = "eighty";
                break;
            case "9":
                tens = "ninety";
                break;
        }
        if (num[1] != 0 && num[0] >= 2) {
            return tens + " " + switcherOne(num[1]);
        } else if (num[1] == 0 && num[0] != 1) {
            return tens;
        } else {
            switch (num[0] + num[1]) {
                case "11":
                    tens = "eleven";
                    break;
                case "12":
                    tens = "twelve";
                    break;
                case "13":
                    tens = "thirteen";
                    break;
                case "14":
                    tens = "fourteen";
                    break;
                case "15":
                    tens = "fifteen";
                    break;
                case "16":
                    tens = "sixteen";
                    break;
                case "17":
                    tens = "seventeen";
                    break;
                case "18":
                    tens = "eighteen";
                    break;
                case "19":
                    tens = "nineteen";
                    break;
            }
            return tens;
        }
    }

    if (num.length == 1) {
        return switcherOne(num);
    }

    if (num.length == 2) {
        return switcherTen(num);
    }

    if (num.length == 3) {
        if (num[1] == 0 && num[2] == 0) {
            return switcherOne(num[0]) + " hundred";
        } else if (num[1] == 0) {
            return switcherOne(num[0]) + " hundred " + switcherOne(num[2]);
        } else {
            return (
                switcherOne(num[0]) + " hundred " + switcherTen(num.slice(1))
            );
        }
    }
};
