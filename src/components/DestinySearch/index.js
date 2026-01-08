import { Component } from "react";
import './index.css';
import DestinyItem from "../DestinyItem";   

class DestinySearch extends Component {
    state = { searchInput: '' }
    onChangeSearchInput = (event) => {
        this.setState({ searchInput: event.target.value })
    }
    render() {
        const { searchInput } = this.state
        const { destinationsList } = this.props
        const searchResults = destinationsList.filter((eachDestination) =>
            eachDestination.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        return (
            <div className="app-container">
                <h1 className="heading">Destinations</h1>   
                    <input
                        type="search"
                        className="search-input"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                    />
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                        alt="search icon"
                        className="search-icon"
                    />
                    <ul>
                        {searchResults.map((eachDestination) => (
                            <DestinyItem
                                key={eachDestination.id}
                                destinationDetails={eachDestination}
                            />
                        ))}
                    </ul>
                </div>
        )
    }
}
export default DestinySearch;