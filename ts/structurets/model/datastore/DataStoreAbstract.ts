///<reference path='../../interface/IDataStore')
///<reference path='../../event/LoaderEvent')
///<reference path='../../event/EventDispatcher')

/**
 * The DataStoreAbstract...
 *
 * @class DataStoreAbstract
 * @module StructureJS
 * @submodule model
 * @constructor
 * @param path {string}
 * @author Robert S. (www.codeBelt.com)
 */
module StructureTS
{
    export class DataStoreAbstract extends EventDispatcher implements IDataStore
    {
        /**
         * YUIDoc_comment
         *
         * @property data
         * @type {any}
         * @public
         */
        public data:any = null;

        /**
         * YUIDoc_comment
         *
         * @property src
         * @type {string}
         * @public
         */
        public src:string = null;

        /**
         * YUIDoc_comment
         *
         * @property complete
         * @type {boolean}
         * @public
         */
        public complete:boolean = false;

        constructor(path:string)
        {
            super();

            this.src = path;
        }

        /**
         * YUIDoc_comment
         *
         * @method load
         * @protected
         */
        public load():void
        {
        }

        /**
         * YUIDoc_comment
         *
         * @method _onLoaderComplete
         * @protected
         */
        public _onLoaderComplete(...rest):void
        {
            this.complete = true;
            this.dispatchEvent(new LoaderEvent(LoaderEvent.COMPLETE, false, false, this));
        }
    }
}