function validacao (){
    let sel_projValue = document.forms["form-proj"]["sel_proj"].value;
    let ger_nameValue = document.forms["form-proj"]["ger_name"].value;
    let ger_cpfValue = document.forms["form-proj"]["ger_cpf"].value;
    let ger_unid_trabValue = document.forms["form-proj"]["ger_unid_trab"].value;
    let ger_descValue = document.forms["form-proj"]["ger_desc"].value;
    let ger_fotoValue = document.forms["form-proj"]["ger_foto"].value;
    let ativ_tipoValue = document.forms["form-proj"]["ativ_tipo"].value;
    let ativ_info_nameValue = document.forms["form-proj"]["ativ_info_name"].value;
    let ativ_info_start_dateValue = document.forms["form-proj"]["ativ_info_start_date"].value;
    let ativ_info_end_dateValue = document.forms["form-proj"]["ativ_info_end_date"].value;
    let ativ_info_custoValue = document.forms["form-proj"]["ativ_info_custo"].value;
    let ativ_info_descValue = document.forms["form-proj"]["ativ_info_desc"].value;

    if(sel_projValue == "" || ger_nameValue == "" || ger_cpfValue == "" || ger_unid_trabValue == "" || ger_descValue == "" || ger_fotoValue == "" || ativ_tipoValue == "" || ativ_info_nameValue == "" || ativ_info_start_dateValue == "" || ativ_info_end_dateValue == "" || ativ_info_custoValue == "" || ativ_info_descValue == ""){
        alert("Por favor, preencha todos os campos!");
        return false;
    }    
    else{
        alert("cadastramento efetuado com sucesso!");
        return false;
    }
    
}

function culcDurProj (){
    let ativ_info_start_dateValue = document.forms["form-proj"]["ativ_info_start_date"].value;
    let ativ_info_end_dateValue = document.forms["form-proj"]["ativ_info_end_date"].value;
    let dateStart = new Date(ativ_info_start_dateValue);
    let dateEnd = new Date(ativ_info_end_dateValue);
    durTime = (dateEnd - dateStart)/(1000*60*60*24);
    document.querySelector("#parDur").innerHTML = durTime + " dias";
}

function showFoto (){
    let ger_fotoValue = document.forms["form-proj"]["ger_foto"].value;
    document.querySelector("#imgGerFoto").setAttribute("src", ger_fotoValue);
}

var loadFile = function(event) {
    var output = document.getElementById('imgGerFoto');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };