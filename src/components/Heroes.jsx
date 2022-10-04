import Heroe from "./Heroe";

const Heroes = (props) => {
    return (
        <main id="main">
            <Heroe heroData={props.heroesData.heroes} />
        </main>
    )
}

export default Heroes;