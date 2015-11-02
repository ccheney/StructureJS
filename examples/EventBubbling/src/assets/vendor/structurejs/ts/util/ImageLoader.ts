import IDataStore from '../interface/IDataStore';
import EventDispatcher from '../event/EventDispatcher';
import LoaderEvent from '../event/LoaderEvent';

/**
 * The ImageLoader...
 *
 * @class ImageLoader
 * @extends EventDispatcher
 * @module StructureJS
 * @submodule util
 * @constructor
 * @author Robert S. (www.codeBelt.com)
 */
class ImageLoader extends EventDispatcher implements IDataStore
{

    protected _image:HTMLImageElement;

    public data:any;
    public src:string;
    public complete:boolean = false;

    constructor(path:string)
    {
        super();

        this.src = path;
        this.init();
    }

    protected init():void
    {
        this._image = new Image();
        this._image.onload = (event:Event) => {
            this.onImageLoad();
        }
    }

    public load():void
    {
        this._image.src = this.src;
    }

    protected onImageLoad():void
    {
        this.data = this._image;
        this.complete = true;
        this.dispatchEvent(LoaderEvent.COMPLETE);
    }
}

export default ImageLoader;
