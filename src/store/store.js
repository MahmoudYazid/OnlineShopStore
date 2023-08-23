import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState ={
    CartNumber:2,
    Data:[],
    buyActivities:[],


}
const Generalslicer=createSlice({
    name: 'GeneralState',
    initialState,
    reducers:{
        incCart: (state) => {
            state.CartNumber = state.CartNumber +2
            if(state.CartNumber>20){
                state.CartNumber = 2
            } 
        } ,
       
        UpdateData: (state,data) => { 
            
            state.Data = data.payload },
        Buy: (state, _data) => {

            state.buyActivities.push(_data.payload)
          
        
        },
        DelObj: (state, _data) => {
         
           for(let itr=0 ; itr<state.buyActivities.length ; itr++){
               
               if (state.buyActivities[itr].id == _data.payload.id){
                console.log(_data.payload.id)
                state.buyActivities.splice(itr, 1)
                break;


            }
        }
           }


        ,
       
    }
})

export const { incCart, UpdateData, Buy, DelObj } = Generalslicer.actions

export const store = configureStore({
    reducer:{
        state: Generalslicer.reducer
    }
    
})
