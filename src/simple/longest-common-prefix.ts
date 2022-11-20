function longestCommonPrefix(strs: string[]): string {
    let prefix = '';
    let currentPrefix = '';
    let firstString = strs[0];
    if (strs.length == 0) return '';
    for (let i=0; i<firstString.length; i++) {
        currentPrefix = currentPrefix + firstString[i];
        for (let j=1; j<strs.length; j++) {
            if (strs[j].indexOf(currentPrefix) != 0) return prefix;
        }
        prefix = currentPrefix;
    }
    return prefix;
}