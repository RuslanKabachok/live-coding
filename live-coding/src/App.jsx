import './App.css'
// import UserList from './UserList/UserList'
// import UseRefExample from './Examples/UseRef'
// import UseCallbackExample from './Examples/UseCallback'
// import UseMemoExample from './Examples/UseMemo'
// import UseReducerExample from './Examples/UseReducer'
// import UseLayoutEffectExample from './Examples/UseLayoutEffect'
// import UseRefExample4 from './UseRefExamples/UseRefExample4'
// import UseMemoExample from './UseMemoExamples/UseMemoExample4'
// import UseCallBack from './UseCallBackExamples/UseCallbackExample2'
// import UseContextExample from './UseContextExamples/UseContextExample1'
import Task from './ReactTraining/Task';

function App() {

  return (
    <>
      {/* <UseContextExample/> */}
      {/* <UseMemoExample/> */}
      {/* <UserList/> */}
      {/* <UseRefExample4/> */}
      {/* <UseRefExample/>
      <UseCallbackExample/>
      <UseReducerExample/>
      <UseLayoutEffectExample/> */}
      <Task title={'My first React.js title'} descr={'Very serious description to my first trainig task'} isCompleted={false}/>
    </>
  )
}

export default App
