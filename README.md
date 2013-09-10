jQuery Invert Object
====================

See live example <a class="jsbin-embed" href="http://jsbin.com/eCIfiDa/19/embed?html,js,console">jsbin.com</a>
```js
console.log($({a: 1, b: 3, c: 2}).invert());
```
Result will be:
```js
[object Object] {
  a: 1,
  b: 3,
  c: 2
}

```
For:
```js
console.log($({a: 1, b: 3, c: 2}).invert(1).prop(2));
```
Result will be:
```js
"c"
```
