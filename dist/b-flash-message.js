(function() {
    

    Bosonic.registerElement(
        'b-flash-message',
        {
    readyCallback: function () {
        var root = this.createShadowRoot();
        root.appendChild(this.template.content.cloneNode(true));
        var type = this.getAttribute('type');
        this.setAttribute('type', type || 'info');
        if (this.getAttribute('visible') === 'true')
            this.show();
    },
    show: function () {
        this.setAttribute('visible', 'true');
        var duration = this.getAttribute('duration');
        if (duration && !isNaN(parseInt(duration)))
            setTimeout(this.close.bind(this), duration);
        this.dispatchEvent(new Event('show'));
    },
    close: function () {
        this.removeAttribute('visible');
        this.dispatchEvent(new Event('close'));
    },
    template: '        <content></content>    '
}
    );
}());