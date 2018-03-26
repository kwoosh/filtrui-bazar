# WTF did you say?

`filtrui-bazar` is a small library for filtering entry text =) Don't be rude ^^

## Usage

### Import

```js
const purify = require("filtrui-bazar")
```

`your.js`

```js
const filters = require("./your-filters.json")

const text = "Слышь мля, а ну потеряйся нахой!"

purify(text, filters)
// reslut: Послушайте любейзнейший, прошу покинуть это место, пожалуйста!
```

`your-filters.json`

```json
{
	"слышь": "Послушайте",
	"мля": "любейзнейший",
	"нахой": ", пожалуйста",
	"а ну": "прошу",
	"потеряйся": "покинуть это место"
}
```

Or you can write filters like an object

```js
const text = "Fuck you"
const filters = {
	fuck: "Love"
}

purify(text, filters) // reslut: Love you
```

<!-- You can also set `ingoreCase` option to false and your keys will be replaced only if match is perfect. `true` by Default.

```js
const ignoreCase = false
const text = "Fuck you"
const filters = {
	fuck: "Love"
}

purify(text, filters, ignoreCase) // reslut: Fuck you
// `fuck` does not match to `Fuck` in this case
``` -->

See other [example](./example/index.js) there.
