import ICore from './ICore';
import BaseEvent from '../event/BaseEvent';

/**
 * TODO: YUIDoc_comment
 *
 * @class IBaseModel
 * @extends ICore
 * @module StructureJS
 * @submodule interface
 * @interface
 */
interface IEventDispatcher extends ICore
{
    /**
     * @property parent
     */
    parent:any;

    /**
     * @method addEventListener
     */
    addEventListener(type:string, func:Function, scope:any, priority?:number):any;

    /**
     * @method removeEventListener
     */
    removeEventListener(type:string, func:Function, scope:any):any;

    /**
     * @method dispatchEvent
     */
    dispatchEvent(event:BaseEvent):any;
}

export default IEventDispatcher;