(function () {
    var BFlashMessagePrototype = Object.create(HTMLElement.prototype, {
            createdCallback: {
                enumerable: true,
                value: function () {
                    if (this.getAttribute('closeable') === 'true') {
                        this.appendChild(this.template.content.cloneNode(true));
                        this.querySelector('.b-flash-message-close').addEventListener('click', this.close.bind(this), false);
                    }
                    var type = this.getAttribute('type');
                    this.setAttribute('type', type || 'info');
                    if (this.getAttribute('visible') === 'true')
                        this.show();
                }
            },
            show: {
                enumerable: true,
                value: function () {
                    this.setAttribute('visible', 'true');
                    var duration = this.getAttribute('duration');
                    if (duration && !isNaN(parseInt(duration)))
                        setTimeout(this.close.bind(this), duration);
                    this.dispatchEvent(new CustomEvent('b-flash-message-show'));
                }
            },
            close: {
                enumerable: true,
                value: function () {
                    this.removeAttribute('visible');
                    this.dispatchEvent(new CustomEvent('b-flash-message-close'));
                }
            }
        });
    window.BFlashMessage = document.registerElement('b-flash-message', { prototype: BFlashMessagePrototype });
    Object.defineProperty(BFlashMessagePrototype, 'template', {
        get: function () {
            var fragment = document.createDocumentFragment();
            var div = fragment.appendChild(document.createElement('div'));
            div.innerHTML = ' <style> .b-flash-message-close { float:right; opacity:.4; filter:alpha(opacity=40); cursor: pointer; } </style> <button class="b-flash-message-close">\xD7</button> ';
            while (child = div.firstChild) {
                fragment.insertBefore(child, div);
            }
            fragment.removeChild(div);
            return { content: fragment };
        }
    });
}());