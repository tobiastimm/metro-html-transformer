# metro-html-transformer

> Experimental html transformer for metro

I'm trying to use [`metro`](https://facebook.github.io/metro/) as a web bundler and the first issues I have occurred were `html` files. This transformer is pretty hackish. Maybe there is a better way to load the html, but I was quite happy that it works 😄.

## Install

> I haven't released a npm package yet!

### With `npm`

```bash
npm install --save-dev metro-html-transformer
```

### With `yarn`

```
yarn add -D metro-html-transformer
```

## Usage

In your `metro.config.js` add

```js
 resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'html'],
    // other options ...
  },
  transformer: {
    babelTransformerPath: require.resolve('./lib/metro-html-transformer'),
    // other options ...
  },
```

## License

[MIT](./LICENSE)
