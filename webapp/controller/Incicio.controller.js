sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("projetonetflix.controller.Incicio", {
        onInit: function () {
            // Definição de Lista Vazia de Resultados
            let resultados = { 
                titles:[] 
            }
            // Definição de Modelos = variavel especial para mostrar dados na tela
            let resultadosModel = new JSONModel();
            // Atribuição de Dados
            resultadosModel.setData(resultados);
            // Anexar Modelo na Tela
            let tela = this.getView();
            tela.setModel(resultadosModel, "APINetflix");
        },
             
        onInicioLinkPress: function() {
            alert("Navegar Inicio");
        },
        onBuscaDados: function() {
            // Busca dados API NetFlix
            let searchField = this.byId("idSearchField");
            let filtro = searchField.getValue();
            alert(filtro); 
            const settings = {
                async: true,
                crossDomain: true,
                url: 'https://netflix54.p.rapidapi.com/search/?query=' 
                + filtro + '&offset=0&limit_titles=50&limit_suggestions=20&lang=en',
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '179335dfc7msh5fb9fa15a7fd1adp1645cfjsnde9aea35e20d',
                    'x-rapidapi-host': 'netflix54.p.rapidapi.com'
                }
            };
            
            $.ajax(settings).done(function (response) {
                console.log(response);
                // Rescatar o Modelo e Atualizar os Dados
                let tela = this.getView();
                let modelo = tela.getModel("APINetflix");
                let dados = modelo.getData();
                // Limpar a lista
                dados.titles = [];
                dados.titles = response.titles;
                modelo.refresh();

            }.bind(this));
        }
    });
});