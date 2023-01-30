import React, {useState} from 'react';
import './App.css';
import {Rating, ratingValueType} from './Components/Rating/Rating';
import UnControlledAccordion from './Components/Accordion/UnControlledAccordion';
import {UnControlledRating} from './Components/Rating/UnControlledRating';
import Accordion from './Components/Accordion/Accordion';
import {UncontrolledOnnOff} from './Components/OnnOff/UncontrolledOnnOff';
import {ControlledOnnOff} from './Components/OnnOff/ControlledOnnOff';
import {Clock} from './Components/Clock/Clock';


type PageTitlePropsType = {
    title: string;
}

function App() {
    const [ratingValue, setRatingValue] = useState<ratingValueType>(3);
    const [titleValue, setTitleValue] = useState<string>('ControlledAccordion');
    const [accordionIsCollapsed, setAccordionIsCollapsed] = useState<boolean>(true);
    const [IsButtonControlled, setIsButtonControlled] = useState<boolean>(false);

    return (
        <div className="App">
            {/*<Accordion titleValue={'Accordion-title # 1'} collapsed={true}/>*/}
            {/*<Accordion titleValue={titleValue} collapsed={accordionIsCollapsed} callBack={()=>setAccordionIsCollapsed(!accordionIsCollapsed)}/>*/}
            {/*<UnControlledAccordion titleValue={'Accordion-title # 2'}/>*/}

            {/*<UnControlledRating value={0}/>*/}


            {/*<Rating ratingValue={ratingValue} callback = {setRatingValue}/>*/}
            {/*<UnControlledRating value={5}/>*/}
            {/*/!*<Rating value={1}/>*!/*/}
            {/*/!*<Rating value={2}/>*!/*/}
            {/*/!*<Rating value={3}/>*!/*/}
            {/*/!*<Rating value={4}/>*!/*/}
            {/*/!*<Rating value={5}/>*!/*/}

            {/*<UncontrolledOnnOff indicator={true}/>*/}
            {/*<ControlledOnnOffMemo indicator={IsButtonControlled} callBack={setIsButtonControlled}/>*/}
            {/*<UncontrolledOnnOff indicator={false}/>*/}
            {/*<UncontrolledOnnOff indicator={false}/>*/}

            <Clock/>

        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    );
}

const ControlledOnnOffMemo = React.memo(ControlledOnnOff);   //For every component

export default App;
