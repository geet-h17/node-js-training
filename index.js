// Javascript Function to take a string and count the number of vowels and return back

const express = require('express')

const app = express()
app.use(express.json()) 

// Function to take input string and returns the vowel count : 
const vowels = ["a","e","i","o","u"]
let countVowel = (string) =>{
    string = string.toLowerCase();
    count =0;
    for (let i=0; i<string.length; i++){
        if(vowels.includes(string[i])) count += 1;
    }
    return count;
}

// console.log(countVowel("aeiouBsdafberg"))

app.get('/countvowel', (req,res) => {
    let string = req.body.str; //validations
    let vowels = countVowel(string);
    res.send({"vow": vowels})
})

// port + IP address => socket 
const port = 3000; 
const ip = "localhost";

app.listen(port, ip,()=>{
    console.log("Started Listening");
})




