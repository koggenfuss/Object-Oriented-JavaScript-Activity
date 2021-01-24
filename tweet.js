//Pseudocode
//create a Tweet Class
//message should be no longer than 140 characters 
//user can add characters at end of string
//user can remove characters at end of string
//view current message

class Tweet {
    constructor(message, maxCharacterLength){
        this.maxCharacterLength = 140;
        if (message.length > 140){
            console.log("This tweet is more than 140 characters");
        }
        else {  
            this.message = [message];
        }
    }
    addLetter(letter){
        if(this.message.length + 1 > this.maxCharacterLength){
            console.log( `Max character count of ${this.maxCharacterLength} reached`); }
       else {
        return this.message.push(letter);}
        }
    removeLetter(){
        this.message.pop();
    }
    viewMessage(){
        console.log(this.message.join(''));
    }
    validateCharacterLength(){
        if(this.message.length + 1 > this.maxCharacterLength){
            console.log(`Max character count of ${this.maxCharacterLength} reached`);
        }
    }
}
let user = new Tweet("This is my first tweet", 140);
let user1 = new Tweet("askdjflas;jdkfasjlkdfjlaksdfjlaksdjfsklajdflkdsajf;kasjdfkjsaldfkjad;fjkadjfklasjdf;akjdfssaasdjfklas;dfkjasdfjlkas;djflkasjdflkajsdfkljsalkd;fjlsdakjflkasjdfklsa;djflsakjdfl;aldjsfkl;adjjdf;sjaldfkjaskdjfdas;jfskad;jf;akdjfka;sdfjd", 140);
console.log(user);
console.log(user1);

user.addLetter(' ');
user.addLetter('h');
user.addLetter('e');
user.addLetter('l');
user.addLetter('l');
user.addLetter('o');
user.addLetter('!');
console.log('Popping character off the tweet');
user.viewMessage();
user.removeLetter();
user.viewMessage();
user.removeLetter();
user.viewMessage();






