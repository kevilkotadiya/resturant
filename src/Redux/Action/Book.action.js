import {BOOKORDER, DELETEORDER, EDITORDER} from '../Constant'

export const BookOrder = (data)=>{
    return {
        type : BOOKORDER,
        payload : data
    }
}

export const Deleteorder = (id)=>{
    return{
        type : DELETEORDER,
        payload : id
    }
}

export const Editorder = (Editdata)=>{
    return{
        type : EDITORDER,
        payload : Editdata
    }
}


