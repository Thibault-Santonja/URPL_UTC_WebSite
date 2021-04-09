import React, {Component} from 'react';
import {Button, Card, CardTitle, CardText, CardColumns} from "reactstrap";



function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const tmp_news = [
    {
        'title': 'Premier test statique.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ligula pellentesque odio convallis, ut pellentesque lacus laoreet. Integer dapibus diam sed magna imperdiet, eu ultrices erat aliquam.'
    },
    {
        'title': 'Premier test de notre parachute.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'With supporting text below as a natural lead-in to additional content.'
    },
    {
        'title': 'Vincent Martin a publier sa TX.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ligula pellentesque odio convallis, ut pellentesque lacus laoreet. Integer dapibus diam sed magna imperdiet, eu ultrices erat aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ligula pellentesque odio convallis, ut pellentesque lacus laoreet. Integer dapibus diam sed magna imperdiet, eu ultrices erat aliquam.'
    },
    {
        'title': 'Lancement du site web !',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus diam sed magna imperdiet, eu ultrices erat aliquam.'
    },
    {
        'title': 'MBSE avec Capella.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        'title': 'Vincent Martin a publier sa TX.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ligula pellentesque odio convallis, ut pellentesque lacus laoreet. Integer dapibus diam sed magna imperdiet, eu ultrices erat aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ligula pellentesque odio convallis, ut pellentesque lacus laoreet. Integer dapibus diam sed magna imperdiet, eu ultrices erat aliquam.'
    },
    {
        'title': 'Lancement du site web !',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus diam sed magna imperdiet, eu ultrices erat aliquam.'
    },
    {
        'title': 'MBSE avec Capella.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        'title': 'Lancement du site web !',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus diam sed magna imperdiet, eu ultrices erat aliquam.'
    },
    {
        'title': 'MBSE avec Capella.',
        'date': randomDate(new Date(2019, 0, 1), new Date()),
        'content': 'With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
]


class News extends Component {
    render() {
        return(
            <div className={'page'}>
                <h2 className={'page_title'}>News</h2>
                <CardColumns>
                    {tmp_news.map(entry =>
                        <Card body>
                            <CardTitle tag="h5">{entry.title}</CardTitle>
                            <p>{entry.date.toDateString()}</p>
                            <CardText>{entry.content}</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    )}
                </CardColumns>
            </div>
        )
    };

}

export {News};