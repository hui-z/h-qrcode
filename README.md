# h-qrcode

[![npm version](https://badge.fury.io/js/h-qrcode.svg)](https://badge.fury.io/js/h-qrcode)

This project is forked from [qrcodejs](https://github.com/davidshimjs/qrcodejs), your can find the original README there.

Here we are only going to include features which added by h-qrcode .

> This project is experimental currently, API might be changed in later release.

# Installation

h-qrcode is on npm, you can install it from npm, and use it with any bundler tool.

``` bash
npm install --save h-qrcode
```

# Usage


## qrcode with colors


## qrcode with dots

![dotted](/images/dotted.png)


``` js
let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.google.com",
  width: 256,
  height: 256,
  isDotted: true,
});
```

see [dotted example](/examples/dotted.html)


Use `colorDark` or `colorLight` to change the foreground or the background color.



## qrcode with colorful dots

![colorful](/images/colorful-dots.png)


``` js
let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.google.com",
  width: 256,
  height: 256,
  isDotted: true,
  colorful: true
});
```

see [colorful example](/examples/colorful.html)


> Note: In order to avoid break orignal features, colorful will only work with dotted qrcode.



## use with preset colors

We have several pre-defined color persets for you, the color palette is:

![color-palette](/images/color-palette.png)

Use the preset colors with option `usePerset`:

``` js
let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.google.com",
  width: 256,
  height: 256,
  isDotted: true,
  colorful: true
  usePreset: 0 // the perset number you want to use
});
```

> If you did not select any colors for colorful qrcode, it'll random one from presets for you.



## use with customized colors

Specify colors of the dots by yourself:

``` js
let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.google.com",
  width: 256,
  height: 256,
  isDotted: true,
  colorful: true
  colors: ['#AA39395', '#000000']
});
```



# License

[MIT](/LICENSE)
