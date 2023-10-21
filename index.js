const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {

    event.preventDefault();

    // verifica se o codigo esta vazio
 if(nameInput.value === ""){
 alert("Por favor, preencha o  seu nome");
 return;
  }

  // Verifica se o email esta devidamente prienchido e se e valido
  if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor, preencha o seu email");
    return;
  }

  //verirfica se esta preenchida

  if(!validatePassword(passwordInput.value, 8)){
    alert("A sewnha precisa de no minimo 8 digitos");
    return;
  }

  //Verifica se a mensagem foi preenchida
  if(messageTextarea.value === ""){
    alert("Por favor, preencha o campo de mansagem");
    return;
  }

  // Verifica se a situacao foi selecionada
  if(jobSelect.value === ""){
    alert("Por favor, selecione a sua situacao");
  }


  // se todos os campos estiverem correctamente preenchido, envie o form
  form.submit();
} )

// Funcao que valida email
function isEmailValid(email) {

    //cria um regex para validar email
    const emailRegex = new RegExp(
        //usuario12@host.com.mz
        /^[a-zA-Z0-9._]+@[a/zA-Z0-9._]+\.[a-zA-Z]{2,}$/
    );

      if(emailRegex.test(email)) {
        return true
      }

      return false
 
}
//funcao que valida a senha
function validatePassword(password, ainDigits) {
    if(password.length >= ainDigits){
        //senha valida
        return true

    }
    //senha invalida 
    return false
}