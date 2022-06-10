import React, {useState, useRef,useMemo,useEffect} from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import {useIntersection} from "react-use"
import { createContext } from 'react';
import { Button } from './Button';
// import witch from 'react-switch'
import {Switch} from 'antd'


const Cards = () => {
  // const targetRef = useRef(null);
  // const [isVisible,setIsVisible]= useState(false);
  // const callbackFunction = entries => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // }
  // const options = useMemo(() => {
  //   return{
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.3
  //   }
  // },[]) ;
  // useEffect(()=>{
  //   const observer = new IntersectionObserver(callbackFunction,options);
  //   const currentTarget = targetRef.current;
  //   if(currentTarget)observer.observe(currentTarget);

  //   return () =>{
  //     if(currentTarget) observer.unobserve(currentTarget);
  //   }
  // }, [targetRef, options]);
  

  const [toggle, setToggle] = useState(false);

const toggler = () => {
  toggle ? setToggle(false):setToggle(true);
}

   
  return (
   
    <div className='cards'>
      <div className='card-heading'>
       <img src = "https://www.josla.com.ng/static/media/light.87591fdb.svg"/>
       <h1>App Features</h1>
       <img src = "https://www.josla.com.ng/static/media/light.87591fdb.svg"/>
        </div>
        <div className='switch-center'>
        <Switch className='switchCard' 
        width= {100}
        height={10}
        padding ={50}
         unCheckedChildren={<div>personal</div>}
         checkedChildren={<div>Enterprise</div>}
         
        onClick={toggler}
        >
           </Switch>
           </div>
        {toggle ? 
        <>
        <h5>For facility managers, estate developers and independent power providers, you can opt for commission charge on energy delivered or an annual license fee to gain administrative access to their consumer information and advanced features for operational insight.</h5>
          <div  className='cards__container'>
          <div className='cards__wrapper'>
         
    
            <ul  className='cards__items'>
            <li className='cards__item'>
          <Link className='third_cards__item__link' >
            
            <div className='cards__item__info'>
            <h1 className='cards__item__text'>Demand-side management</h1>
              <h5 className='cards_item_text1'>Use data generated from installed smart metersto better understand electric load pattern within your building/estate/ network'</h5>
              </div>
           
            <div className='description-btns'>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Order Now
          </Button>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Pay Bill
          </Button>
        
          </div>
          </Link>
        </li>
        <li className='cards__item'>
          <Link className='third_cards__item__link' >
            
            <div className='cards__item__info'>
            <h1 className='cards__item__text'>Electric Bill Vending</h1>
              <h5 className='cards_item_text1'>Benefit from an end-to-end metering and billing infrastructure to minimize collection losses and maximize revenue</h5>
              </div>
           
            <div className='description-btns'>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Order Now
          </Button>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Pay Bill
          </Button>
        
          </div>
          </Link>
        </li>
  
  
            
            </ul>
            <ul  className='second_cards__items'>
            <li className='second_cards__item'>
          <Link className='third_cards__item__link' >
            
            <div className='second_cards__item__info'>
            <h1 className='second_cards__item__text'>Asset management</h1>
              <h5 className='second_cards_item_text1'>Empower frontline staff to record faults digitally, view updates on repairsand refer to guidance on what immediate actions to take.</h5>
              </div>
              <div className='description-btns'>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Order Now
          </Button>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Pay Bill
          </Button>
        
          </div>
           
          </Link>
        </li>
        <li className='second_cards__item'>
          <Link className='third_cards__item__link' >
            
            <div className='second_cards__item__info'>
            <h1 className='second_cards__item__text'>Network Automation</h1>
              <h5 className='second_cards_item_text1'>'Gain from greater visibility and automation of your electric networkto improve service reliability, quickly identify faults, protection against harm, etc. from credible local and global vendors with extended warranty</h5>
              </div>
            
              <div className='description-btns'>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Order Now
          </Button>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Pay Bill
          </Button>
        
          </div>
          </Link>
        </li>
  
  
  
            </ul>
          </div>
        </div>
        </>
        : 
      
    <>
        <h5>For individuals who want to become more energy conscious, you can pay a monthly subscription fee of ₦1173.95 per month to access the following features to drive for efficient behaviours.</h5>
          <div  className='cards__container'>
          <div className='cards__wrapper'>
         
    
            <ul  className='cards__items'>
            <li className='cards__item '>
          <Link className='cards__item__link' >
            
            <div className='cards__item__info'>
              <div className='flex-head'>
              <img src ="https://www.josla.com.ng/static/media/light.87591fdb.svg"/>
              
            <h1 className='cards__item__text'>Energy Management</h1>
            </div>
              <h5 className='cards_item_text1'>'Data-driven application to view smart meter data as chart visualization and predictive approach to help you save significant energy'</h5>
              </div>
            <div className="horizontal">
            <div className='horizon-items' >
            
            Monitor your consumption in real-time</div>
            <div  >Earn point for being energy efficient</div>
            <div >"Non-intrusive appliance"</div>
            </div>
            <div className='description-btns'>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Get Started
          </Button>
          <h1 className='hover'>Learn More</h1>
        
          </div>
          </Link>
        </li>
        <li className='cards__item'>
          <Link className='cards__item__link' >
            
            <div className='cards__item__info'>
            
            <h1 className='cards__item__text'>
              
              Bill Payment</h1>
              <h5 className='cards_item_text1'>Convenient way to pay electricity bill with streamlined processing from bank account and ability to split bil with family and friends</h5>
              </div>
            <div className="horizontal">
            <div className='horizon-items' >
            
            Buy electric unit with bank transfer/ debit card</div>
            <div  >Access loan with smart meter data as collateral</div>
            <div >Use energy points earned to pay electric bill</div>
            </div>
            <div className='description-btns'>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--big'
          >
           Order Now
          </Button>
          <h1 className='hover'>Learn More</h1>
        
          </div>
          </Link>
        </li>
  
  
            
            </ul>
            <ul  className='second_cards__items'>
            <li className='second_cards__item'>
          <Link className='second_cards__item__link' >
            
            <div className='second_cards__item__info'>
            <h1 className='second_cards__item__text'>fault Reporting</h1>
              <h5 className='second_cards_item_text1'>connect with professional electricians on demand with validated experience to provide high standard service to resolve domestic electrical faults.</h5>
              </div>
            <div className="second_horizontal">
          
            
            <div>schedule maintenace for appliances or whole-house </div>
            <div  >Access to target network of trained electricians</div>
            
            </div>
            <div className='coming' ><b>Coming Soon</b></div>
          </Link>
        </li>
        <li className='second_cards__item'>
          <Link className='second_cards__item__link' >
            
            <div className='second_cards__item__info'>
            <h1 className='second_cards__item__text'>Online Store</h1>
              <h5 className='second_cards_item_text1'>
              Shop for smart consumer electronics, appliances and renewable power systems from credible local and global vendors with extended warranty</h5>
              </div>
            <div className="second_horizontal">
            <div className='second_horizon-items' >
            
            'Monitor your consumption in real-time'</div>
            <div  >'Earn point for being energy efficient'</div>
            <div >"Non-intrusive appliance"</div>
            </div>
            <div className='coming' ><b>Coming Soon</b></div>
          </Link>
        </li>
  
  
  
            </ul>
          </div>
        </div>
        </>
        }
    </div>
  );
}





export default Cards;


