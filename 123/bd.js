let Pr = localStorage.getItem("products");
Pr = Pr ? JSON.parse(Pr) : [];

console.log(Pr);

let product = [];


if (Pr.length > 2) {
    product = Pr;
} else {
    console.log("Mahsulotlar ro'yxati kam. Yaratilmoqda...");

    product = [
        {
            id: 1,
            title: "iphone 15 pro",
            price: 100,
            image: "https://i.ytimg.com/vi/lr0rSqyItHo/maxresdefault.jpg",
        },
        {
            id: 2,
            title: "iphone 13 pro",
            price: 90,
            image: "https://mtscdn.ru/upload/iblock/cd4/Bez-nazvaniya-_2_.png",
        },
    ];

    localStorage.setItem("products", JSON.stringify(product));
}

console.log(product);
