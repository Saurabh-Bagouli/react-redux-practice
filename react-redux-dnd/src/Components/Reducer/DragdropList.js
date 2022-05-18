const itemlist={
    list:[],
    Droplist:[]
}

export const DrabdropList = (state=itemlist, action) => {
    switch(action.type) {
        case "additem":
            const { data } = action.payload
            return{
                ...state,
                list:[...state.list, data],
            }
        default: return state

        case "dragListfirst" :
            const { e,index,item } = action.payload
            console.log(item)
            localStorage.setItem("item",item)
            state.list.splice(index,1)
            return{
                ...state
            }
        case "dropListsecond" :
            const {ev} = action.payload
            const listitems = localStorage.getItem("item")
            return{
                ...state,
                Droplist:[...state.Droplist,listitems]
            }  
        case "dragListsecond" :
            const { event,indexSecond,itemSecond } = action.payload
            localStorage.setItem("item",itemSecond)
            state.Droplist.splice(indexSecond,1)
            return{
                ...state
            }  
        case "dropListfirst" :
            const { firstEvent } = action.payload
            const listitemsFirst = localStorage.getItem("item")
            return{
                ...state,
                list:[...state.list,listitemsFirst]
            }

    }

}