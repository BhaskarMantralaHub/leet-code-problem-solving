function isPalindrome(x: number): boolean {
    if (x <0) return false;
    if (x < 10) return true;
    let input = x.toString();
    for (let i = 0, j=input.length-1; i < input.length; i++, j--) {
        if (input.charAt(i) != input.charAt(j)) return false;
    }
    return true;
}
