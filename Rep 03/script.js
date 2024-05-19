//prime or not
function checkPrime() {
    var num = prompt("Enter a number(2 - 1000): ", 11);
    var flag = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag) document.getElementById("result").innerHTML = num + " is Prime";
    else document.getElementById("result").innerHTML = num + " is Not Prime";
}

//palindrome or not
function checkPalindrome() {
    var input = prompt("Enter a string: ", "madam");
    var flag = true;
    var l = 0, r = input.length - 1;
    while (l <= r) {
        if (input[l] != input[r]) {
            flag = false;
            break;
        }
        l++; r--;
    }
    if (flag) document.getElementById("result").innerHTML = input + " is Palindrome";
    else document.getElementById("result").innerHTML = input + " is not Palindrome";
}

//leap year
function checkLY() {
    var year = prompt("Enter a number(2 - 1000): ", 1900);
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        document.getElementById("result").innerHTML = year + " is leap Yeaar";
    } else document.getElementById("result").innerHTML = year + " is not leap Yeaar";
}

//factorial
function calFact() {
    var num = prompt("Enter a number(0 - 100): ", 11);
    var ans = 1;
    for (var i = num; i >= 1; i--) ans *= i;
    document.getElementById("result").innerHTML = num + "! = " + ans;
}

//count word
function countWord() {
    var sentence = prompt("Enter a sentance: ", "The quick brown fox jumps over the lazy dog.");
    var words = sentence.trim().split(/\s+/);

    var wordCount = words.length;

    var letterCount = 0;
    words.forEach(function (word) {
        letterCount += word.replace(/[^a-zA-Z]/g, '').length;
    });
    document.getElementById("result").innerHTML = sentence + "<br>" + "Word: " + wordCount + " Leter: " + letterCount;
}
// sort
function sortNum() {
    var numbers = prompt("Enter numbers separated by space: ", "80 10 70 30 40 11 82");
    var num = numbers.split(" ");

    var n = num.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-i-1; j++) {
            if (num[j] > num[j+1]) {
                var temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
            }
        }
    }
    var sortedNumbers = num.join(" ");
    document.getElementById("result").innerHTML = sortedNumbers;
}
