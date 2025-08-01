# banco-web-tests

## Objetivo

Este projeto tem como objetivo iniciar a automação de testes end-to-end da aplicação Banco Web utilizando Cypress e JavaScript. Os testes automatizados garantem que as principais funcionalidades do sistema estejam funcionando corretamente, aumentando a confiabilidade e facilitando a validação contínua do produto.

## Componentes do Projeto

- **Cypress**: Framework para automação de testes de interface e API.
- **Custom Commands**: Comandos personalizados para facilitar e padronizar ações repetitivas nos testes.
- **cypress-mochawesome-reporter**: Gera relatórios detalhados e visualmente amigáveis dos testes executados.
- **Estrutura de pastas**:
  - `cypress/e2e`: Contém os arquivos de testes automatizados.
  - `cypress/support/commands.js`: Implementação dos Custom Commands.
  - `package.json`: Gerenciamento de dependências e scripts.

## Pré-requisitos

- Node.js instalado
- API [banco-api](https://github.com/Dionara-P/banco-api) em execução
- Aplicação Web [banco-web](https://github.com/Dionara-P/banco-web) em execução

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

1. Certifique-se de que a API e a aplicação Web estejam rodando.
2. Execute os testes em modo interativo:
   ```bash
   npx cypress open
   ```
   Ou execute em modo headless (com geração de relatório):
   ```bash
   npx cypress run
   ```
3. Os relatórios serão gerados na pasta `cypress/reports` após a execução dos testes.

## Documentação dos Testes

Exemplo de teste de transferência bancária (`cypress/e2e/transferencia.cy.js`):

```javascript
describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })
    
    it('Deve transferir com sucesso quando informo dados e valor válidos', () => {
        cy.realizarTransferencia('Júlio', 'Dionara', '10.01')
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro ao tentar transferir mais de 5mil sem Token', () => {
        cy.realizarTransferencia('Romenia', 'Dionara', '5000.01')
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })    
})
```

## Custom Commands

Os principais comandos personalizados disponíveis são:

- `cy.fazerLoginComCredenciaisValidas()`: Realiza login automático com credenciais válidas.
- `cy.realizarTransferencia(remetente, destinatario, valor)`: Efetua uma transferência entre contas.
- `cy.verificarMensagemNoToast(mensagem)`: Valida a mensagem exibida no toast da aplicação.

Esses comandos estão definidos em `cypress/support/commands.js` e facilitam a escrita e manutenção dos testes, tornando o código mais limpo e reutilizável.

---

Para dúvidas ou sugestões, abra uma issue