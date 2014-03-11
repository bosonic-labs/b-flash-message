(function() {
    

    Bosonic.registerElement(
        'b-flash-message',
        {
    readyCallback: function () {
        var root = this.createShadowRoot();
        root.appendChild(this.template.content.cloneNode(true));
        var isCloseable = this.getAttribute('closeable') !== 'false';
        var closeButton = root.querySelector('button.close');
        if (isCloseable)
            closeButton.addEventListener('click', this.close.bind(this));
        else
            closeButton.remove();
    },
    show: function () {
        this.setAttribute('visible', '');
        this.classList.add(this.getAttribute('type'));
        var duration = this.getAttribute('duration');
        if (duration && !isNaN(parseInt(duration)))
            setTimeout(this.close.bind(this), duration);
    },
    close: function () {
        this.removeAttribute('visible');
    },
    template: '        <div class="b-flash-message alert-closeable">        \t<button type="button" class="close">\xD7</button>            <content></content>        </div>    '
}
    );
}());