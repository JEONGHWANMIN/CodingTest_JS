let str = '/foo/bar/baz/asdf';
console.log(str.lastIndexOf('/'));
console.log((str = str.slice(0, str.lastIndexOf('/'))));
