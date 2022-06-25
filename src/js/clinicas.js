const clinicas = [
  {
    id: 0,
    nome: "Clínica Novos Rumos",
    cidade: "Belo Horizonte",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.819773112401!2d-44.21098378508396!3d-20.01607748655561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c5aa63094bdd%3A0xc504871395d9e44c!2sCl%C3%ADnica%20Novos%20Rumos!5e0!3m2!1spt-BR!2sbr!4v1656196581402!5m2!1spt-BR!2sbr",
    telefone: "(31)3596-1339",
  },
  {
    nome: "Ceami-Reabilitação para A Vida",
    cidade: "Uberlândia",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483100.7745366498!2d-48.54376416230315!3d-18.921441252179303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44438e762edb7%3A0x6d933297b5e423dd!2sCeami-Reabilita%C3%A7%C3%A3o%20para%20A%20Vida!5e0!3m2!1spt-BR!2sbr!4v1652667633700!5m2!1spt-BR!2sbr",
    telefone: "(34)3225-3204",
  },
  {
    nome: "Caminhos da Dignidade - Clínica de Reabilitação",
    cidade: "Contagem",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412526.60923537414!2d-44.33629171494389!3d-19.944375093266434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa688f500db75f9%3A0xe96902b78b84987!2sCaminhos%20da%20Dignidade%20-%20Cl%C3%ADnica%20de%20Reabilita%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1652667848994!5m2!1spt-BR!2sbr",
    telefone: "(31)3621-0725",
  },
  {
    nome: "Clinica NID",
    cidade: "Juiz de Fora",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275963.2487330194!2d-43.514347592752!3d-21.76944743289836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989bc5a5561737%3A0xd153fd8b744b74dd!2sClinica%20NID!5e0!3m2!1spt-BR!2sbr!4v1652667948396!5m2!1spt-BR!2sbr",
    telefone: "(32)3216-8323",
  },
  {
    nome: "Cre Ser-Centro de Reabilitação Ser",
    cidade: "Betim",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480076.20680013124!2d-44.472502229687855!3d-19.941449163392914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c39ede9fb8f1%3A0x5f8c71d85421904a!2sCre%20Ser-Centro%20de%20Reabilita%C3%A7%C3%A3o%20Ser!5e0!3m2!1spt-BR!2sbr!4v1652668139588!5m2!1spt-BR!2sbr",
    telefone: "(31)3054-0808",
  },
  {
    nome: "Clínicas Independência Química Reabilitação e Tratamentos Álcool e Drogas",
    cidade: "Montes Claros",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244542.59073387028!2d-43.99117056508605!3d-16.727950481603113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ab3fb9064655%3A0xf77ce2dfde33e3f8!2sCl%C3%ADnicas%20INdepend%C3%AAncia%20Qu%C3%ADmica%20Reabilita%C3%A7%C3%A3o%20e%20Tratamentos%20%C3%81lcool%20e%20Drogas!5e0!3m2!1spt-BR!2sbr!4v1652668249068!5m2!1spt-BR!2sbr",
    telefone: "(38)9982-11301",
  },
];

function handleSelectCities(event) {
  const clinicaSelecionada = event?.target?.value;
  const container = document.getElementById("clinicas");
  let htmlClinicas = "";

  if (clinicaSelecionada) {
    clinicas
      .filter((clinica) => clinicaSelecionada === clinica.cidade)
      .forEach((clinica) => {
        htmlClinicas += `<li><div class="txt4">${clinica.nome} - ${clinica.telefone}</div><br><br>  <div class="embed-container"> <iframe
          src="${clinica.localizacao}"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe><li>`;
      });
  } else {
    clinicas
      .filter((clinica) => clinica.cidade === "Belo Horizonte")
      .forEach((clinica) => {
        htmlClinicas += `<li><div class="txt4">${clinica.nome} - ${clinica.telefone}</div><br><br>  <div class="embed-container"> <iframe
          src="${clinica.localizacao}"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe><li>`;
      });
  }
  container.innerHTML = htmlClinicas;
}

window.addEventListener("load", () => {
  const select = document.getElementById("lista-clinicas");
  handleSelectCities();
  select.addEventListener("change", handleSelectCities);
});
