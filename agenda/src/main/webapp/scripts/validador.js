/**
 * Validar campos obrigatorios
 * @author Guilherme Alves
 */

 function validar(){
	let nome = frmContato.nome.value //variavel nome recebe do formulario frmContato do campo nome o seu valor. 
	let fone = frmContato.fone.value
	if(nome===""){
		alert('Preencha o campo nome')
		frmContato.nome.focus()
		return false
	} else if(fone===""){
		alert('Preencha o campo fone')
		frmContato.fone.focus()
		return false
	}else{
		document.forms["frmContato"].submit()
	}
 }