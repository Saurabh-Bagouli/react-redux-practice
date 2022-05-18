import React, { useState } from 'react'
export default function DragnDrop() {
    const groups = ["group1", "group2"];
    const initialItems =[
        {
          id: 1,
          title: 'Todo Parent 1',
          child_node: true,
          linked_todo: null,
        },
        {
          id: 2,
          title: 'Todo Child 1',
          child_node: false,
          linked_todo: 1,
        },
        {
          id: 3,
          title: 'Todo Chil 2',
          child_node: false,
          linked_todo: 1,
        },
        {
          id: 4,
          title: 'Todo Parent 2',
          child_node: false,
          linked_todo: null,
        },
        {
          id: 6,
          title: 'Todo Parent 3',
          child_node: false,
          linked_todo: null,
        },
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
