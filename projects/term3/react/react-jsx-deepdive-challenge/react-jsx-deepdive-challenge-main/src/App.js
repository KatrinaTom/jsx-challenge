import React from 'react'
import BoldParagraph from './BoldParagraph'
import LinkTo from './LinkTo'
// import SectionHeading from './SectionHeading'
import FoodItem from './FoodItem'
import ListItems from './ListItems'
import Section from './Section'



const App = () => {
    return (
        <>
            <header id="top">
                <h1>Welcome To Sandras Profile Page</h1>
                <nav>
                    <ul>
                        <ListItems items = {[
                            <LinkTo href="#about-me" text={"About Me"} />,
                            <LinkTo href="#fav-foods" text={"Favourite Foods"} />,
                            <LinkTo href="#contact" text={"Contact Details"} />
                        ]} ></ListItems>
                    </ul>
                </nav>
            </header>

            <Section 
                id="about-me" 
                heading="This is Me!" 
                >
                <>
                <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="profilePic"/>
                <article>
                    <ol>
                        <ListItems items= {[
                            <BoldParagraph firstWord={"Pop"} theRest={"culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist."}> </BoldParagraph>,
                            <BoldParagraph firstWord={"Friendly"} theRest={"web maven. Bacon lover. General internet specialist. Incurable travel scholar."}> </BoldParagraph>,
                               <BoldParagraph firstWord={"Subtly"} theRest={"charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar."}> </BoldParagraph>,
                            <BoldParagraph firstWord={"Unable"} theRest={"to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist."}> </BoldParagraph>
                        ]} ></ListItems>
                    </ol>
                </article>
                </>
            </Section>

            <Section 
                id="fav-foods"
                heading="My Fave Foods"
                >
                <>
                
                    <FoodItem name={"Pizza"} src={"pizza.jpg"} time={"All the time"} place={"Queen Margharitas"}> </FoodItem>
                    <FoodItem name={"Quesadillas"} src={"quesadilla.jpg"} time={"Afternoon Siesta"} place={"Mejico"}></FoodItem>
                    <FoodItem name={"Icecream Pancakes"} src={"icecream_pancakes.jpg"} time={"Brekky"} place={"Pancakes on the Rocks"}></FoodItem>
                    <FoodItem name={"Loaded Fries"} src={"loaded_fries.jpg"} time={"During the game"} place={"My House"}></FoodItem>
                 </>
            </Section>

            <Section 
                id="contact"
                heading="Get In Touch!"
                >
                <>
                    <BoldParagraph firstWord={"Phone:"} theRest={<LinkTo external href="tel:12345678" text={"+12345678"}></LinkTo>}> </BoldParagraph>
                    <BoldParagraph firstWord={"Email:"} theRest={<LinkTo external href="mailto:test@test.com" text={"thatsme@test.com"}></LinkTo>}> </BoldParagraph>
                    <BoldParagraph firstWord={"Twitter:"} theRest={<LinkTo external href="#twitter" text={"#superfun"}></LinkTo>}> </BoldParagraph>
                </>
            </Section>
            <footer>
            <h5>Thanks for visiting my profile. Hope to here from you soon!</h5>
            <p>Practice Challenge Completed 7 Dec 2022 - Katrina Tomaszczyk</p>
        </footer>
        </>
    )
}

export default App

export {
    // LinkTo,
    // SectionHeading,
    // BoldParagraph,
    // FoodItem,
    // ListItems,
    // Section
}
