import React, { useEffect } from 'react'
import './cart.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddotherObj, Buy, DelObj } from '../store/store'


export default function Cart() {
  const nav = useNavigate()
  const activityState= useSelector((state) => state.state.buyActivities)
  const dispatch=useDispatch()
 
 
  let uniqueItems =()=>{
    var UniqueItem=[]
    activityState.map((item)=>{
      if (UniqueItem.filter(filteritem=> filteritem.id==item.id)==0){
        UniqueItem.push(item)
      }
    })
    return UniqueItem
    


  }

  var UniqueArr=  uniqueItems()

  const dublicatiodetection = (arry, id_searched) => {

      return arry.filter((item) => item.id == id_searched).length
  }

  
  return (
    <div className='CartMain'>
      <div className='MiddleScreen'>
          <div className='upperPart'>
          <div className='BackBtm' onClick={()=>nav('/')}>  Back </div>
          </div>
        <div className='LowerPart'>
          {
            UniqueArr.map((item)=>(
              <div className='CardInCartPage'>
                <div className='IdentfyName'>{item.title}</div>
                <div className='DetailsOfProduct'>
                  <p>Quantity : {dublicatiodetection(activityState, item.id)}</p>
                  <p>Item Price : {item.price }</p>
                  <p>total price  : {item.price * dublicatiodetection(activityState, item.id)}</p>
                </div>
                <div className='IncDecBtms'>
                  <div onClick={()=>{
                    dispatch(Buy(item))

                  }}><p>+</p></div>
                  <div onClick={() => {
                    dispatch(DelObj(item))
                    console.log(activityState)
                  }}><p>-</p></div>
                </div>

              </div>
            ))
          }






        </div>
        
      </div>
    </div>
  )
}
