
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleClick, removeItem, dropList,removeItem1,dropList1 } from './Action/index';

export default function Newdnd() {

    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.DrabdropList.list)
    const Droplist = useSelector((state) => state.DrabdropList.Droplist)
   
    return (
        <>
            <div className='d-flex'>
                <input type="text" name='itemName' onChange={(e) => setTextInput(e.target.value)} id='insertItem' value={textInput} placeholder="Type a message..." />
                <button onClick={() => dispatch(handleClick(textInput))}  className="btn btn-outline-success btn-sm">
                    Add item
                </button>
            </div>
            <div className='row groups'>
                <div className='col-md-4 first-list-items' onDrop={(e) => dispatch(dropList1(e))} onDragOver={(e) =>e.preventDefault()}>
                    <h1 className='text-center'>First List</h1>
                    {
                        list.map((item, index) => (
                            <li key={index} className='list' draggable onDragStart={(e) => dispatch(removeItem(e,index,item))}>{item}</li>
                        ))
                    }
                </div>
                <div className='offset-1 col-md-4 second-list-items' onDrop={(e) => dispatch(dropList(e))} onDragOver={(e) =>e.preventDefault()}>
                    <h1 className='text-center'>Second list</h1>
                    {
                        Droplist.map((item,index) =>(
                            <li key={index} className='list' draggable onDragStart={(e) => dispatch(removeItem1(e,index,item))} >{item}</li>
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}
