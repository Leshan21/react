import Student from "./Student/Student";

function App() {
  return(
    <>
        <Student name = "Leshan" age={30} isStudent={true}/>
        <Student name = "Pasindu" age={42} isStudent={false}/>
    </>
  );
}

export default App
