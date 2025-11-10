//import Lesson02 from "./lessons/Lesson02/Lesson02";
//import Homework02 from "./components/Homework02/Homework02"
import Homework04 from "./components/homeworks/Homework04/Homework04";
// Импортируем компонент Button для его дальнейшего использования
// import Button from "./components/Button/Button";

function App() {
  return (
    <>
      {/* Вызываем компонент Button для того, чтобы он вернул 
      JSX и наша кнопка отобразилась на странице*/}
      {/* <div className="button-container">
        <Button />
      </div> */}
     {/* <Lesson02 /> */}
     <Homework04 />
    </>
  );
}

export default App;