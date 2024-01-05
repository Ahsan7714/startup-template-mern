import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import "./Locations.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllCommingSoonFranchise, searchLocation } from '../../store/reducers/userReducer'
import Loader from '../../Components/Loader/Loader'
import { Link } from 'react-router-dom'

const Locations = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedLocation, setSelectedLocation] = useState(null) // State to store the selected location
    const dispatch = useDispatch()
    const { locations, loading, commingSoonFranchise } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(searchLocation(searchQuery))
    }, [dispatch, searchQuery])

    useEffect(() => {
        dispatch(getAllCommingSoonFranchise())
    }, [dispatch])

    const handleLocationClick = (location) => {
        setSelectedLocation(location)
    }

    return (
        <div className='locations_page'>

            <div className="locations_map_container">
                <div className="search_locations">
                    <div className="header_locations">
                        <div className="search_input_location">
                            <div className='search_input_location_container'>
                                <FaSearch />
                                <input type="text" placeholder='Find a store' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                            </div>
                        </div>
                        <span>
                            Try searching for a location or zooming in to see results
                        </span>
                    </div>
                    <div className="available_locations_franchise">
                        {
                            loading ? <Loader /> :
                                locations?.map((location, index) => {
                                    return (
                                        <div className={`location_details_card ${selectedLocation === location ? 'location_details_card_active' : ''}`} key={index} onClick={() => handleLocationClick(location)}>
                                            <span className="franchise_name">
                                                <h3>{location?.name}</h3>
                                            </span>
                                            <span className='franchise_address'>
                                                {location?.address}
                                            </span>
                                            <span className='franchise_time'>
                                                Open till {location?.closingTime}
                                                {
                                                    location?.closingTime?.split(':')[0] > 12 ? ' pm' : ' am'
                                                }
                                            </span>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
                <div className='show_details_about_condition'>
                    {
                        selectedLocation ?
                            <div className="franchise_details bg-[#87a972]">
                                <img src={selectedLocation?.image?selectedLocation.image:"./images/demo_picture.png"} alt="" />
                                <h2>{selectedLocation?.name}</h2>
                                <p>{selectedLocation?.address}</p>
                                <Link to={selectedLocation.thirdPartyLink} className='bg-white rounded-full h-[80px] w-[200px] font-extrabold text-xl flex align-middle items-center flex-col justify-center font-[Garet-bold]'>Order Online</Link>
                            </div> :
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
                        commingSoonFranchise?.map((franchise, index) => {
                            return (
                                <div className="comming_soon_franchise_card" key={index} >
                                    <h3>{franchise.name}</h3>
                                    <p>{franchise.address}</p>
                                    <span>{franchise.status}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Locations
