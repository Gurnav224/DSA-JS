

function groupAnagrams(strs){
    const anagramGroups = new Map();

    for(const str of strs){
        const sortedStr = str.split("").sort().join("");
        if(!anagramGroups.has(sortedStr)){
            anagramGroups.set(sortedStr,[]);
        }
        anagramGroups.get(sortedStr).push(str);
    }

    return Array.from(anagramGroups.values());
}


const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strings));