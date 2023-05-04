import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../Api";

export const Photos = () => {

    const [photos, setPhotos] = useState([]);

    const { albumId } = useParams();

    useEffect(() => {
        const getPhotos = async () => {
            const data = await Api.getPhotosByAlbumId(albumId);
            setPhotos(data);
        }

        getPhotos();
    }, []);

    return (
        <>
            <div className="image">
                {photos.map((photo) => <div key={photo.id}>
                    <Link to={`${photo.id}`}><img src={photo.url} /></Link>
                </div>)}
            </div>
        </>
    )
};