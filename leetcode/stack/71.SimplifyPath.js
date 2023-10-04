/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];

    const paths = path.split("/");

    const continueCase = path === '/' || path === '' || path === '.'

    for (let path of paths) {
        if (continueCase) continue;
        if (path === '..') {
            stack.pop();
            continue;
        }
        stack.push(path)
    }

    return "/"+stack.join("/")
};
