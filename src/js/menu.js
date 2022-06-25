function writeMenu() {
  var html =
    "<header>" +
    "<ul class='menu'>" +
    "<div class='flexmenu'>" +
    "<p>" +
    "<a href='/view/index.html'><img src='../img/logo-cura-vicio.png' title='Home' class='imgLogo'></a>" +
    "</p>" +
    "<ul>" +
    "<p>&nbsp; &nbsp; &nbsp; &nbsp;</p>" +
    "</ul>" +
    "<ul>" +
    "<li>" +
    "<ul>Menu</ul>" +
    "</li>" +
    "<br>" +
    "<li><a href='../view/blogCuraVicio.html'>Blog Cura Vício</a></li>" +
    "<li><a href='../view/dependenciaQuimica.html'>Dependências Químicas</a></li>" +
    "<li><a href='../view/artigosCientificos.html'>Artigos Científicos</a></li>" +
    "</ul>" +
    "" +
    "<ul>" +
    "<li>" +
    "<ul>Apoio</ul>" +
    "</li>" +
    "<br>" +
    "<li><a href='../view/clinicasDeTratamento.html'>Clínicas de Tratamento</a></li>" +
    "<li><a href='../view/gruposDeApoio.html'>Grupos de Apoio</a></li>" +
    "<li><a href='../view/membrosInterdisciplinares.html'>Membros Interdisciplinares</a></li>" +
    "</ul>" +
    "" +
    "<ul>" +
    "<li>" +
    "<ul>Sobre Nós</ul>" +
    "</li>" +
    "<br>" +
    "<li><a href='../view/contateAgente.html'>Contate a gente</a></li>" +
    "<li><a href='../view/historia.html'>História</a></li>" +
    "</ul>" +
    "</div>" +
    "</ul>" +
    "</header>";
  return html;
}

function writeFooter() {
  var footer =
    "<footer class='footer'>" +
    "<div class='footerFlex'>" +
    "<p>" +
    "<img src='../img/logo-cura-vicio-white.png' title='Quem tem informação domina a situação - Sidarta Rebello' class='imgLogo'>" +
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

function validarFormulario() {
  const name = form.name.value;
  const email = form.email.value;
  const copia = form._cc.value;
  const assunto = form._subject.value;
  const edittxt = form.message.value;

  if (name == "") {
    alert("Campo nome é obrigatório!");
    form.nome.focus();
    return false;
  }
  if (email == "") {
    alert("Campo e-mail é obrigatório!");
    form.email.focus();
    return false;
  }
  if (copia == "") {
    alert("Campo cópia para o seu e-mail é obrigatório!");
    form._cc.focus();
    return false;
  }
  if (assunto == "") {
    alert("Campo assunto é obrigatório!");
    form._subject.focus();
    return false;
  }
  if (edittxt == "") {
    alert("Campo texto é obrigatório!");
    form.submit.focus();
    return false;
  }

  return openModal("dv-modal");
}

// const nametrue = name == "";

// if (nametrue == true) {
//   openModal('dv-modal-preencha');
// }
// else (nametrue == false)
// {
//   closeModal('dv-modal-preencha');
// }

// const button = document.querySelector("button");

// btn.addEventListener("click", OnClickModal);
// function OnClickModal() {
//   if () {
//   openModal('dv-modal');
//   }
// }

function render() {
  document.getElementById("header").innerHTML = writeMenu();
  document.getElementById("footer").innerHTML = writeFooter();
}

function openModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

function closeModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == "undefined" || modal === null) return;

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

const fields = document.querySelectorAll("[required]");

// console.log(fields)

function customValidation(event) {
  const field = event.target;

  // lógica para verificar se existem erros
  function verifyErros() {
    let foundError = false;

    for (error in field.validity) {
      // se não for customError
      // então verifica se tem erro
      if (error !== "customError && field.validity[error]") {
        foundError = error;
      }
    }

    return foundError;
  }

  if (error) {
    // trocar mensagem de required
    field.setCustomValidity("Esse campo é obrigatório!");
  } else {
    field.setCustomValidity("");
  }
}

for (field of fields) {
  field.addEventListener("invalid", (event) => {
    console.log("campo inválido");
  });
}
