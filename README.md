# magic-script-pretty-print

Value pretty-printer for mldb log in magicscript.

## Install

Add to your magicscript application using npm.

```sh
npm i magic-script-pretty-print
```

## Usage

```js
import { p } from "magic-script-pretty-print";

// Pretty-print any value.  This shows lots of information in pretty colors.
p({ some: "Value" });
```

## Screenshot

This is the result of running the following:

```js
import * as uv from "uv";
p(uv);
```

![image](https://user-images.githubusercontent.com/89353/70291665-6fbc3400-17a1-11ea-9375-f654d7f87753.png)
