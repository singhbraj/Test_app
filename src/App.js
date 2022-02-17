
import './App.css';
// import ClassCounterOne from './components/ClassCounterOne' ;
// import HookCounterOne from './components/HookCounterOne'
// import IntervalClassCounter from './components/IntervalClassCounter'
// import IntervalHookCounter from './components/IntervalHookCounter'
// import ParentComp from './components/PureComponent/ParentComp';
// import RefsDemo from './components/Refs/RefsDemo';
// import InputRef from './components/Refs/InputRef'
// import FRParentInput from './components/Refs/FRParentInput';
import ParentComponent from './components/CallbackHook/ParentComponent';


function App() {
  return (
    <div className="App">
    {/* <ClassCounterOne />
    <HookCounterOne /> */}
    {/* <IntervalClassCounter />
    <IntervalHookCounter /> */}
    {/* <ParentComp /> */}
    {/* <RefsDemo /> */}
    {/* <InputRef /> */}
    {/* <FRParentInput /> */}
    <ParentComponent />
    </div>
  );
}

export default App;
