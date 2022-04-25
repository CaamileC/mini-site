/*VALIDANDO FORMULÁRIO DE CONTATO*/

    function validar_formulario(){
        var nome = formulario.nome.value;
        var email = formulario.email.value;
        var fone = formulario.fone.value;
        var mensagem = formulario.mensagem.value;

        if(nome == ""){
            alert("Campo nome é obrigatório");   
            formulario.nome.focus();
            return false
        }
            
        if(email == ""){
            alert("Campo nome é obrigatório");   
            formulario.email.focus();
            return false;
        }
        
        if(fone == ""){
            alert("Campo nome é obrigatório");   
            formulario.fone.focus();
            return false;
        }

        if(mensagem == ""){
            alert("Campo nome é obrigatório");   
            formulario.mensagem.focus();
            return false;
        }

    }
