import React from 'react'

//components
import MenuCatergory from './MenuCategory';

function MenuListContainer(props) {
    return (
        <>
          <div className='w-full flex flex-col gap-3 cursor-pointer'>
              <MenuCatergory name={props.name} items={props.items} onClickHandler={props.onClickHandler} isActive={props.selected === props.name} />
              </div>  
        </>
    );
}

export default MenuListContainer;
