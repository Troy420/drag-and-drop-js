
// ---
var s = "";
for (var i = 1; i < 11; i++){ // 1 ... 10
    for (var j = 1; j < i; j++) { // checking first row -> 1 < 1 ... 10 false.
        s += " ";
    }
    for (var j = 10; j >= i; j--) { // checking first row -> 10 >= 1 ... 10 true. 
        s += "*";
    }
    s += '\n';
}
console.log(s);


// ---
var s = "";
for (var i = 1; i < 11; i++){ 
    for (var j = 1; j <= i; j++) { 
        s += "*";
    }
    s += '\n';
}
for (var i = 10; i > 0; i--){ 
    for (var j = 1; j < i; j++) { 
        s += "*";
    }
    s += '\n';
}
console.log(s);


//---
var s = "";
for (var i = 1; i <= 5; i++){ 
    for (var j = 1; j <= (5-i); j++) { 
        s+=" ";
    }
    for (var j = 1; j <= (2*i-1); j++) { 
        s+="*";
    }
    s += '\n';
}
console.log(s);

// ---
var s = "";
for (var i = 1; i <= 5; i++){ 
    for (var j = 1; j <= (5-i); j++) { 
        s+=" ";
    }
    for (var j = 1; j <= (2*i-1); j++) { 
        s+="*";
    }
    s += '\n';
}
for (var i = 1; i <= 5; i++){ 
    for (var j = 1; j < i; j++) { 
        s+=" ";
    }
    for (var j = 1; j <= 2 * (6-i) - 1; j++) { 
        s+="*";
    }
    s += '\n';
}
console.log(s);
