import ProtTypes from 'prop-types'

function Item({marca, ano}) {
    return (
        <>
            <li>
                {marca} - {ano}
            </li>
        </>
    );
}

Item.propTypes = {
    marca: ProtTypes.string
}

export default Item;