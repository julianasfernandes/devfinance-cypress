
describe('Transações', () => {
  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')
  })
  
  it('Cadastrar uma entrada', () => {
      criarTransacao("Freela", 250)
    
    cy.get("tbody tr td.description").should("have.text", "Freela")
  })

  it('Cadastrar uma saída', () => {
      criarTransacao("Cinema", -45)
    
    cy.get("tbody tr td.description")
    .should("have.text", "Cinema")
  })

  it('Excluir transação', () => {
    criarTransacao("Freela", 250)
    criarTransacao("Mesada", 50)
    criarTransacao("Cinema", -30)
  
    cy.contains(".description", "Freela")
    .parent()
    .find("img")
    .click()

    cy.get('tbody tr').should("have.length", 2)
  })
})

function criarTransacao(descricao, valor){
    cy.contains("a","+ Nova Transação").click()
    cy.get("#description").type(descricao)
    cy.get("#amount").type(valor)
    cy.get("#date").type("2023-10-24")
    cy.contains("button","Salvar").click()
}