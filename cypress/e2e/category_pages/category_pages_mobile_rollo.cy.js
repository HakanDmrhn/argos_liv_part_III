
import "cypress-real-events/support";


describe('Integration test with visual testing - simulated mobile testing on rollo category page', function () {

    it('mobile testing on rollo category page', function () {

        cy.viewport('iphone-6')

        // load category page
        cy.visit('/rollo/rollo-gruen')
        

        cy.argosScreenshot('mobile view: /rollo/rollo-gruen')

        // activate tooltip of Basic DimOut 3040
        cy.get('img[alt="Basic DimOut 3040"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Basic DimOut 3040')

        // deactivate tooltip of Basic DimOut 3040
        cy.get('div.tooltip.active').click()
        cy.argosScreenshot('inactive tooltip: Basic DimOut 3040')

        // activate tooltip of Basic Dimout 3686
        cy.get('img[alt="Basic Dimout 3686"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Basic Dimout 3686')

        // deactivate tooltip of Basic Dimout 3686
        cy.get('div.tooltip.active').click()
        cy.argosScreenshot('inactive tooltip: Basic Dimout 3686')

        // activate tooltip of Levigo 3734
        cy.get('img[alt="Levigo 3734"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })

        cy.argosScreenshot('active tooltip: Levigo 3734')

        // go to mobile configurator of  Levigo 3734
        cy.get('div.tooltip.active').find('.mobile_tip_content').click()

        // new page will be loaded
        

        // wait till all 8 gallery images are present
        cy.get('.more-views > li')
            .should('have.length', 8)
            .each(($li) => { // iterate through each child of li
                cy.wrap($li).find('img').should('be.visible')
            })

        // wait till main image is visible
        cy.get('#main-image').should('be.visible')

        // take snapshot of mobile configurator
        cy.argosScreenshot('mobile rollo-configurator with Levigo 3734')

    })
})