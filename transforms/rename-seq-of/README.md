# rename-seq-of


## Usage

```
npx immutable-v4-codemods rename-seq-of path/of/files/ or/some**/*glob.js

# or

yarn global add immutable-v4-codemods
immutable-v4-codemods rename-seq-of path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js rename-seq-of path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/rename-seq-of/__testfixtures__/basic.input.js)</small>):
```js
Seq.of(1, 2, 3);

```

**Output** (<small>[basic.output.js](transforms/rename-seq-of/__testfixtures__/basic.output.js)</small>):
```js
Seq(1, 2, 3);

```
<!--FIXTURES_CONTENT_END-->