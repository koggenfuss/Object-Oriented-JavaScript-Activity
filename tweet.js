//Pseudocode
//create a Tweet Class
//message should be no longer than 140 characters 
//user can add characters at end of string
//user can remove characters at end of string
//view current message

class Tweet {
    constructor(tweet) {
        if (tweet.length <= 140) {
            this.tweet = tweet;
        } else {
            console.log("Message over 140 characters");
            }
        }

        // addCharacter(character) {
        //     this.tweet.push(character);
        // }

        removeCharacter() {
            this.tweet.pop();
        }
    }


let tweet1 = new Tweet("This is a tweet over 140 characters   dkfgagfhlkdfshglkhsdkfhglksdhfgkhsdfgkhsdklfghkldshfgkhsdfghksldfhgksdhfgkhsdfkghdskfghlkdshfg;kdshfgkshdfglkhdsfghslkdhfglkdshfglshdflgkhsdlkfghskldfhgksldhfgkshfdkghsdfkghsdkfghksdlhfg;ksdhfgkh;sdfghsdflghsd;fhg");
let tweet2 = new Tweet("This is my first tweet");
//tweet2.addCharacter("!");
console.log(tweet1);
console.log(tweet2);
console.log(tweet2.removeCharacter());



