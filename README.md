# Dot portal

## Built using

-   [Jekyll](https://jekyllrb.com)
-   [Bootstrap](https://getbootstrap.com/)

## Setup

### Requirements

-   Ruby >= 2.5
-   Node >= 14

### Installation

```
$ bundle install
$ npm install && npm run serve
```

Open from http://localhost:4000/dot-portal

### Development

JS/CSS/image sources can be found in `_webpack`.

### Deployment/build

Uses webpack to compile JS and CSS.

```
$ npm run build
```

Static files generated in `docs` folder

## Icons

SVG icon map generated using [IcoMoon app](https://icomoon.io/app/#/select).

1. Import icons from `icons` folder
2. Select the icons
3. Add/remove icons as necessary
4. Click 'Generate SVG & More'
5. Download and copy the contents of `symbol-defs.svg` into `includes/svg.html`
