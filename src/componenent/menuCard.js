import React from 'react'

export const MenuCard = ({menuData}) => {
    // console.log(menuData)
  return (
    <>
    <section className='main-card--cointainer'>
    {
      menuData.map((curelem)=>{
        return(
          <>
            <div className='card-container' key={curelem}>
            <div className='card'>
              <div className='card-body'>
                <span className='card-number card-circle subtle'>{curelem.id}</span>
                <span className='card-author subtle'>{curelem.name}</span>
                <h2 className='card-title'>{curelem.name}</h2>
                <span className='card-description subtle'>{curelem.description}
                </span>
                <div className='card-read'>read</div>
              </div>
              <img src={curelem.image} alt="image" className='card-media'/>
              <span className='card-tag subtle'>order now</span>
            </div>
        
           </div>
           </>

        )

        })
    }

   </section>
    </>
  )
}
export default MenuCard;
