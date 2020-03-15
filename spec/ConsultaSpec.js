describe("Consulta", function () {
    var felipe;
    beforeEach(function () {
        console.log("beforeEach");
        felipe = new PacienteBuilder().constroi();
    });

    describe("consultas do tipo retorno", function () {
        it("Não deve cobrar nada se for um retorno", function () {
            var consulta = new Consulta(felipe, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });

    });
    describe("consultas com procedimentos", function () {

        it("deve cobrar 25 por cada procedimento comum", function () {
            var consulta = new Consulta(felipe, ["proc1", "proc2"], false, false);

            expect(consulta.preco()).toEqual(50);
        });

        it("deve cobrar preco especifico dependendo do procedimento", function () {
            var felipe = new Paciente("Felipe", 26, 65, 1.75);
            var consulta = new Consulta(felipe, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });

    });
});