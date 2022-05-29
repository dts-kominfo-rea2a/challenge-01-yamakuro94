// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};
let daftarEducation = [];
let setFavoriteColour;
let setFavoriteRestaurant;

// Define firstUser
daftarEducation = [
  {
    name: "SD 01",
    city: "Jakarta",
    graduate: "2016",
  },
  {
    name: "SMP 02",
    city: "Jakarta",
    graduate: "2019",
  },
  {
    name: "SMA 03",
    city: "Tangerang",
  },
];

setFavoriteColour = new Set();
setFavoriteColour.add("Yellow");
setFavoriteColour.add("Pink");
setFavoriteColour.add("White");
setFavoriteColour.add("Purple");

setFavoriteRestaurant = new Set();
setFavoriteRestaurant.add("Bento");
setFavoriteRestaurant.add("Sushi");
setFavoriteRestaurant.add("Pancake");
setFavoriteRestaurant.add("Eggy");
setFavoriteRestaurant.add("Tempura");
setFavoriteRestaurant.add("Bento");
setFavoriteRestaurant.add("Eggy");
setFavoriteRestaurant.add("Padang");
setFavoriteRestaurant.add("Tteok");
setFavoriteRestaurant.add("Sushi");
setFavoriteRestaurant.add("Sushi");

firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = setFavoriteColour;
firstUser.isHavePet = "Yes";
firstUser.education = daftarEducation;
firstUser.favoriteRestaurant = setFavoriteRestaurant;

// Define secondUser
daftarEducation = [
  {
    name: "SD 02",
    city: "Jakarta",
    graduate: "2010",
  },
  {
    name: "SMP 03",
    city: "Bogor",
    graduate: "2013",
  },
  {
    name: "SMA 01",
    city: "Surabaya",
    graduate: "2016",
  },
  {
    name: "Universitas Maju",
    city: "Tangerang",
  },
];

setFavoriteColour = new Set();
setFavoriteColour.add("Blue");
setFavoriteColour.add("Black");
setFavoriteColour.add("Grey");

setFavoriteRestaurant = new Set();
setFavoriteRestaurant.add("Tempura");
setFavoriteRestaurant.add("Bento");
setFavoriteRestaurant.add("Sushi");
setFavoriteRestaurant.add("Pancake");
setFavoriteRestaurant.add("Padang");
setFavoriteRestaurant.add("Katsu");
setFavoriteRestaurant.add("Geprek");
setFavoriteRestaurant.add("Pancake");
setFavoriteRestaurant.add("Eggy");

secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = setFavoriteColour;
secondUser.isHavePet = "No";
secondUser.education = daftarEducation;
secondUser.favoriteRestaurant = setFavoriteRestaurant;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users[0] = firstUser;
users[1] = secondUser;

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
