import EventDispatcher from '../event/EventDispatcher';
import LoaderEvent from '../event/LoaderEvent';
import URLRequest from '../net/URLRequest';
import URLLoader from '../net/URLLoader';
import URLRequestMethod from '../net/URLRequestMethod';
import URLLoaderDataFormat from '../net/URLLoaderDataFormat';
import IDataStore from '../interface/IDataStore';

/**
 * The HtmlLoader...
 *
 * @class HtmlLoader
 * @module StructureJS
 * @submodule util
 * @constructor
 * @author Robert S. (www.codeBelt.com)
 */
class HtmlLoader extends EventDispatcher implements IDataStore
{
    protected _urlLoader:URLLoader = null;

    public data:any;
    public src:string;
    public complete:boolean = false;

    constructor(path:string)
    {
        super();

        this.src = path;

        this._urlLoader = new URLLoader();
        this._urlLoader.addEventListener(LoaderEvent.COMPLETE, this.onLoaderComplete, this);
        this._urlLoader.dataFormat = URLLoaderDataFormat.HTML;
    }

    public load():void
    {
        if (this.complete)
        {
            return;
        }

        var request:URLRequest = new URLRequest(this.src);
        request.method = URLRequestMethod.GET;

        this._urlLoader.load(request);
    }

    protected onLoaderComplete(event:LoaderEvent):void
    {
        this.complete = true;
        this.data = this._urlLoader.data;
        this.dispatchEvent(new LoaderEvent(LoaderEvent.COMPLETE));

        this._urlLoader.removeEventListener(LoaderEvent.COMPLETE, this.onLoaderComplete, this);
        this._urlLoader = null;
    }
}

export default HtmlLoader;