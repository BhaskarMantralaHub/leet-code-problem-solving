const isValid = (s: string) => {
    if (!s || s.length %2 != 0) return false;

    const stack = [];
    const openSet = new Set(['(', '{', '[']);

    const customMap = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])

    for (let i = 0; i < s.length; i++) {
        if (openSet.has(s[i])) stack.push(s[i]); //add open set elements
        else {
            //pop open set elements and match the latest stack has opposite parenthesis
            const removedChar: string = stack.pop() as string;
            if (s[i] != customMap.get(removedChar)) return false;
        }
    }

    return stack.length === 0; //stack must be empty
}