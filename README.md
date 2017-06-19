# h-qrcode

This project is forked from [qrcodejs](https://github.com/davidshimjs/qrcodejs), your can find the original README there.

Here we are only include features h-qrcode added.

> This project is experimental currently, API would be changed in later release.

# Installation

h-qrcode is on npm, you can install from npm, and use it with any bundler.

``` bash
npm install --save h-qrcode
```

# Usage

## Create qrcode with dots

![dotted](/images/dotted.jpeg)

see [dotted example](/examples/dotted.html)

``` js
let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.google.com",
  width: 256,
  height: 256,
  isDotted: true,
});
```
You can use `colorDark` and `colorLight` to change the foreground and background color.

## Create qrcode with colorful dots

![colorful](/images/colorful.jpeg)

see [colorful example](/examples/colorful.html)

``` js
let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.google.com",
  width: 256,
  height: 256,
  isDotted: true,
  colorful: true
});
```

> Note: In order to avoid break orignal features, colorful will only work with dotted qrcode.

## Use with preset colors

We have several pre-defined color persets for you, the color scheme are:

``` js
["#32450C", "#717400", "#DC8505", "#EC5519", "#BE2805"] // #0
['#010712', '#13171F', '#1C1F26', '#24262D', '#961227'] // #1
['#F78F00', '#C43911', '#75003C', '#37154A', '#0F2459'] // #2
['#420000', '#600000', '#790000', '#931111', '#BF1616'] // #3
['#3D0319', '#720435', '#C1140E', '#FC5008', '#32241B'] // #4
['#C89B41', '#A16B2B', '#77312B', '#1C2331', '#152C52'] // #5
```

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

## Use with customized colors

Specify color of the dots by yourself:

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