import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames";

import { formatCurrency } from "../../../common/utils";
import { addToCart } from "../../../redux/actions/cartActions";
import { addToWishlist } from "../../../redux/actions/wishlistActions";
import ProductDetailController from "./ProductDetailController";
import ProductDetailInfoTab from "./ProductDetailInfoTab";
import Rate from "../../Other/Rate";
import { checkProductInWishList } from "../../../common/shopUtils";

export default function ProductDetailInfo({ data, onReviewSubmit, hideTab }) {
  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const [quantity, setQuantity] = useState();
  const [otherColor, setOtherColor] = useState();
  const getQuantity = (q) => {
    setQuantity(q);
  };
  const onAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(data, quantity, otherColor));
    toast.success("Product added to cart");
  };
  const onAddToWishList = (e) => {
    e.preventDefault();
    let product = checkProductInWishList(wishlistState, data.id);
    dispatch(addToWishlist(data));
    toast.dismiss();
    if (!product) {
      return toast.success("Product added to wishlist !");
    } else {
      return toast.error("Product removed from wishlist !");
    }
  };
  return (
    <div className="product-detail__content">
      <div className="product-detail__content__header">
        <h5>{data.category}</h5>
        <h2>{data.name}</h2>
        <div className="product-detail__content__header__comment-block">
          {/* <Rate currentRate={data.rate} />
          <p>03 Reviews</p> */}
          {/* <Link href={process.env.PUBLUC_URL + "#"}>
            <a>Write a reviews</a>
          </Link> */}
        </div>
        <h3>
          {data.discount
            ? formatCurrency(data.discount)
            : formatCurrency(data.price)}
          {data.discount && <span>{formatCurrency(data.price)}</span>}
        </h3>
      </div>
      <div className="divider"></div>
      <div className="product-detail__content__footer">
        <ul>
          <li>
            Codigo de Producto: <span>{data.code}</span>
          </li>
          <li>
            Availabilidad:
            {data.quantity > 0 ? (
              <span className="in-stock"> {data.status == "DISPONIBLE" ? "Disponible" : "Agotado"}</span>
            ) : (
              <span className="out-stock"> Sin Stock</span>
            )}

            {data.hasPromo ? data.hasPromo : ""}
          </li>
        </ul>
        {/* <ProductDetailController
          data={data}
          getQuantity={getQuantity}
          onAddToCart={onAddToCart}
          onAddToWishList={onAddToWishList}
          color={otherColor}
        /> */}
      </div>
      {!hideTab && (
        <>
          <div className="divider"></div>
          <div className="product-detail__content__tab">
            <ProductDetailInfoTab data={data} onReviewSubmit={onReviewSubmit} />
          </div>
        </>
      )}
    </div>
  );
}
