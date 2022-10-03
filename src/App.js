import {Route, Routes, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import Categories from "./components/Categories";
import Questions from "./components/Questions";
import History from "./components/History";

function App() {
    let location = useLocation();
    return (
        <TransitionGroup component={null} className="transition-group">
            <CSSTransition key={location.pathname} timeout={{ enter: 300, exit: 300 }} classNames="fade">
                <Routes>
                    <Route path='/' element={<Categories/>}/>
                    <Route path='/category/:id' element={<Questions/>}/>
                    <Route path='/history' element={<History/>}/>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default App;
