describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })
        cy.contains('button', 'Entrar').click() 
    })
    
    it('Deve transferir com sucesso quando informo dados e valor válidos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem') //apelido p/ os dois primeiros comandos
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('Luna com saldo de').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('Dionara com saldo de').click()
        
        cy.get('input[id="valor"]').click().type('11.25')

        cy.contains('button', 'Transferir').click()
        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})