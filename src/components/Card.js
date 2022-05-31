import React from "react"
import location from '../images/path.svg';
import line from '../images/Line 16.png';
import '../solo2.css';


export default function Card(props) {
    // let badgeText
    // if (props.item.openSpots === 0) {
    //     badgeText = "SOLD OUT"
    // } else if (props.item.location === "Online") {
    //     badgeText = "ONLINE"
    // }
    
    return (
        // <div className="card">
        //     {badgeText && <div className="card--badge">{badgeText}</div>}
        //     <img src={`../images/${props.item.coverImg}`} alt='' className="card--image" />
        //     <div className="card--stats">
        //         <img src="../images/star.png" alt="" className="card--star" />
        //         <span>{props.item.stats.rating}</span>
        //         <span className="gray">({props.item.stats.reviewCount}) • </span>
        //         <span className="gray">{props.item.location}</span>
        //     </div>
        //     <p className="card--title">{props.item.title}</p>
        //     <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        // </div>
        <div className="card-body">
            <div className="ses0">
                <img src={`${props.item.imageUrl}`} alt='' className="imgCard"/>
                <div className="ses1">
                    <div className="ses2">
                        <img src={location} alt='' className="loclogo" />
                        <p className="location">{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} className='vog'>View on Google Maps</a>
                    </div>
                    <p className="title">{props.item.title}</p>
                    <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
            <img src={line} className='line' alt="" />
        </div>
    )
}