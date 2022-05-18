export const handleClick = (data) => {
    return{
        type:"additem",
        payload:{data}
    }
}
export const removeItem = (e,index,item) => {
    return{
        type: "dragListfirst",
        payload: {e,index,item}
    }
}
export const dropList = (e) => {
    return{
        type: "dropListsecond",
        payload: {e}
    }
}
export const removeItem1 = (e,indexSecond,itemSecond) => {
    return{
        type: "dragListsecond",
        payload: {e,indexSecond,itemSecond}
    }
}
export const dropList1 = (e) => {
    return{
        type: "dropListfirst",
        payload: {e}
    }
}