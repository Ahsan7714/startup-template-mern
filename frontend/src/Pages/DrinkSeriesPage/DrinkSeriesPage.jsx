import { Link } from "react-router-dom"
import "./DrinkSeriesPage.css"
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllDrinksOfAdmin } from "../../store/reducers/userReducer"
const DrinkSeriesPage = () => {
    const {seriesId}=useParams()

const dispatch=useDispatch()
const {allAdminDrinks,allAdminSeries}=useSelector(state=>state.user)


useEffect(() => {
    dispatch(getAllDrinksOfAdmin(seriesId))
}, [dispatch,seriesId])
   
    //  find the drink nmame from the url
     const {drink}=useParams()
     const selectedDrink=allAdminSeries.find((d)=>d._id==seriesId)
console.log(selectedDrink)
  return (
    <div className="menu_page_container mt-28 flex items-start">
        <div className="drinks_options_mobile ">
        <Link to={"/menu"}><h1>Series</h1></Link>
    <ul>

        {
            allAdminSeries?.map((drink)=>{
            return(
                <>

                <li className={`drink ${selectedDrink?._id==drink._id?"selected_drink":""}`}  >
                  <Link to={`/menu/${drink._id}`} >  <h3>{drink.name}</h3></Link>
                </li>
                </>
            )
        })
        }
    </ul>
    </div>
    <div className="drinks_options mt-14">
        <Link to={"/menu"}><h1>Drinks</h1></Link>
    <ul>

        {
            allAdminSeries.map((drink)=>{
            return(
                <>

                <li className={`drink ${selectedDrink?._id==drink._id?"selected_drink":""}`}  >
                  <Link  to={`/menu/${drink._id}`} >  <h3>{drink.name}</h3></Link>
                </li>
                </>
            )
        })
        }
    </ul>
    </div>
    <div className="drinks_card_container">
    <h1 className="uppercase tracking-wide " style={{wordSpacing:"3.5px"}}>{selectedDrink && `${selectedDrink.name}  SERIES`}</h1>
        <div className="inner_drinks_card_container ">
        {
            allAdminDrinks.length<1 ? <h1 className="text-center mx-auto w-fit align-middle pt-9">No Drinks Available</h1> :
            allAdminDrinks &&  allAdminDrinks?.map((drink)=>{
                return(
                    <>
                    <div  className="drink_card">

                        <div className="drink_card_image">
                            <img src={`${drink?.image}`} alt={`./images/${drink?.image}.png`} />
                        </div>
                        <div className="drink_card_title">
                            <h3>{drink.name}</h3>
                        </div>
                    </div>
                    </>
                )
            })
         

        }
        </div>
    </div>

    </div>
  )
}

export default DrinkSeriesPage