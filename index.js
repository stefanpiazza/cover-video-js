function CoverVideo(options) {
	this.el = options.el;

    this.el.style['position'] = 'absolute';
    this.el.style['left'] = '50%';
    this.el.style['top'] = '50%';
    setVendor(this.el, 'Transform', 'translate(-50%, -50%)');

    if (!this.el.getAttribute('width')) throw new Error('Define video width on element');
    if (!this.el.getAttribute('height')) throw new Error('Define video height on element');

	this.elWidth = this.el.offsetWidth;
	this.elHeight = this.el.offsetHeight;
    this.elRatio = this.elWidth/this.elHeight; 

    this.wrapper = options.wrapper;  

	this.hooks = {};
}

CoverVideo.prototype = {
	init: function() {
        this.bind();
        this.resize();        
	},

	resize: function() {
        this.wrapperWidth = wrapper.offsetWidth;
        this.wrapperHeight = wrapper.offsetHeight;
        this.wrapperRatio = this.wrapperWidth/this.wrapperHeight;

        (this.elRatio > this.wrapperRatio ? (this.elNewWidth = this.wrapperHeight * this.elRatio, this.elNewHeight = this.wrapperHeight) : (this.elNewWidth = this.wrapperWidth, this.elNewHeight = this.wrapperWidth / this.elRatio));
        
        this.el.style.width = this.elNewWidth + 'px';
        this.el.style.height = this.elNewHeight + 'px'; 
    },

    bind: function() {
        this.hooks.resize = this.resize;
        addEvent(window, 'resize', this.resize.bind(this));
    },

    unbind: function() {
        this.hooks.resize = null;
        removeEvent(window, 'resize', this.resize.bind(this));
    },
}

function setVendor(element, property, value) {
    element.style["webkit" + property] = value;
    element.style["moz" + property] = value;
    element.style["ms" + property] = value;
    element.style["o" + property] = value;
}

function addEvent(el, type, fn) {
    if (document.addEventListener) return el.addEventListener(type, fn, false);
    return el.attachEvent("on" + type, fn);
}

function removeEvent(el, type, fn) {
    if (document.removeEventListener) return el.removeEventListener(type, fn);
    return el.detachEvent("on" + type, fn);
}