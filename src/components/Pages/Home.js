import React , {Component} from "react";
import Header  from "../Common/Header";
import image from "../assets/img/header-bg.jpg"

//Sections
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";


class Home extends Component {
    render(){
        return(
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Learn More"
                    link="/services"
                    showButton={true}
                    image={image}
                ></Header>
                <Services/>
                <Portfolio/>
            </div>
        )
    }
}
export default Home