import React from "react";
import { useDispatch } from "react-redux";
import ImgIconHeart from "../../assets/img/icon-heart.svg";
import { addCart, increaseCart, decreaseCart } from "../../reducks/carts/operations";

const Item = ({ item, selected_count, setShowWriteReview, setShowReviews, setSelectedItemId }) => {
  const dispatch = useDispatch();
  const clickAddCart = () => {
    dispatch(addCart(item));
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(item));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(item));
  };
  const clickCheckReviews = () => {
    setSelectedItemId(item.id);
    setShowReviews(true);
  };
  const clickWriteReview = () => {
    setSelectedItemId(item.id);
    setShowWriteReview(true);
  };
  return (
    <div class="blog">
     <div class="blog-img"> <img src={item.image} class="item-image" alt="" /></div>
      <div class="info">
        <div class="name">{item.name}</div>
        <div class="name-bottom">
        <div class="heart">
          <img src={ImgIconHeart} class="icon-heart" alt="" />
          <p class="count" >({item.total_like_count})</p>
        </div>
          
          <button class="link-button" onClick={() => clickCheckReviews()}>
            Check Reviews
          </button>
          <button class="link-button" onClick={() => clickWriteReview()}>
            Write Review
          </button>
          <div class="info-bottom">
          <div class="price">${item.price}</div>
          {selected_count == 0 ? (
            <div class="add" onClick={clickAddCart}>
              Add +
            </div>
          ) : (
            <div class="number">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{selected_count}</span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Item;
