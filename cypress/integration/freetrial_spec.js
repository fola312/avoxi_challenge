
describe('Avoxi Staging', () => {
  it('Visits the Staging Area', function() {
    cy.visit('/')


    cy.get('.slick-current > :nth-child(1) > .a4jPqxiquQKU7Gps8sGb > #businessStandardCard > ._2MWAzcpGF9qEbl0LaUfd_F > :nth-child(1) > .lHkHTHPNqq_jAK8444cim > span > #businessStandardButton').click()
    //check free-trial checkbox idealy a more specific selector
    cy.get('#0checkBox').should('be.checked')

    //new user/Cypress docs generally argue against using class 
    // or id's to select elements but I think the implementation here is 
    // ok. If I were to recommend anything it would be to add data-cy 
    // attributes to all elements specifically for testing. I would also create a 
    // user for reuseability.

    cy.get('#firstName').type('Jean-Luc')
    cy.get('#lastName').type('Picard')
    cy.get('#businessName').type('United Federation of Planets')
    cy.get('#email').type('JP@uss.com')
    cy.get('#firstName').type('Jean-Luc')
    cy.get('#newCustomerButton').click()

    //check for free trial & get cart card and submit order

    cy.get('#cartCard').contains('Call Recording')
    cy.get('.ant-form > :nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > [data-test=test]').type('Jean-Luc Picard')
    cy.get('.ant-form > :nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > [data-test=test]').type('5424000000000015')
    cy.get('[style="display: inline-block; width: 50%;"] > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > [data-test=test]').type('0924')
    cy.get('[style="display: inline-block; width: 40%; float: right;"] > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > [data-test=test]').type('556')


    cy.get('._19NHjHTkkjLgVqnwMmls8A > label').click()
    cy.get('#placeOrder').click()
    cy.wait(10000)
 

  })
})