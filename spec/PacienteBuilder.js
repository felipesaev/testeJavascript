function PacienteBuilder() {
    var nome = "Felipe";
    var idade = "25";
    var  peso = "65";
    var altura = 1.80;

    var clazz  = {
        constroi: function() {
            return Paciente(nome, idade, peso, altura);
        }
    };
    return clazz;

}