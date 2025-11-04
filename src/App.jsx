import Lesson02 from "./lessons/Lesson02/Lesson02";
// Импортируем компонент Button для его дальнейшего использования
// import Button from "./components/Button/Button";
import Lesson05 from "./lessons/Lesson02/Lesson05/Lesson05";
//импорт домашних работ
//import 

function App() {
  return (
    <>
      {/* Вызываем компонент Button для того, чтобы он вернул 
      JSX и наша кнопка отобразилась на странице*/}
      {/* <div className="button-container">
        <Button />
      </div> */}
      <Lesson05 />
    </>
  );
}

export default App;