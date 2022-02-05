import React from 'react';
import './App.css';
import T from './components/T';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import StringProps from './components/topics/a_1_basicProps/StringProps';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import BasicPropsTypes from './pages/BasicPropsTypes';
import SagaTest from './pages/sagatest/SagaTest';
import { UserH1tagContainer } from './pages/sagaTest2Container/containers/UserH1tagContainer';

export interface IAppProps {}
const App: React.FC<IAppProps> = (props) => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/bp" element={<BasicPropsTypes />} />
                    <Route path="/sg" element={<SagaTest />} />
                    <Route path="/sc" element={<UserH1tagContainer name={''} />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
