"use strict";
/*function timeoutCallBack() {

    console.log("Kullanıcılar yüklendi");
  }

function LoadKullanıcılar() {

    setTimeout(timeoutCallBack,0);
}

console.log("İşlemden once");
LoadKullanıcılar();
console.log("İşlemden sonra");
console.log(__filename);*/
//buffer
//var tampon = Buffer.from("cem");
//console.log(tampon.toString("base64"));

/*var i =0;
var yaz = setInterval(function () {
    console.log("Yusuf SEZER");

    i++;
    if (i == 3) {
        clearInterval(yaz)
    }

}, 2000);*/

// kendi modulunu cagirma
//const islem = require("./islem");
/*
const http = require("http");

http
  .createServer(function(req, res) {
    res.end("Merhaba Node.js");
  })
  .listen(1453);

console.log("Sunucu çalışıyor...");

const fs = require("fs");

fs.readFile("metin.txt", "utf-8", function (err,data) { 
LoadKullanıcılar(err,data);
 });

function LoadKullanıcılar(err,data) {
      console.log(err);
  console.log(data);
}

const fs = require("fs");

fs.writeFile("dosya.txt", "Merhaba Node.js", function(err, data) {
  if (err) throw err;

  console.log("Veri başarıyla yazıldı.");
});



const fs = require("fs");

fs.open("metin.txt", "r", function(err, fd) {
  if (err) throw err;

  var tampon = new Buffer(1024);

  fs.read(fd, tampon, 0, tampon.length, 0, function(err, bytes) {
    if (err) throw err;

    if (bytes > 0) console.log(tampon.slice(0, bytes).toString());

    fs.close(fd, function(err) {
      if (err) throw err;
    });
  });
});

*/
const http = require("http");

var i=0;
const sunucu = http.createServer(function(request, response) {
  
  if (request.url == "/" || request.url == "/anasayfa") {
    response.write("Burası anasayfa");
  } else if (request.url == "/iletisim") {
    response.write("Burası iletişim sayfası");
  } else {
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });

    response.write("Böyle bir sayfa mevcut değil");
  }

  response.end();
});

sunucu.listen(3000);

console.log("Sunucu çalışıyor... 3000");