const grupos = [
  {
    nome: "A. A. Grupo Belo Horizonte - 02",
    cidade: "Belo Horizonte",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120043.23232183103!2d-44.016120410843335!3d-19.90960796761619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e69fddd625%3A0xe4fc712940ddf0a2!2sA.%20A.%20Grupo%20Belo%20Horizonte%20-%2002!5e0!3m2!1spt-BR!2sbr!4v1655078272322!5m2!1spt-BR!2sbr",
    telefone: "(31)3224-7744",
  },
  {
    nome: "A. A. Grupo Compreensão - 42",
    cidade: "Uberlândia",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120789.92076658957!2d-48.35349427923776!3d-18.901049499999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445b64eb14233%3A0x763e9fdaacf03a21!2sA.%20A.%20Grupo%20Compreens%C3%A3o%20-%2042!5e0!3m2!1spt-BR!2sbr!4v1655078490288!5m2!1spt-BR!2sbr",
    telefone: "(34)3235-5856",
  },
  {
    nome: "Nar-Anon - Grupo Gratidão",
    cidade: "Contagem",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120037.03495190015!2d-44.13444638137002!3d-19.91777335758492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695f92ee9b439%3A0xa4a90a6a87578dbf!2sNar-Anon%20-%20Grupo%20Gratid%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1655076660469!5m2!1spt-BR!2sbr",
    telefone: "(21)99502-3239",
  },
  {
    nome: "A. A. Grupo Reunidos - 33",
    cidade: "Juiz de Fora",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165310.72485687697!2d-43.460369217348195!3d-21.740833829426062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b60109806bb%3A0xb6e689abd0e705a0!2sA.%20A.%20Grupo%20Reunidos%20-%2033!5e0!3m2!1spt-BR!2sbr!4v1655078693183!5m2!1spt-BR!2sbr",
    telefone: "(32)321-58503",
  },
  {
    nome: "A. A. Grupo Hei de Vencer - 02",
    cidade: "Betim",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244542.59073387028!2d-43.99117056508605!3d-16.727950481603113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ab3fb9064655%3A0xf77ce2dfde33e3f8!2sCl%C3%ADnicas%20INdepend%C3%AAncia%20Qu%C3%ADmica%20Reabilita%C3%A7%C3%A3o%20e%20Tratamentos%20%C3%81lcool%20e%20Drogas!5e0!3m2!1spt-BR!2sbr!4v1652668249068!5m2!1spt-BR!2sbr",
  },
  {
    nome: "A. A. Grupo Hei de Vencer - 02",
    cidade: "Montes Claros",
    localizacao:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244542.59073387028!2d-43.99117056508605!3d-16.727950481603113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ab3fb9064655%3A0xf77ce2dfde33e3f8!2sCl%C3%ADnicas%20INdepend%C3%AAncia%20Qu%C3%ADmica%20Reabilita%C3%A7%C3%A3o%20e%20Tratamentos%20%C3%81lcool%20e%20Drogas!5e0!3m2!1spt-BR!2sbr!4v1652668249068!5m2!1spt-BR!2sbr",
    telefone: "(31)3224-7744",
  },
];

function handleSelectCities(event) {
  const grupoSelecionado = event?.target?.value;
  const container = document.getElementById("grupos");
  let htmlGrupo = "";

  if (grupoSelecionado) {
    grupos
      .filter((grupo) => grupoSelecionado === grupo.cidade)
      .forEach((grupo) => {
        htmlGrupo += `<li><div class="txt4">${grupo.nome} - ${grupo.telefone}</div><br><br>  <div class="embed-container"> <iframe
        src="${grupo.localizacao}"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe><li>`;
      });
  } else {
    grupos
      .filter((grupo) => grupo.cidade === "Belo Horizonte")
      .forEach((grupo) => {
        htmlGrupo += `<li><div class="txt4">${grupo.nome} - ${grupo.telefone}</div><br><br>  <div class="embed-container"> <iframe
        src="${grupo.localizacao}"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe><li>`;
      });
  }
  container.innerHTML = htmlGrupo;
}

window.addEventListener("load", () => {
  const select = document.getElementById("lista-grupos");
  handleSelectCities();
  select.addEventListener("change", handleSelectCities);
});
