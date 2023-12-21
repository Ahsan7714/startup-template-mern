import { Link } from "react-router-dom"
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development"
import "./MenuPage.css"
const MenuPage = () => {
    const drinks=[
        {
name:"Puffle Waffle",
image:"puffle waffle"
        },
        {
            name:"Milk Tea",
            image:"milk tea"
        },
        {
            name:"Cheese Cream",
            image:"cheese cream"
        },
        {
            name:"Fresh Fruit Tea",
            image:"fresh fruit tea"
        },
        {
            name:"Stormy",
            image:"stormy"
        },
        {
            name:"Yakult",
            image:"yakult"
        },
        {
            name:"Pure milk",
            image:"pure milk"
        },
        {
            name:"Tea",
            image:"tea"
        },
        {
            name:"Coffee",
            image:"coffee"
        },{
            name:"Blended",
            image:"blended"
        }
    ]
    
    //  find the drink nmame from the url
     const {drink}=useParams()
     console.log(drink)
     const selectedDrink=drinks.find((d)=>d.name===drink)
     console.log(selectedDrink)

  return (
    <div className="menu_page_container mt-28 flex items-start">
    <div className="drinks_options_mobile ">
        <Link to={"/menu"}><h1>Series</h1></Link>
    <ul>

        {
            drinks.map((drink)=>{
            return(
                <>

                <li className={`drink ${selectedDrink?.name==drink.name?"selected_drink":""}`}  >
                  <Link to={`/menu/${drink.name}`} >  <h3>{drink.name}</h3></Link>
                </li>
                </>
            )
        })
        }
    </ul>
    </div>
    <div className="drinks_options mt-14 ">
        <Link to={"/menu"}><h1>Drinks</h1></Link>
    <ul>

        {
            drinks.map((drink)=>{
            return(
                <>

                <li className={`drink ${selectedDrink?.name==drink.name?"selected_drink":""}`}  >
                  <Link to={`/menu/${drink.name}`} >  <h3>{drink.name}</h3></Link>
                </li>
                </>
            )
        })
        }
    </ul>
    </div>
    <div className="drinks_card_container">
        <h1>SERIES</h1>
        <div className="inner_drinks_card_container ">
        {
            drinks.map((drink)=>{
                return(
                    <>
                    <Link to={`/menu/${drink.name}`} className="drink_card">

                        <div className="drink_card_image">
                            <img src={`./images/${drink.image}.png`} alt="" />
                        </div>
                        <div className="drink_card_title">
                            <h3>{drink.name}</h3>
                        </div>
                    </Link>
                    </>
                )
            })
         

        }
        </div>
    </div>

    </div>
  )
}

export default MenuPage