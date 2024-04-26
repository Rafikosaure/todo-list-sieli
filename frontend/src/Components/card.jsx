import "./style.scss";
import { DeleteSvg } from "./logo/logo";
import { UpdateSvg } from "./logo/logo";
import { DoneSvg } from "./logo/logo";

export const Card = (props) =>{
    /**
     * @param {object} props
     * @param {function} props.onClick
     * @param {Number} props.id
     * @param {string} props.classname
     * @param {Date} props.expiration
     * @param {Number} props.priority
     * @param {string} props.title
     * @param {function} props.update
     * @param {string} props.content
     * @param {boolean} props.isDone
     * @param {function} props.
     */

    return(
        // change on click to more suitable element (button)
        <div onClick={props.onClick} key={props.id} className={`dashboard__card ${props.classname} ${props.isDone ? "--done" : "--not-done"}`}>
            <div className="card__options">
                {!props.isDone && <p className="options__expiration">{props.expiration}</p>}
                <p className="options__priority">{props.priority}</p>
            </div>
            <h3 className="card__title">{props.title}</h3>
            <div className="card__content">
                <textarea className="content__textarea" onChange={props.update} name={props.id} defaultValue={props.content}></textarea>
            </div>
            <div className="card__commands">
                <button className="commands__button" onClick={props.delete}><DeleteSvg classname="commands__icon" /></button>
                {!props.isDone && <button className="commands__button" onClick={props.update}><UpdateSvg classname="commands__icon"/></button>}
                {!props.isDone && <button className="commands__button" onClick={props.done}><DoneSvg classname="commands__icon"/></button>}
            </div>
        </div>
    ) 
}