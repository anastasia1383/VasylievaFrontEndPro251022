import { Link } from "react-router-dom";
import Api from "../Api";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const setAlbums = async () => {
            const data = await Api.getUserById();
            setAlbums(data);
        }

        getUsers();
    }, []);

    return <>
    {albums.map((album) => <div key={album.id}><Link to={`albums/${album.userId}/photos`}>{album.title}</Link></div>)}
    </>
};

export default Albums;