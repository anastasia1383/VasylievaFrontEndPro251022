import './body.css';

function Body() {
    return (
        <div className='container'>
            <div className='item'><a href='#'>
                <img src='./images/cat.jpg' /></a>
                <div>
                    <h2>Cats</h2>
                    <p>Information on cat breeds, care, behavior, and community for cat lovers.</p>
                </div>
            </div>
            <div className='item'><a href='#'>
                <img src='./images/dog.jpg' /></a>
                <div>
                    <h2>Dogs</h2>
                    <p>Information on dog breeds, training, health, nutrition, and community for dog owners.</p>
                </div>
            </div>
            <div className='item'><a href='#'>
                <img src='./images/bunny.jpg' /></a>
                <div>
                    <h2>Bunny</h2>
                    <p>Information on rabbit breeds, care, behavior, and community for rabbit enthusiasts.</p>
                </div>
            </div>
            <div className='item'><a href='#'>
                <img src='./images/fish.jpg' /></a>
                <div>
                    <h2>Fish</h2>
                    <p>Information on fish breeds, care, behavior, and community for aquarium hobbyists.</p>
                </div>
            </div>
        </div>
    )
};

export default Body;