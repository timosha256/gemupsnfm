export default function Cart() {
  return (
    <div className="cart__wrapper">
      <button className="cart" data-hystmodal="#cartModal">
        <i className="ico-cart"></i>
        <div className="count__lable">
          <span>0</span>
        </div>
      </button>
    </div>
  );
}
