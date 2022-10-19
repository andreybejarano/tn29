import React from 'react';
import Genre from './Genre';

class GenresInDb extends React.Component {
    state = {
        genresList: []
    }

    componentDidMount() {
        fetch('/api/genres')
            .then(respuesta => respuesta.json())
            .then(genres => {
                this.setState({ genresList: genres.data })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.genresList.map((element, index) => 
                                        <Genre genre={element.name} key={index} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default GenresInDb;