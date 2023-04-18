// key-value pairs for letters and scores
let letters ={
    'A':1,
    'B':3,
    'C':3,
    'D':2,
    'E':1,
    'F':4,
    'G':2,
    'H':4,
    'I':1,
    'J':8,
    'K':5,
    'L':1,
    'M':3,
    'N':1,
    'O':1,
    'P':3,
    'Q':10,
    'R':1,
    'S':1,
    'T':1,
    'U':1,
    'V':4,
    'W':4,
    'X':8,
    'Y':4,
    'Z':10
    };

//score calculator
function scrabbleScore(word){
    let points = 0
    let dbl = 1
    let trpl = 1

    word = word.toUpperCase()
    letterArray = word.split("") 

    for (let i = 0; i < letterArray.length; i++) {
    
    //check for double/tripple scores
    if(letterArray[i] == '{'){
        dbl *= 2;
        continue;
    }else if(letterArray[i] == '}'){
        dbl /= 2
        continue;
    }else if(letterArray[i] == '['){
        trpl *= 3
        continue;
    }else if(letterArray[i] == ']'){
        trpl /= 3
        continue;
    }
    points += letters[letterArray[i]] * dbl * trpl
    }
    return points
}

// console.log(scrabbleScore('OXYPHENBUTAZONE'))
// console.log(scrabbleScore("[[O][X]Y[P]H[E]NBU{T}A{Z}{O}N[E]]")) //output should be 243 as per online scrabble calculator