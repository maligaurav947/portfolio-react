import React from "react";
export default function Projectitems(props) {
  return (
    <div className="main-project__card__items">
      <div className="img">
        <img src={props.img} alt={props.alt} className="skeleton" />
      </div>
      <div className="main-project__card__items__text">
        <h4 className="main-project__card__items__text__title">
          {props.title}
        </h4>
        <p className="main-project__card__items__text__info">{props.info}</p>
        <div className="btn-group">
          <button class="button-81" role="button">
            <a href={props.codelink} target={"_blank"}>
              Code
            </a>
          </button>
          <button class="button-81" role="button">
            <a href={props.livelink} target={"_blank"}>
              GO LIVE
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}