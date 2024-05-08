
import "cypress-real-events/support";


describe('Integration test with visual testing - simulated mobile testing on raffrollo category page', function () {

    it('mobile testing on raffrollo category page', function () {

        cy.viewport('iphone-6')


        // load category page
        cy.visit('/raffrollo/raffrollo-beige')

        cy.argosScreenshot('mobile view: /raffrollo/raffrollo-beige')

        // activate tooltip of Zadar 9021
        cy.get('img[alt="Zadar 9021"]').click()

        // wait till all  mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Zadar 9021')

        // deactivate tooltip of Zadar 9021
        cy.get('div.tooltip.active').click()
        cy.argosScreenshot('inactive tooltip: Zadar 9021')

        // activate tooltip of Dillio 9071
        cy.get('img[alt="Dillio 9071"]').click()

        // wait till all 4 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Dillio 9071')

        // deactivate tooltip of Dillio 9071
        cy.get('div.tooltip.active').click()
        cy.argosScreenshot('inactive tooltip: Dillio 9071')

        // activate tooltip of Cocco 9010
        cy.get('img[alt="Cocco 9010"]').click()

        // wait till all 4 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 4)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Cocco 9010')

        // go to mobile configurator of  Cocco 9010
        cy.get('div.tooltip.active').find('.mobile_tip_content').click()

        // new page will be loaded
        // cy.wait('@lazyload') // does not help instead of be.visible
        // 

        // wait till all 2 gallery images are present
        cy.get('.more-views li')
            .should('have.length', 2)
            .each(($li) => { // iterate through each child of li
                cy.wrap($li).find('img').should('be.visible')
            })

        // wait till main image is visible
        cy.get('#main-image').should('be.visible')

        // take snapshot of mobile configurator
        cy.argosScreenshot('mobile raffrollo-configurator with Cocco 9010')
    })
})