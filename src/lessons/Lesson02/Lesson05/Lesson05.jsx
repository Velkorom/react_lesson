import{ v4 } from "uuid";

import "./styles.css";
import { animalsData} from "./data";
import AnimalCard from "../../components/AnimalCard";

function Lesson05() {
    //ьетод мап возвращает новый массив на основе массива для которого мы
    //вызывали метод с таким же количестврм элементом как в исходном массиве
    //важно в каллбэк функции которую мы передаем в мап должен быть возврат
    //в результате в переменной анималКардс будет хранится массив элементов JSX
   const animalsCards= animalsData.map((animal, index, array) => {
    return(
        <div className="card-wrapper" key={v4()}>
            <div>{index + 1}</div>
        <AnimalCard
       // key= {item.id}
      // key={v4()}
        animalName={item.name}
        animalSpecies={item.species}
        animalImg={item.image}/>
</div>
    );
   });

   console.log(animalCards);

    return (
       <div className="lesson-wrapper">
          {/*   <AnimalCard
            animalName={animalData[0].name}
            animalSpecies={animalData[0].species}
            animalImg={animalData[0].image}
            />*/}
            {animalCards}
        </div>
    )
}

export default Lesson05;