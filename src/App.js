import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/index';
import FilterSideBar from './components/FilterSideBar/index';
import UserCards from './components/UserCards/index';
import Pagination from './components/Pagination/index';
import Footer from './components/Footer/index';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  function updateSearch(text) {
    const searchResult =  users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(text.toLowerCase());
    })
    if(text === '') {
      setFilteredUsers(users);;
    }
    setFilteredUsers(searchResult);
  }

  useEffect(() => {
    (async () => {
      const fetchUsers = await axios.get('./input-frontend-apps.json');
      setLoading(true);
      setUsers(fetchUsers.data.results);
      setFilteredUsers(fetchUsers.data.results);
      setLoading(false);
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header updateSearch={updateSearch} />
      <main className='wrapper'>
        <FilterSideBar />
        <UserCards filteredUsers={filteredUsers} />
        <Pagination />
      </main>
      <Footer />
    </div>
  );
}

export default App;
