# h-qrcode

This project is forked from [qrcodejs](https://github.com/davidshimjs/qrcodejs), your can find the original README there.
Here I'm ganna just talk about features h-qrcode added.

> This project is experimental now, API would be changed in later release.

# Installation

h-qrcode is on npm, you can install from npm, and use it with any bundler.

``` bash
npm install --save h-qrcode
```

# Usage

## create qrcode with dot

``` js
let qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://www.google.com",
  width: 128,
  height: 128,
  isDotted: true,
});
```