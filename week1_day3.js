function acronymMaker(string) {
    string = string.replace(/\s+/g, " ").trim();
    let stringArr = string.split(" ");
    let acronym = "";
    if(stringArr[0] === "") {
        return "EZ acronym";
    }
    for(let i=0; i<stringArr.length; i++) {
        acronym += stringArr[i][0];
    }
    return acronym.toUpperCase();
}

console.log(acronymMaker("Behold My Glory"));
console.log(acronymMaker("what is life?"));
console.log(acronymMaker("   Woah   those spaces  "));
console.log(acronymMaker(""));