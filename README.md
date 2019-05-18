# static-site-gulp-webpack-boilerplate

> Drop-in [Gulp](http://gulpjs.com/) and [Webpack](https://webpack.js.org/) tasks for static site development.

__Includes:__

- Image optimization (imagemin).
- CSS/Sass processing and minification (sourcemaps, autoprefixer, clean-css).
- JavaScript bundling and minification (webpack, babel-minify).
- Delivery folder generation - clean and ready for distribution to staging, production, etc.
- Fully configurable build process.

## Installation

__Step 1:__ Add global packages to your computer.

- Required: [node & npm](https://nodejs.org/), [gulp-cli](http://gulpjs.com/)

__Step 2:__ Install dependencies:

npm install

## Configuration

Default paths and plugin-configurations can be modified to your liking, but anything beyond that may require some Gulp file refactoring. Additional documentation provided via comments within `gulpfile.js`.

An example file structure with [include-media](https://www.npmjs.com/package/include-media), [normalize.css](https://www.npmjs.com/package/normalize.css), [flexboxgrid](https://www.npmjs.com/package/flexboxgrid), and [jQuery](https://www.npmjs.com/package/jquery) (via node_modules) have been added to the project. To reduce build size, feel free to remove these extra files and packages if they go unused.

```
src/
├── images/
│   └── *.gif, *.jpg, *.png, *.svg
├── js/
│   └── *.js (or *.module.js - for exports only)
├── styles/
│   └── *.css, *.scss
└── fonts/
    └── *.woff, *.woff2, *.ttf, svg...
```

Do __NOT__ remove or rename the immediate folders within `src` unless you plan to modify the gulp configuration.

## Development

__Default script:__

Processes source files, starts a BrowerSync server (defaults to port 3000), and watches for file changes.

gulp

__Other scripts:__

Deletes the generated output folder. This is your reset button.

```sh
npm run clean
```

## Staging/Production

__Default script:__

Processes/minifies/moves files to the configured output folder for distribution.

```sh
npm run build
```

__Notes:__

- Use a bang to avoid comments from being stripped out of stylesheets, ex: `/*! ... */`
- Individual production tasks can be run seperately, ex:

```sh
# Move public files and (sub)folders.
npm run build:public

# Image optimization.
npm run build:media

# CSS/Sass processing and minification.
npm run build:styles

# JavaScript bundling and minification.
npm run build:scripts
```
