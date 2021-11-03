import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";

const WorldPage = (props) => {
    return (
        <div className="world-page-container">
            <div>
                <Header />
                <Title />
                <Card allCountriesData={props.allCountriesData} />
            </div>
        </div>
    );
};

export default WorldPage;