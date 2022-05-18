import React, { useState } from 'react'
export default function DragnDrop() {
    const groups = ["group1", "group2"];
    const initialItems = [
        { id: 1, group: "group1", value: "drag 1" },
        { id: 2, group: "group1", value: "drag 2" },
        { id: 3, group: "group1", value: "drag 3" },
        { id: 4, group: "group1", value: "drag 4" }
    ];

    const [items, setItems] = useState(initialItems);
    const [dragData, setDragData] = useState({});

    const handleDragStart = (e, id, group) => {
        setDragData({ id: id, initialGroup: group });
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const changeCategory = (itemId, group) => {
        const newItems = [...items];
        newItems[itemId - 1].group = group;
        setItems([...newItems]);
    };
    const handleDrop = (e, group) => {
        const selected = dragData.id;
        changeCategory(selected, group);
    };

    return (
        <>
            <div className="groups">
                {groups.map((group) => (
                    <div onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, group)} key={group}>
                        <h1 className="title">{group}</h1>
                        <div className='group'>
                            {items.filter((item) => item.group === group).map((item) => (
                                    <div className='item' key={item.id} id={item.id} draggable onDragStart={(e) => handleDragStart(e, item.id, group)}>
                                        {item.value}
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
