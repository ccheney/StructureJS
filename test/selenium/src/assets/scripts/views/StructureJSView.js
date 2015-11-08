import DOMElement from '../../vendor/structurejs/js/display/DOMElement';
import TemplateFactory from '../../vendor/structurejs/js/util/TemplateFactory';

/**
 * @class StructureJSView
 * @extends DOMElement
 * @constructor
 **/
class StructureJSView extends DOMElement {

    constructor($element) {
        super($element);
    }

    /**
     * @overridden DOMElement.create
     */
    create() {
        super.create();
    }

    /**
     * @overridden DOMElement.enable
     */
    enable() {
        if (this.isEnabled === true) { return this; }

        return super.enable();
    }

    /**
     * @overridden DOMElement.disable
     */
    disable() {
        if (this.isEnabled === false) { return this; }

        return super.disable();
    }

    /**
     * @overridden DOMElement.layout
     */
    layout() {
        let html = TemplateFactory.create('templates/template', this);
        this.$element.html(html);

        return this;
    }

}

export default StructureJSView;
