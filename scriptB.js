function checkLogin() {

    var userConst = "dsc";
    var passwordConst = "123";

    var sindUserConst = "dsc";
    var sindPasswordConst = "123";

    var user = document.loginForm.user.value;
    var password = document.loginForm.pswd.value;
    var errorResponse = null;

    if(user == "") {
        errorResponse = 'Digite usuário.';
        document.getElementById("userError").innerHTML = errorResponse;
    } else if(password == "") {
        errorResponse = 'Digite senha.';
        document.getElementById("passwordError").innerHTML = errorResponse;
    }

    if(user == userConst) {
        if(password == passwordConst) { 
				document.getElementById("passwordError").innerHTML = errorResponse;
				  
        }
    } else if(user == sindUserConst) {
        if(password == sindPasswordConst) { 
			       
        }
    } else {
    	var response = 'Usuário ou senha inseridos incorretos.';
		document.getElementById("responseLogin").innerHTML = response;
		
    }

}

 function close_window() {
	 if (confirm("Close Window?"))
		{ close(); } 
	} 
function addReclamacao() {
    var nome = document.addReclamacaoForm.nome.value;
    var aptReclamante = document.addReclamacaoForm.aptReclamante.value;
    var nomeReclamado = document.addReclamacaoForm.nomeReclamado.value;
    var aptReclamado = document.addReclamacaoForm.aptReclamado.value;
    var categorias = document.addReclamacaoForm.categorias.value;
    var descricao = document.addReclamacaoForm.descricao.value;

    var tabela = '<tr><td>' + nome + '</td><td>' + aptReclamante + '</td><td>' + nomeReclamado + '</td><td>' + aptReclamado + '</td><td>' + categorias + '</td><td>' + descricao + '</td></tr>';

    document.getElementById("responseReclamacao").innerHTML += tabela;
}

function createCateg() {
    var nome = document.editarCategoria.nome.value;

    var tabela = '<tr><td>' + nome + '</td></tr>';

    document.getElementById("responseCateg").innerHTML += tabela;
}

function createUser() {
    var nome = document.moradorForm.nome.value;
    var rg = document.moradorForm.rg.value;
    var cpf = document.moradorForm.cpf.value;
    var dataNasc = document.moradorForm.dataNasc.value;
    var apt = document.moradorForm.apt.value;

    var tabela = '<tr><td>' + nome + '</td><td>' + rg + '</td><td>' + cpf + '</td><td>' + dataNasc + '</td><td>' + apt + '</td></tr>';

    document.getElementById("responseReclamacao").innerHTML += tabela;
}

function saudacao(){
	
					var d = new Date()
					var hora=d.getHours();

					if(hora < 12)

						document.write("Bom dia!  ");
					else {
						if(hora < 18)
							document.write("Boa tarde!  " );
					else
							document.write("Boa Noite!  " );
					}
			
}
