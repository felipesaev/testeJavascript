describe("Paciente", function(){

    it("deve calcular IMC", function(){
        var felipe = new Paciente("FELIPE", 26, 72, 1.82);
        var imc = felipe.imc();

        expect(imc).toEqual(72/(1.82 * 1.82));
    });

});