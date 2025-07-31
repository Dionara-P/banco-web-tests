describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })
    
    it('Deve transferir com sucesso quando informo dados e valor válidos', () => {
        // Act     
        cy.realizarTransferencia('Júlio', 'Dionara', '10.01')

        //Assert
        cy.verificarMensagemNoToast('Transferência realizada!')        
    })

    it('Deve apresentar erro ao tentar transferir mais de 5mil sem Token', () => {
        //Act
        cy.realizarTransferencia('Romenia', 'Dionara', '5000.01')        
        
        //Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')        
    })    
})