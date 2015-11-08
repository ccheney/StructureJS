import Stage from '../vendor/structurejs/js/display/Stage';
import StructureJSView from './views/StructureJSView';
import './templates';

/**
 * The main class for the application.
 *
 * @class App
 * @extends Stage
 * @constructor
 **/
class App extends Stage {

    constructor() {
        super();
    }

    /**
     * @overridden DOMElement.create
     */
    create() {
        super.create();

        let structureJSView = new StructureJSView(this.$element.find('.js-structureJSView'));
        this.addChild(structureJSView);

        this.createComponents([
            { component: StructureJSView, selector: '.js-structureJSView2' }
        ]);
    }

}

export default App;
