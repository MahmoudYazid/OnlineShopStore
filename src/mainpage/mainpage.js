import React, { useEffect } from 'react'
import './mainpage.css'
import { BsCartDash, BsGithub, BsLinkedin, BsFacebook, BsYoutube } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Buy, incCart , UpdateData } from '../store/store';
import { useNavigate } from 'react-router-dom';
import Pdf from './Mahmoud Abuelyazid cv.pdf';

export default function Mainpage() {

  const ItemIncart = useSelector(state => state.state.CartNumber)
  
  const data_ = useSelector(state => state.state.Data)
  const ActiviesArr = useSelector(state => state.state.buyActivities)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const GetData= ()=>{
    fetch(`https://fakestoreapi.com/products?limit=${20}`)
      .then(res => res.json())
      .then(json_ => {
        dispatch(UpdateData(json_))})



  }
  useEffect(() =>{
    GetData();
  },[])


  return (
    <div className="mainPageCss">
      <div className='Bar'>
        <div className='Title'></div>
        <div className='Title'>Product Store</div>
        <div className='counter'><p>{ActiviesArr.length}</p></div>
        <BsCartDash className='BsCartDash' onClick={() => nav('/cart')}></BsCartDash>
        

        

      </div>
      <div className='Body'>
        <div className='sider'></div>
        <div className='mainContent'>
          
    {

            data_.filter((item, i) => i < ItemIncart).map((item)=>(
              <div className="card" key={item.id}>
                
                <div className='imgContainer'>
                  <img src={item.image} className='Image'></img>  
                </div>
                <div className='Description' ><p>{item.title}</p></div>
                <div className='bottoms' onClick={() => {
                    dispatch(Buy(item));
                    console.log(ActiviesArr)
                  
                  
                  }}><p>Add to cart</p></div>
                
              </div>
            ))
    }
          
          <div className="MoreBtm" onClick={() => {
            dispatch(incCart())

    


          }

          }>
            More
          </div>
         

          
        </div>
        <div className='sider'>

        </div>
        
      </div>
      <div className=' fixedclass'>

       

        <a href='https://github.com/MahmoudYazid'><BsGithub className='BsGithub'></BsGithub></a>
        <a href='https://www.linkedin.com/in/mahmoud-abuelyazid-2a7211211/'><BsLinkedin className='BsGithub'></BsLinkedin></a>
        
        
        <a href='https://www.facebook.com/Dr.MahmoudYazid/'><BsFacebook className='BsGithub'></BsFacebook></a>
        
    
        <a className='MyCv' href={Pdf}  >My Cv</a>

      </div>
    </div>
  )
}
