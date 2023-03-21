import { ChangeEvent, FC, useEffect, useState } from "react";

import "./App.css";
import { getData } from "./utils/data.utils";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App: FC = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={searchChangeHandler}
        placeholder="Search MOSTERS"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       )
//       .catch((error) => console.log(error.message));
//   }

//   searchChangeHandler = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { searchChangeHandler } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={searchChangeHandler}
//           placeholder="Search MOSTERS"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
