import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="" ano={1992}/>
                <Item marca="Ford" ano={1993} />
            </ul>
        </>
    );
}

export default List;