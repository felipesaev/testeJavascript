function Paciente(nome, idade, peso, altura) {
    var clazz = {
        imprime : function() {
            alert(nome + "nome" + idade + " anos");
        },
        batimentos: function() {
            return idade * 365 * 25 * 60 * 80;
        },
        imc : function() {
            return peso/ (altura*altura)
        }
    };
    return clazz;
}