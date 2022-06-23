function writeMenu() {
  var html = "<header>" +
    "<ul class='menu'>" +
    "<div class='flexmenu'>" +
    "<p>" +
    "<a href='/view/index.html'><img src='/img/logo-cura-vicio.png' title='Home' class='imgLogo'></a>" +
    "</p>" +
    "<ul>" +
    "<p>&nbsp; &nbsp; &nbsp; &nbsp;</p>" +
    "</ul>" +
    "<ul>" +
    "<li>" +
    "<ul>Menu</ul>" +
    "</li>" +
    "<br>" +
    "<li><a href='/view/blogCuraVicio.html'>Blog Cura Vício</a></li>" +
    "<li><a href='/view/dependenciaQuimica.html'>Dependências Químicas</a></li>" +
    "<li><a href='/view/artigosCientificos.html'>Artigos Científicos</a></li>" +
    "</ul>" +
    "" +
    "<ul>" +
    "<li>" +
    "<ul>Apoio</ul>" +
    "</li>" +
    "<br>" +
    "<li><a href='/view/clinicasDeTratamento.html'>Clínicas de Tratamento</a></li>" +
    "<li><a href='/view/gruposDeApoio.html'>Grupos de Apoio</a></li>" +
    "<li><a href='/view/membrosInterdisciplinares.html'>Membros Interdisciplinares</a></li>" +
    "</ul>" +
    "" +
    "<ul>" +
    "<li>" +
    "<ul>Sobre Nós</ul>" +
    "</li>" +
    "<br>" +
    "<li><a href='/view/contateAgente.html'>Contate a gente</a></li>" +
    "<li><a href='/view/historia.html'>História</a></li>" +
    "</ul>" +
    "</div>" +
    "</ul>" +
    "</header>";
  return html;
}

function writeFooter() {
  var footer = "<footer class='footer'>" +
    "<div class='footerFlex'>" +
    "<p>" +
    "<img src='/img/logo-cura-vicio-white.png' title='Quem tem informação domina a situação - Sidarta Rebello' class='imgLogo'>" +
    "</p>" +
    "<br>" +
    "<p class='footerTxt'>|&nbsp; &nbsp; © CuraVício, Inc. 2022.</p>" +
    "<p class='footerTxt'>" +
    "&nbsp; &nbsp;| &nbsp; &nbsp;<a href='#'>Click para voltar ao Topo :)</a>" +
    "</p>" +
    "</div>" +
    "</footer>";
  return footer;
}

function writeClinicas() {
  const clinicas = [
    {
      "id": 0,
      "nome": "Clínica Novos Rumos",
      "cidade": "Belo Horizonte",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239924.46545868495!2d-44.34887078359374!3d-20.0160775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c5aa63094bdd%3A0xc504871395d9e44c!2sCl%C3%ADnica%20Novos%20Rumos!5e0!3m2!1spt-BR!2sbr!4v1652667149467!5m2!1spt-BR!2sbr",
      "telefone": "(31)3596-1339"
    },
    {
      "nome": "Ceami-Reabilitação para A Vida",
      "cidade": "Uberlândia",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483100.7745366498!2d-48.54376416230315!3d-18.921441252179303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44438e762edb7%3A0x6d933297b5e423dd!2sCeami-Reabilita%C3%A7%C3%A3o%20para%20A%20Vida!5e0!3m2!1spt-BR!2sbr!4v1652667633700!5m2!1spt-BR!2sbr",
      "telefone": "(34)3225-3204"
    },
    {
      "nome": "Caminhos da Dignidade - Clínica de Reabilitação",
      "cidade": "Contagem",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412526.60923537414!2d-44.33629171494389!3d-19.944375093266434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa688f500db75f9%3A0xe96902b78b84987!2sCaminhos%20da%20Dignidade%20-%20Cl%C3%ADnica%20de%20Reabilita%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1652667848994!5m2!1spt-BR!2sbr",
      "telefone": "(31)3621-0725"
    },
    {
      "nome": "Clinica NID",
      "cidade": "Juiz de Fora",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275963.2487330194!2d-43.514347592752!3d-21.76944743289836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989bc5a5561737%3A0xd153fd8b744b74dd!2sClinica%20NID!5e0!3m2!1spt-BR!2sbr!4v1652667948396!5m2!1spt-BR!2sbr",
      "telefone": "(32)3216-8323"
    },
    {
      "nome": "Cre Ser-Centro de Reabilitação Ser",
      "cidade": "Betim",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480076.20680013124!2d-44.472502229687855!3d-19.941449163392914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c39ede9fb8f1%3A0x5f8c71d85421904a!2sCre%20Ser-Centro%20de%20Reabilita%C3%A7%C3%A3o%20Ser!5e0!3m2!1spt-BR!2sbr!4v1652668139588!5m2!1spt-BR!2sbr",
      "telefone": "(31)3054-0808"
    },
    {
      "nome": "Clínicas Independência Química Reabilitação e Tratamentos Álcool e Drogas",
      "cidade": "Montes Claros",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244542.59073387028!2d-43.99117056508605!3d-16.727950481603113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ab3fb9064655%3A0xf77ce2dfde33e3f8!2sCl%C3%ADnicas%20INdepend%C3%AAncia%20Qu%C3%ADmica%20Reabilita%C3%A7%C3%A3o%20e%20Tratamentos%20%C3%81lcool%20e%20Drogas!5e0!3m2!1spt-BR!2sbr!4v1652668249068!5m2!1spt-BR!2sbr",
      "telefone": "(38)9982-11301"
    },
  ];
  function handleSelectCities(event) {
    const clinicaSelecionada = event.target.value;
    const primeiroLista = clinicas.slice(0);
    const container = document.getElementById('clinicas');
    let htmlClinicas = ""

    clinicas.forEach((clinica) => {
      if (clinica.cidade === clinicaSelecionada || primeiroLista === clinicaSelecionada) {
        htmlClinicas += `<li><div class="txt4">${clinica.nome} - ${clinica.telefone}</div><br><br>  <div class="embed-container"> <iframe
          src="${clinica.localizacao}"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe></div><li>`
      }
    })

    // clinicas.filter((clinica)=> clinicaSelecionada === clinica.cidade).forEach((clinica)=> {
    //     htmlClinicas += `<li>${clinica.nome} - ${clinica.telefone} <br/> <iframe
    //     src="${clinica.localizacao}"
    //     width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    //     referrerpolicy="no-referrer-when-downgrade"></iframe><li>`
    // })
    container.innerHTML = htmlClinicas;
  }
  (function () {
    const select = document.getElementById('lista-clinicas');
    select.addEventListener('change', handleSelectCities)
  })();
}

function writeMembros() {
  const membros = [
    {
      "nome": "Clínica Eliana Sanches - Pedagoga",
      "cidade": "Belo Horizonte",
      "telefone": "(31)3458-4562"
    },
    {
      "nome": "Marília Mendes - Psicóloga",
      "cidade": "Uberlândia",
      "telefone": "(34)3225-3204"
    },
  ];
  function handleSelectMembros(event) {
    const membroSelecionado = event.target.value;
    const container = document.getElementById('membros');
    let htmlMembro = ""
    membros.forEach((membro) => {
      if (membro.cidade === membroSelecionado) {
        htmlMembro += `<li><div class="txt4">${membro.nome} - ${membro.telefone} </div><br><br><li>`
      }
    })
    container.innerHTML = htmlMembro;
  }
  (function () {
    const select = document.getElementById('lista-membros');
    select.addEventListener('change', handleSelectMembros)
  })();
}

function writeGrupo() {
  const grupos = [
    {
      "nome": "A. A. Grupo Belo Horizonte - 02",
      "cidade": "Belo Horizonte",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120043.23232183103!2d-44.016120410843335!3d-19.90960796761619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e69fddd625%3A0xe4fc712940ddf0a2!2sA.%20A.%20Grupo%20Belo%20Horizonte%20-%2002!5e0!3m2!1spt-BR!2sbr!4v1655078272322!5m2!1spt-BR!2sbr",
      "telefone": "(31)3224-7744"
    },
    // {
    //     "nome":"Grupo Vida Nova de Narcóticos Anônimos",
    //     "cidade": "Belo Horizonte",
    //     "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240097.17163281134!2d-44.10414018601615!3d-19.90255184443212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699904760412f%3A0x891978e65c7f4548!2sGrupo%20Vida%20Nova%20de%20Narc%C3%B3ticos%20An%C3%B4nimos!5e0!3m2!1spt-BR!2sbr!4v1655079188070!5m2!1spt-BR!2sbr",
    //     "telefone": "(31)99684-3223"
    // },

    {
      "nome": "A. A. Grupo Compreensão - 42",
      "cidade": "Uberlândia",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120789.92076658957!2d-48.35349427923776!3d-18.901049499999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445b64eb14233%3A0x763e9fdaacf03a21!2sA.%20A.%20Grupo%20Compreens%C3%A3o%20-%2042!5e0!3m2!1spt-BR!2sbr!4v1655078490288!5m2!1spt-BR!2sbr",
      "telefone": "(34)3235-5856"
    },
    // {
    //     "nome":"GRUPO DESPERTAR DE NARCÓTICOS ANÔNIMOS",
    //     "cidade": "Uberlândia",
    //     "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120789.93970772828!2d-48.35349450205185!3d-18.901023259725324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44547e146e53d%3A0x96e870811902d396!2sGRUPO%20DESPERTAR%20DE%20NARC%C3%93TICOS%20AN%C3%94NIMOS!5e0!3m2!1spt-BR!2sbr!4v1655078536547!5m2!1spt-BR!2sbr",
    //     "telefone": "(34)99990-1005"
    // },
    {
      "nome": "Nar-Anon - Grupo Gratidão",
      "cidade": "Contagem",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120037.03495190015!2d-44.13444638137002!3d-19.91777335758492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695f92ee9b439%3A0xa4a90a6a87578dbf!2sNar-Anon%20-%20Grupo%20Gratid%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1655076660469!5m2!1spt-BR!2sbr",
      "telefone": "(21)99502-3239"
    },
    {
      "nome": "A. A. Grupo Reunidos - 33",
      "cidade": "Juiz de Fora",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165310.72485687697!2d-43.460369217348195!3d-21.740833829426062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b60109806bb%3A0xb6e689abd0e705a0!2sA.%20A.%20Grupo%20Reunidos%20-%2033!5e0!3m2!1spt-BR!2sbr!4v1655078693183!5m2!1spt-BR!2sbr",
      "telefone": "(32)321-58503"
    },
    {
      "nome": "A. A. Grupo Estrela do Oriente - 02",
      "cidade": "Betim",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59999.23020651861!2d-44.266011041796915!3d-19.968525500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c39163c3d425%3A0xf116fbc1a9e4c06c!2sA.%20A.%20Grupo%20Estrela%20do%20Oriente%20-%2002!5e0!3m2!1spt-BR!2sbr!4v1655078951598!5m2!1spt-BR!2sbr",
      "telefone": "(31)3224-7744"
    },
    {
      "nome": "A. A. Grupo Hei de Vencer - 02",
      "cidade": "Montes Claros",
      "localizacao": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244542.59073387028!2d-43.99117056508605!3d-16.727950481603113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ab3fb9064655%3A0xf77ce2dfde33e3f8!2sCl%C3%ADnicas%20INdepend%C3%AAncia%20Qu%C3%ADmica%20Reabilita%C3%A7%C3%A3o%20e%20Tratamentos%20%C3%81lcool%20e%20Drogas!5e0!3m2!1spt-BR!2sbr!4v1652668249068!5m2!1spt-BR!2sbr",
      "telefone": "(31)3224-7744"
    },
  ];
  function handleSelectCities(event) {
    const grupoSelecionado = event.target.value;
    const container = document.getElementById('grupos');
    let htmlGrupo = ""
    grupos.forEach((grupo) => {
      if (grupo.cidade === grupoSelecionado) {
        htmlGrupo += `<li><div class="txt4"> ${grupo.nome} - ${grupo.telefone} </div><br><br>  <div class="embed-container"> <iframe
          src="${grupo.localizacao}"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe></div><li>`
      }
    })
    // clinicas.filter((clinica)=> clinicaSelecionada === clinica.cidade).forEach((clinica)=> {
    //     htmlClinicas += `<li>${clinica.nome} - ${clinica.telefone} <br/> <iframe
    //     src="${clinica.localizacao}"
    //     width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    //     referrerpolicy="no-referrer-when-downgrade"></iframe><li>`
    // })
    container.innerHTML = htmlGrupo;
  }
  (function () {
    const select = document.getElementById('lista-grupos');
    select.addEventListener('change', handleSelectCities)
  })()
}


function render() {
  document.getElementById("header").innerHTML = writeMenu();
  document.getElementById("footer").innerHTML = writeFooter();
  document.getElementById("clinicas").innerHTML = writeClinicas();
  document.getElementById("membros").innerHTML = writeMembros();
  document.getElementById("grupos").innerHTML = writeGrupo();
}


function openModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == 'undefined' || modal === null)
    return;

  modal.style.display = 'Block';
  document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == 'undefined' || modal === null)
    return;

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

const fields = document.querySelectorAll("[required]")

// console.log(fields)

function customValidation(event) {
  const field = event.target

  // lógica para verificar se existem erros
  function verifyErros() {
    let foundError = false;

    for (error in field.validity) {
      // se não for customError
      // então verifica se tem erro
      if (error !== "customError && field.validity[error]") {
        foundError = error
      }
    }

    return foundError;
  }

  if (error) {
    // trocar mensagem de required
    field.setCustomValidity("Esse campo é obrigatório!")
  } else {
    field.setCustomValidity("")
  }
}

for (field of fields) {
  field.addEventListener("invalid", event => {
    console.log("campo inválido")
  })
}













