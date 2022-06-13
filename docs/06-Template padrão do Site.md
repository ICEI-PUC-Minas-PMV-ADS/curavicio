# Template padrão do site

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

> **Links Úteis**:
>
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)



# Template padrão do site
Pegamos como base a página do Blog Cura Vício, pois é a inicial e se fez ideal para estarmos incrementando algumas funcionalidades nas demais, mas mantendo a identidade visual e estilo do site utilizando o html e css conseguimos usar temas e cores que traz certa tranquilidade ao usuário do site e também ajustar a responsividade

Código HTML:

<!DOCTYPE html>
<html lang="pt">

<head>
  <title>Cura Vício - Blog Cura Vício</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, , shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script type="text/javascript" src="../js/menu"></script>
  <link rel="stylesheet" type="text/css" href="../css/style.css" media="screen">
</head>
<body onload="render()">
  <div id="header"></div>
  <main>
    <div class="separador"></div>
    <article class="flexBannerMktblog">
      <p>
      <p class="txtMain">
        Blog Cura Vício - O seu tratamento começa<br> com uma boa dose de informação!
      </p>
      </p>
    </article>
    <div class="separador"></div>
    <article class="flextxt">
      <div class="txt4">• Tipos Dependência Química
      </div>
      <div class="txtBlocoJustify">A Organização Mundial da Saúde (OMS) considera que a dependência em drogas lícitas ou ilícitas é
        uma doença. O uso indevido de substâncias como álcool, cigarro, crack e cocaína é um problema de saúde pública
        de ordem internacional que preocupa nações do mundo inteiro, pois afeta valores culturais, sociais, econômicos e
        políticos.
      </div>
    </article>
    <div class="separador"></div>
  </main>
  <div id="footer"></div>
</body>
</html>
