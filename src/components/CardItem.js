import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' >
          
          <div className='cards__item__info'>
          <h1 className='cards__item__text'>{props.text}</h1>
            <h5 className='cards_item_text1'>{props.text1}</h5>
            </div>
          <div className="horizontal">
          <div className='horizon-items' >
          
            {props.text2}</div>
          <div  >{props.text3}</div>
          <div >{props.text4}</div>
          </div>
          
        </Link>
      </li>
     
    </>
  );
}

export default CardItem;
