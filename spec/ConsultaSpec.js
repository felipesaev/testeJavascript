describe("Consulta", function() {

    it("Não deve cobrar nada se for um retorno", function() {
        var felipe = new Paciente("Felipe", 26, 65, 1.75);
        var consulta = new Consulta(felipe, [], true, true);
        expect(consulta.preco()).toEqual(0);
    });
    it("deve cobrar 25 por cada procedimento comum", function() {
        var felipe = new Paciente("Felipe", 26, 65, 1.75);
        var consulta = new Consulta(["proc1", "proc2"], false, false);

        expect(consulta.preco()).toEqual(50)
    });
})