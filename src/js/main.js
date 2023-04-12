const img = document.createElement("img");

const imgUrl = new URL("../media/dog.jpg", import.meta.url);
console.log(imgUrl);
console.log(imgUrl.href);
img.src = imgUrl;
document.body.append(img);