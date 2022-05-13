var QRCode = require("qrcode");

QRCode.toString(
  "邓予柒的二维码测试",
  { type: "terminal" },
  function (err, data) {
    console.log(data);
  }
);
