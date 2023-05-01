import React from "react";

export default function Contact(props){
    return(
        <div className="contact-card">
            <img src={props.img}/>
            <div className="info-group">
                <h3>{props.name}</h3>
                </div>
               <div className="info-group">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcqBDPN14uaFfsFJChxaFOCPtXaU09RGa88okzq-qeA&s"/>

               <p>{props.phone}</p>
                </div> 
            
            <div className="info-group">
                <img src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-email-icon-png-image_1757854.jpg"/>
                <p>{props.email}</p>
            </div>

        </div>
    )
}