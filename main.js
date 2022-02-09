//Girdi değişkenleri
var productType, productSelection, productQuantity, productInstallment;

//Çıktı değişkenleri
var subtotal,
  totalAmount,
  shippingFee = 7;

//Global nesne değişkenleri
var list, choice;

//Dizi tipindeki değişkenler
var mensPerfumes = [
  "Celvin Clein",
  100,
  "Lacoste",
  120,
  "Axe",
  30,
  "First Class",
  50,
];
var womensPerfumes = ["Burbery", 150, "Avon", 80, "She", 60, "Nina Ricci", 130];

function urunTaksidiDoldur() {
  //   document
  //     .querySelectorAll("#urunTaksidi option")
  //     .forEach((option) => option.remove());
  for (let i = 0; i < 13; i += 3) {
    choice = document.createElement("option");
    document.getElementById("urunTaksidi").options.add(choice);
    choice.text = i;
    choice.value = i;
  }
}
function urunAdediDoldur() {
  //   document
  //     .querySelectorAll("#urunAdedi option")
  //     .forEach((option) => option.remove());
  for (let i = 1; i < 6; i++) {
    choice = document.createElement("option");
    document.getElementById("urunAdedi").options.add(choice);
    choice.text = i;
    choice.value = i;
  }
}

function urunleriGetir() {
  document
    .querySelectorAll("#urunListesi option")
    .forEach((option) => option.remove());
  for (let i = 0; i < document.getElementsByName("urunTipi").length; i++) {
    if (document.getElementsByName("urunTipi")[i].checked) {
      productType = document.getElementsByName("urunTipi")[i].value;
    }
  }
  if (productType == "E") {
    for (let i = 0; i < mensPerfumes.length; i += 2) {
      choice = document.createElement("option");
      document.getElementById("urunListesi").options.add(choice);
      choice.text = mensPerfumes[i];
      choice.value = mensPerfumes[i + 1];
    }
  }
  if (productType == "K") {
    for (let i = 0; i < womensPerfumes.length; i += 2) {
      choice = document.createElement("option");
      document.getElementById("urunListesi").options.add(choice);
      choice.text = womensPerfumes[i];
      choice.value = womensPerfumes[i + 1];
    }
  }
}

function hesapla() {
  productSelection =
    document.getElementById("urunListesi")[
      document.getElementById("urunListesi").selectedIndex
    ].value;
  console.log(productSelection);
  productQuantity =
    document.getElementById("urunAdedi")[
      document.getElementById("urunAdedi").selectedIndex
    ].value;
  productInstallment =
    document.getElementById("urunTaksidi")[
      document.getElementById("urunTaksidi").selectedIndex
    ].value;
  subtotal = productSelection * productQuantity;
  console.log(subtotal);
  if (productInstallment == 3) {
    subtotal = subtotal * 1.1;
  } else if (productInstallment == 6) {
    subtotal = subtotal * 1.2;
  } else if (productInstallment == 9) {
    subtotal = subtotal * 1.3;
  } else if (productInstallment == 12) {
    subtotal = subtotal * 1.4;
  }
  document.getElementById("txtBirimToplam").value = productSelection + " TL";
  if (subtotal < 100) {
    document.getElementById("txtAraToplam").value = subtotal + " TL";
    document.getElementById("txtKargo").value =
      "100TL VE ALTI ALIŞVERİŞLERDE KARGO ÜCRETİ 7TL";
    document.getElementById("sonuc").innerHTML =
      "GENEL TOPLAM: " + Number(subtotal + shippingFee).toFixed(2) + " TL";
  } else if (subtotal >= 100) {
    document.getElementById("txtAraToplam").value = subtotal.toFixed(2) + " TL";
    document.getElementById("txtKargo").value =
      "100 TL VE ÜZERİ ALIŞVERİŞLERDE ÜCRETSİZ KARGO ";
    document.getElementById("sonuc").innerHTML =
      "GENEL TOPLAM(VADE FİYATI VE KARGO FİYATI DAHİL): " +
      subtotal.toFixed(2) +
      " TL";
  }

  if (productInstallment.selectedIndex != "") {
    if (subtotal < 100) {
      document.getElementById("sonuc2").innerHTML =
        "Aylık ödeme: " +
        ((subtotal + shippingFee) / productInstallment).toFixed(2) +
        " TL  ";
    } else if (subtotal > 100) {
      document.getElementById("sonuc2").innerHTML =
        "Aylık ödeme: " + (subtotal / productInstallment).toFixed(2) + " TL";
    }
  }
  
  
}
