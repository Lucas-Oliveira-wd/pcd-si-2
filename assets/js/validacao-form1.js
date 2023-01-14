function validacao (){
    let nameValue = document.forms["form-equipe"]["inputName"].value;
    let cpfValue = document.forms["form-equipe"]["inputcpf"].value;
    let und_tabValue = document.forms["form-equipe"]["und-tab"].value;
    let corp_timeValue = document.forms["form-equipe"]["corp_time"].value;
    let functionValue = document.forms["form-equipe"]["function"].value;
    let emailValue = document.forms["form-equipe"]["email"].value;
    let regiao_atendValue = document.forms["form-equipe"]["regiao_atend"].value;
    let equip_projValue = document.forms["form-equipe"]["equip_proj"].value;
    if(nameValue == "" || cpfValue == "" || und_tabValue == "" || corp_timeValue == "" || functionValue == "" || emailValue == "" || regiao_atendValue == "" || equip_projValue == ""){
        alert("Por favor, preencha todos os campos!");
        return false;
    }    
    else{
        alert("cadastramento efetuado com sucesso!");
        return false;
    }
    
}

function onlyThree() {
    var selected = [];
    for (var option of document.getElementById('projetos').options) {
        if (selected.length <= 3){
           if (option.selected) {
            selected.push(option.value);
            } 
        }
        else {
            alert("É permitido a seleção de até 3 opções de projetos!");
            document.getElementById('projetos').removeAttribute("multiple");
        }
        
    }
    console.log(selected);
}