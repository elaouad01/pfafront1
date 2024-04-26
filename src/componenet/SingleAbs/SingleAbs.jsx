import React from 'react';
import "./single.scss";
import Sidebar from "../../composantes/sidebar/Sidebar";
import Navbar from "../../composantes/navbar/Navbar";

const user = {
    type: "Absence maladie",
    datededepart: "2024-04-01",
    dateRetour: "2024-04-10",
    nbrjours: 10,
    nbrjourdeduire: 5,
    nbrjournepasdeduire: 2,
    reliquat: 3,
    remplacant: "John Doe",
    cumul: 20
};

const SingleAbs = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="bottom">
                    <div className='info'>

                        <div className='item'>
                            <div className="details">
                                <h1 className="itemTitle">La demande d'absence :</h1>
                                <div className="detailItem row">
                                    <div className="col-md-4">
                                        <span className="itemKey">Type de la demande d'absence :</span>
                                        <span className="itemValue">{user.type}</span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="itemKey">Date de départ :</span>
                                        <span className="itemValue">{user.datededepart}</span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="itemKey">Date de retour :</span>
                                        <span className="itemValue">{user.dateRetour}</span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="itemKey">Nombre de jours :</span>
                                        <span className="itemValue">{user.nbrjours}</span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="itemKey">Nombre de jours à déduire :</span>
                                        <span className="itemValue">{user.nbrjourdeduire}</span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="itemKey">Nombre de jours à ne pas déduire :</span>
                                        <span className="itemValue">{user.nbrjournepasdeduire}</span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="itemKey">Reliquat :</span>
                                        <span className="itemValue">{user.reliquat}</span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="itemKey">Le remplaçant :</span>
                                        <span className="itemValue">{user.remplacant}</span>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="itemKey">Cumul des absences de maladie :</span>
                                        <span className="itemValue">{user.cumul}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleAbs;
