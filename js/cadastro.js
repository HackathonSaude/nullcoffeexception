var form = document.getElementById('frmcadastro');
var uNome = document.getElementById('userNome');
var uEmail = document.getElementById('userEmail');
var uSenha = document.getElementById('userSenha');
var radios = document.getElementByName('radios');
for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      uSexo = radios[i].value;
      break;
    }

form.addEventListener('submit', function(e)) {
    // alerta o valor do campo
    alert(uSexo.value);

    // impede o envio do form
    e.preventDefault();
};
