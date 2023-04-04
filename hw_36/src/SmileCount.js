import React, { Component } from 'react';
import './App.css';

class SmileCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smiles: [
                { name: "😇", votes: 0 },
                { name: "😂", votes: 0 },
                { name: "🥰", votes: 0 },
                { name: "🤪", votes: 0 }
            ],
            showWinners: false,
        }
    }

    vote(i) {
        let newSmiles = [...this.state.smiles];
        newSmiles[i].votes++;
        this.setState({ ...this.state, smiles: newSmiles, showWinners: false });
    }

    showWinners() {
        this.setState({ ...this.state, showWinners: true });
    }

    getWinners() {
        const max = Math.max(...this.state.smiles.map(item => item.votes));
        return this.state.smiles.filter(item => item.votes === max);
    }

    render() {
        return (
            <>
                <h1>Vote Your Smile!</h1>
                <div className="smiles">
                    {
                        this.state.smiles.map((smile, i) =>
                            <div key={i} className="smile">
                                <div className="voteCount">
                                    {smile.votes}
                                </div>
                                <div className="smileName">
                                    {smile.name}
                                </div>
                                <button onClick={this.vote.bind(this, i)}>Click Here</button>
                            </div>
                        )}
                </div>
                <button onClick={this.showWinners.bind(this)}>Show The Winner!</button>
                
                {this.state.showWinners && this.getWinners().map((item) => <span className="winner">{item.name}</span>)}
            </>
        );
    }
}
export default SmileCounter;