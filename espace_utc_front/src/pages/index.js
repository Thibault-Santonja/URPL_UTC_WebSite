import React, {Component} from 'react';
import YouTube from 'react-youtube';


class Index extends Component {

    render() {
        return(
            <div className={'page'}>
                <article> {/*!--intro--*/}
                    <p>Étudiants passionnés de l'Université de Technologie de Compiègne (UTC) dans les Hauts-de-France,
                        nous nous sommes lancés depuis 2019 dans l'aventure spatiale.</p>
                    <p>Notre projet : faire un moteur hybride et tenter d'atteindre l'espace grace à nos connaissances,
                        notre esprit et envie d'innovations, notre curiosité et notre capacité d'apprentissage !</p>
                </article>
                <article> {/*!--intro video --*/}
                    <YouTube videoId={"rwt5GhylwOA"}/>
                    <p>Vidéo de présentation de la filière aérospatiale de l'Université de Technologie de Compiègne.</p>
                </article>

            </div>
        )
    };
}

export {Index};