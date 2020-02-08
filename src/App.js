import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route }  from 'react-router-dom';
import Header from './components/Header/index';
import Main from './components/Main/index';
import UserDetails from './components/UserDetails/index';
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
      const fetchUsers = await axios.get('/input-frontend-apps.json');
      setLoading(true);
      setUsers(fetchUsers.data.results);
      setFilteredUsers(fetchUsers.data.results);
      setLoading(false);
    })()
  }, []);

  return (
    <div className="App">
      <Header updateSearch={updateSearch} />
      <Switch>
        <Route exact path='/' render={() => <Main filteredUsers={filteredUsers} />} />
        <Route path="/users/:id" component={UserDetails}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
