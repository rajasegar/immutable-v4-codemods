# map-to-array


## Usage

```
npx immutable-v4-codemods map-to-array path/of/files/ or/some**/*glob.js

# or

yarn global add immutable-v4-codemods
immutable-v4-codemods map-to-array path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js map-to-array path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/map-to-array/__testfixtures__/basic.input.js)</small>):
```js
const vals = Map({
  a: 1,
  b: 2,
}).toArray();

```

**Output** (<small>[basic.output.js](transforms/map-to-array/__testfixtures__/basic.output.js)</small>):
```js
const vals = Map({
  a: 1,
  b: 2,
}).toList().toArray();

```
<!--FIXTURES_CONTENT_END-->