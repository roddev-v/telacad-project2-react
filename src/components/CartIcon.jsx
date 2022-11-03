import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIconSvg from '../assets/icons/shopping-cart.svg'

function CartIcon({ cartItemsNumber }) {
    return <>
        <Link to="/cart">
            <img src={CartIconSvg} alt="Shopping cart" />
            <p>{cartItemsNumber}</p>
        </Link>
    </>
}

function mapStateToProps(store) {
    let total = 0;
    store.products.cartProducts.forEach(p => total += p.quantity);
    return {
        cartItemsNumber: total
    }
}

export default connect(mapStateToProps)(CartIcon);