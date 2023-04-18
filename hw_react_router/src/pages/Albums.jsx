import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../Api";

export const Albums = () => {
    const [albums, setAlbums] = useState([]);

    const { userId } = useParams();

    useEffect(() => {
        const getAlbums = async () => {
            const data = await Api.getAlbumsByUserId(userId);
            setAlbums(data);
        }

        getAlbums();
    }, []);

    return <>
        {albums.map((album) => <div key={album.id}>
            <div className="flex">
                <h1>
                    {album.title}
                </h1>
                <Link to={`${album.id}/photos`}><button>See photos</button></Link>
            </div>
        </div>
        )}
    </>
};