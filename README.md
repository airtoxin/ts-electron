# ts-electron

electron + webpack + typescript + css-modules + react + redux

Its foundation is mostly powered by [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

## Need to know

`electron-webpack` provides `.css` file configuration automatically, but that one was not suit for css-modules.
So we use `.cssmodules` extension for css file.

_Note: `electron-webpack` provides way to [modifying default configuration](https://webpack.electron.build/modifying-webpack-configurations) internally uses [`webpack-merge`](https://github.com/survivejs/webpack-merge)'s smart method, but that doesn't works well._ 

## License

MIT
