import DisplayObjectContainer from '../display/DisplayObjectContainer';
import DOMElement from '../display/DOMElement';
import IEventDispatcher from '../interface/IEventDispatcher';

/**
 * TODO: YUIDoc_comment
 *
 * @class ITransition
 * @constructor
 * @author Robert S. (www.codeBelt.com)
 */
interface ITransition extends IEventDispatcher
{
    createTransition(transitionType:string, sectionStage:DisplayObjectContainer, currentView:DOMElement, nextView:DOMElement, duration?:number):ITransition;
    complete():any;
}

export default ITransition;