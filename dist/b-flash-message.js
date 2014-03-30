(function () {
    Bosonic.registerElement('b-flash-message', {
        readyCallback: function () {
            var root = this.createShadowRoot();
            root.appendChild(this.template.content.cloneNode(true));
            var isCloseable = this.getAttribute('closeable') === 'true';
            var closeButton = root.querySelector('button.close');
            if (isCloseable)
                closeButton.addEventListener('click', this.close.bind(this));
            else
                closeButton.remove();
            var type = this.getAttribute('type');
            if (!type)
                this.setAttribute('type', 'info');
            var isVisible = this.getAttribute('visible') === 'true';
            if (isVisible)
                this.show();
        },
        show: function () {
            this.setAttribute('visible', 'true');
            var duration = this.getAttribute('duration');
            if (duration && !isNaN(parseInt(duration)))
                setTimeout(this.close.bind(this), duration);
        },
        close: function () {
            this.removeAttribute('visible');
        },
        template: ' <div class="b-flash-message alert-closeable"> <button type="button" class="close">\xD7</button> <content></content> </div> '
    });
}());