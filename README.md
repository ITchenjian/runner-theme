## Installation
install local or global
```shell
npm i runner-theme -D
```

install `theme-chalk`
```shell
npm i runner-theme-chalk -D
```

## CLI
```shell
# init variables file
rt --init [file path]

# watch then build
rt --watch [--config variable file path] [--out theme path]

# build
rt [--config variable file path] [--out theme path] [--minimize]
```

## Node API
```javascript
var rt = require('runner-theme')

// watch mode
rt.watch({
  config: 'variables/path',
  out: 'output/path'
})

// build
rt.run({
  config: 'variables/path',
  out: 'output/path',
  minimize: true
})
```

## Options
### config
Variable file path, default `./runner-variables.css`.

### out
Theme output path, default `./theme`.

### browsers
set browsers, default `['ie > 9', 'last 2 versions']`.

## Config
You can configure some options in `runner-theme` by putting it in package.json:
```json
{
  "runner-theme": {
    "browsers": ["ie > 9", "last 2 versions"],
    "out": "./theme",
    "config": "./runner-variables.css",
    "theme": "runner-theme-chalk",
    "minimize": false,
    "components": ["button", "input"]
  }
}
```

## License
MIT
