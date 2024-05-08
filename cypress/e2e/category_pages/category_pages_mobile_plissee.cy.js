
import "cypress-real-events/support";


describe('Integration test with visual testing - simulated mobile testing on plissee category page', function () {

    it('mobile testing on plissee category page', function () {

        cy.viewport('iphone-6')


        // load category page
        cy.visit('/plissee/plissee-rot')

        cy.argosScreenshot('mobile view: /plissee/plissee-rot')

        cy.wait('@js_minify')

        // activate tooltip of Ambience 4477 Rot
        cy.get('img[alt="Plissee Ambience 4477 Rot"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Ambience 4477 Rot')

        // deactivate tooltip of Ambience 4477 Rot
        cy.get('div.tooltip.active').click()
        cy.argosScreenshot('inactive tooltip: Ambience 4477 Rot')

        // activate tooltip of Color Breeze 4678
        cy.get('img[alt="Color Breeze 4678"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Color Breeze 4678')

        // deactivate tooltip of Wabe Bella 2082
        cy.get('div.tooltip.active').click()
        cy.argosScreenshot('inactive tooltip: Color Breeze 4678')

        // activate tooltip of Wabe Glow 2161
        cy.get('img[alt="Wabe Glow 2161"]').click()

        // wait till all 5 mini tooltip images are present
        cy.get('.tooltip.active > .tooltip-info-container > ul li')
            .should('have.length', 5)
            .each(($li) => { // iterate through each 'li'
                cy.wrap($li).children().each(($el) => { // iterate through each child of li
                    // expect($el).to.be.visible() // fails
                    cy.wrap($el).should('be.visible')
                })
            })
        cy.argosScreenshot('active tooltip: Wabe Glow 2161')

        // go to mobile configurator of Wabe Glow 2161
        cy.get('div.tooltip.active').find('.mobile_tip_content').click()

        // new page will be loaded
        // 

        // wait till all 8 gallery images are present
        cy.get('.more-views li')
            .should('have.length', 10)
            .each(($li) => { // iterate through each child of li
                cy.wrap($li).find('img').should('be.visible')
            })

        // wait till main image is visible
        cy.get('#main-image').should('be.visible')

        // take snapshot of mobile configurator
        cy.argosScreenshot('mobile plissee-configurator with Wabe Glow 2161')
    })
})