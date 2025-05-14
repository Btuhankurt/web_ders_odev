function kaydet(e) {
    e.preventDefault();
    const ad = document.getElementById("ad").value;
    const email = document.getElementById("email").value;
    const gorev = document.getElementById("gorev").value;
  
    localStorage.setItem("ad", ad);
    localStorage.setItem("email", email);
    localStorage.setItem("gorev", gorev);
  
    window.location.href = "form_sonuc.html";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const tablo = document.getElementById("veri");
    if (tablo) {
      const ad = localStorage.getItem("ad") || "";
      const email = localStorage.getItem("email") || "";
      const gorev = localStorage.getItem("gorev") || "";
  
      tablo.innerHTML = `<tr><td>${ad}</td><td>${email}</td><td>${gorev}</td></tr>`;
    }
  });
  function hikayeGoster() {
  const hikayeler = [
    "🧝‍♂️ **Beren ile Lúthien**: İnsan Beren ve ölümsüz elf Lúthien’in aşkı, Morgoth'un Silmaril’ini çalmalarıyla efsaneye dönüşür.",
    "🧙‍♂️ **Gandalf'ın Balrog ile Savaşı**: Moria'nın derinliklerinde Gandalf, gölgelerin iblisi Balrog ile karşılaşır: 'You shall not pass!'",
    "🗡️ **Helm's Deep Kuşatması**: Rohan'ın savunucuları Helm's Deep'te Saruman'ın ordusuna karşı destansı bir direniş sergiler.",
    "🌋 **Sauron’un Düşüşü**: Frodo ve Sam, yüzüğü Mount Doom’a ulaştırır. Gollum’un son hamlesi kaderi belirler.",
    "👑 **Aragorn’un Tahta Çıkışı**: Gondor’un kralı uzun yıllar sonra döner, barış ve umut yeniden doğar.",
    "🌳 **Fangorn Ormanı ve Entler**: Ağaç çobanları Entler, Isengard’a yürür. Saruman’ın kulesi sulara gömülür."
  ];

  const rastgele = hikayeler[Math.floor(Math.random() * hikayeler.length)];

  document.getElementById("hikayeKutusu").innerHTML = rastgele;
}
