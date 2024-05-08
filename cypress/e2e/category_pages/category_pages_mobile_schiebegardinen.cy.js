
import "cypress-real-events/support";


describe('Integration test with visual testing - simulated mobile testing on schiebegardinen category page', function () {

    it('mobile testing on schiebegardinen category page', function () {

        cy.viewport('iphone-6')

        // load category page
        cy.visit('/schiebegardinen/schiebegardinen-beige')

        cy.argosScreenshot('mobile view: /schiebegardinen/schiebegardinen-beige')

        // activate tooltip of Schiebegardine Ukko 7330
        cy.get('img[alt="Schiebegardine Ukko 7330"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Schiebegardine Ukko 7330')

        // deactivate tooltip of Schiebegardine Ukko 7330
        cy.get('div.tooltip.active').click()
        cy.argosScreenshot('inactive tooltip: Schiebegardine Ukko 7330')


        // activate tooltip of Schiebegardine Bonito 7336
        cy.get('img[alt="Schiebegardine Bonito 7336"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Schiebegardine Bonito 7336')

        // deactivate tooltip of Schiebegardine Bonito 7336
        cy.get('div.tooltip.active').click()
        cy.argosScreenshot('inactive tooltip: Schiebegardine Bonito 7336')


        // activate tooltip of Schiebegardine Naru 7297
        cy.get('img[alt="Schiebegardine Naru 7297"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Schiebegardine Naru 7297')

        // go to --> mobile configurator <-- of Schiebegardine Naru 7297
        cy.get('div.tooltip.active').find('.mobile_tip_content').click()

        // new page will be loaded --> mobile configurator

        // wait till all 5 gallery images are present
        cy.get('.more-views li')
            .should('have.length', 2)
            .each(($li) => { // iterate through each child of li
                cy.wrap($li).find('img').should('be.visible')
            })

        // wait till main image is visible
        cy.get('#main-image').should('be.visible')

        // take snapshot of mobile configurator
        // cy.percySnapshot('mobile plissee configurator with Schiebegardine Naru 7297', { widths: [375] })
        cy.argosScreenshot('mobile schibegardine-configurator with Schiebegardine Naru 7297')

    })
})