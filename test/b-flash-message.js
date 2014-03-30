// var mouse = effroi.mouse;

describe("b-flash-message", function() {
    "use strict";
    it("should be hidden by default", function() {
        var flashMessage = document.createElement('b-flash-message');
        expect(flashMessage.getAttribute('visible')).to.be.null;
        //expect(window.getComputedStyle(flashMessage).display).to.equal('none');
    });

    it("should be visible when calling show()", function() {
        var flashMessage = document.createElement('b-flash-message');
        flashMessage.show();
        expect(flashMessage.getAttribute('visible')).to.equal('true');
        //expect(window.getComputedStyle(flashMessage).display).to.equal('block');
    });

    it("should be closed when calling close()", function() {
        var flashMessage = document.createElement('b-flash-message');
        flashMessage.setAttribute('isCloseable', 'true');
        flashMessage.show();
        expect(flashMessage.getAttribute('visible')).to.equal('true');
        //mouse.click(flashMessage.querySelector('button.close'));
        flashMessage.close();
        expect(flashMessage.getAttribute('visible')).to.be.null;
    });

    it("should be closed automatically after a certain duration", function(done) {
        var flashMessage = document.createElement('b-flash-message');
        flashMessage.setAttribute('duration', 5);
        flashMessage.show();
        expect(flashMessage.getAttribute('visible')).to.equal('true');
        setTimeout(function() {
            expect(flashMessage.getAttribute('visible')).to.be.null;
            done();
        }, 10);
    });

    it("should be stylized by type with info by default", function() {
        var flashMessage = document.createElement('b-flash-message');
        expect(flashMessage.getAttribute('type')).to.equal('info');
        // expect(flashMessage.style.backgroundColor).to.equal('#d9edf7');
        flashMessage.setAttribute('type', 'error');
        // expect(flashMessage.style.backgroundColor).to.equal('#f2dede');
    });
});