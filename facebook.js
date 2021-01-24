let post = {
    name: "Katharyn Lynn Oggenfuss",
    tag: "Code Differently",
    message: "Code Differently is the best!",
    time: "7:20",
    reaction: ["thumbs up", "love", "thumbs down", "angry", "shocked"],
    picture: "image",
    caption : "Coding is awesome!",
    comment: "that's great!",
    share: "share with friends",
    
    addComment(comment) {
        this.comment = comment;
        return comment;
    },

    time() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return time;
    },

    react(feeling) {
        for( let i=0; i < this.reaction.length; i++) {
            if (feeling === this.reaction[i]) {
                return this.reaction[i];
            }
        }
    }
}

console.log(post.addComment("This is my first comment"));
console.log(post.time());
console.log(post.react("love"));