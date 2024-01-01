import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import "./Locations.css"
const Locations = () => {
    
    const [isSelected,setIsSelected]=useState(false)
    const locations=[
        {
            name:"R&B Tea McFadden",
            location:{
                lat:-37.8136,
                lng:144.9631,
                address:"Melbourne VIC 3000, Australia"
            },
            time:"open until 8pm"
        },
        {
            name:"R&B Tea McFadden",
            location:{
                lat:-37.8136,
                lng:144.9631,
                address:"Melbourne VIC 3000, Australia"
            },
            time:"open until 8pm"
        },
        {
            name:"R&B Tea McFadden",
            location:{
                lat:-37.8136,
                lng:144.9631,
                address:"Melbourne VIC 3000, Australia"
            },
            time:"open until 8pm"
        },
        {
            name:"R&B Tea McFadden",
            location:{
                lat:-37.8136,
                lng:144.9631,
                address:"Melbourne VIC 3000, Australia"
            },
            time:"open until 8pm"
        },
        {
            name:"R&B Tea McFadden",
            location:{
                lat:-37.8136,
                lng:144.9631,
                address:"Melbourne VIC 3000, Australia"
            },
            time:"open until 8pm"
        },
        {
            name:"R&B Tea McFadden",
            location:{
                lat:-37.8136,
                lng:144.9631,
                address:"Melbourne VIC 3000, Australia"
            },
            time:"open until 8pm"
        }
    ]

    const [commingSoonFranchise,setCommingSoonFranchise]=useState(
        [
            {
name:"R&B Tea McFadden",
address:"177 Ocean Ave, San Francisco, CA 94112, United States",
status:"Coming Soon"
            },
            {
                name:"R&B Tea McFadden",
                address:"177 Ocean Ave, San Francisco, CA 94112, United States",
                status:"Coming Soon"
            },
            {
                name:"R&B Tea McFadden",
                address:"177 Ocean Ave, San Francisco, CA 94112, United States",
                status:"Coming Soon"
            },
            {
                name:"R&B Tea McFadden",
                address:"177 Ocean Ave, San Francisco, CA 94112, United States",
                status:"Coming Soon"
            },
            {
                name:"R&B Tea McFadden",
                address:"177 Ocean Ave, San Francisco, CA 94112, United States",
                status:"Coming Soon"
            },
            {
                name:"R&B Tea McFadden",
                address:"177 Ocean Ave, San Francisco, CA 94112, United States",
                status:"Coming Soon"    
            }
        ]
        )

  return (
    <div className='locations_page'>

    <div className="locations_map_container">
        <div className="search_locations">
<div className="header_locations">
    <div className="search_input_location">
    <div className='search_input_location_container'>

        <FaSearch/>
        <input type="text" placeholder='Find a store' />
    </div>
    </div>
    <span>
    Try searching for a location or zooming in to see results
    </span>
</div>
<div className="available_locations_franchise">
{
    locations.map((location,index)=>{
        return(
            <div  className={`location_details_card ${isSelected ? 'location_details_card_active' : ''}`} key={index} onClick={()=>setIsSelected(true)} >
                <span className="franchise_name">
                    <h3>{location.name}</h3>
                </span>
                <span className='franchise_address'>
                {location.location.address}
                </span>
                <span className='franchise_time'>
                    {location.time}
                </span>
            </div>
        )
    })
}
</div>

        </div>
        <div className='show_details_about_condition'>

        {
            isSelected ? 
            <div className="franchise_details bg-[#87a972]">
            <img src="./images/demo_picture.png" alt="" />
            <h2>R&B Tea Convoy</h2>
            <p>4488 Convoy St, Suite H, San Diego, CA 92111</p>
            <button className='bg-white rounded-full h-[80px] w-[200px] font-extrabold text-xl font-[Garet-bold]'>Order Online</button>

        </div>:
        <div className="default_details_company bg-[#87a972]">
            <img src="./images/details_logo_map.png" alt="" />
            <p>Click on a location to view full details and order online</p>
        </div>
        }
        </div>
        
    </div>

<div className="comming_soon_franchise my-32">
    <h1>Comming Soon</h1>
    <div className="comming_soon_franchise_container">
        {
commingSoonFranchise.map((franchise,index)=>{
    return(
        <div className="comming_soon_franchise_card" key={index} >
            <h3>{franchise.name}</h3>
            <p>{franchise.address}</p>
            <span>{franchise.status}</span>

        </div>
    )
        }
        )
        }
    </div>
</div>


    </div>
  )
}

export default Locations