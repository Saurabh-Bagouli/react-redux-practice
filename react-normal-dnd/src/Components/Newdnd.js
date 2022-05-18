
import React, { useState } from 'react'
import { List } from 'reactstrap';

export default function Newdnd() {
    const [textInput, setTextInput] = useState('');
    const [list, setlist] = useState([])
    const [Droplist, setDroplist] = useState([])

    const handleClick = (e) => {
        setlist([...list, textInput])
        document.getElementById('insertItem').value = '';
    }

    const handleChange = (event) => {
        setTextInput(event.target.value);
    }
    
    const removeItem = (e,index,item) => {
        localStorage.setItem("item",item)
        list.splice(index,1)
    }
    const removeItem1 = (e,index,item) => {
        localStorage.setItem("item",item)
        Droplist.splice(index,1)
    }
    const dropList = (e) => {
       const listitems = localStorage.getItem("item")
        setDroplist([...Droplist,listitems])
        // localStorage.clear();
    }
    const dropList1 = (e) => {
        const listitems = localStorage.getItem("item")
         setlist([...list,listitems])
         // setlist([...list,listitems])
     }
    return (
        <>
            <div className='d-flex'>
                <input onChange={handleChange} id='insertItem' placeholder="Type a message..." />
                <button onClick={handleClick} className="btn btn-outline-success btn-sm">
                    Add item
                </button>
            </div>
            <div className='row groups'>
                <div className='col-md-4 first-list-items' onDrop={(e) => dropList1(e)} onDragOver={(e) =>e.preventDefault()}>
                    <h1 className='text-center'>First List</h1>
                    {
                        list.map((item, index) => (
                            <li key={index} className='list' draggable onDragStart={(e) => removeItem(e,index,item)} >{item}</li>
                        ))
                    }
                </div>
                <div className='offset-1 col-md-4 second-list-items' onDrop={(e) => dropList(e)}  onDragOver={(e) =>e.preventDefault()}>
                    <h1 className='text-center'>Second list</h1>
                    {
                        Droplist.map((item,index) =>(
                            <li key={index} className='list' draggable onDragStart={(e) => removeItem1(e,index,item)} >{item}</li>
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}
