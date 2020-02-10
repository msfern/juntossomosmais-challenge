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
  const [radioIsBeingUsed, setRadioIsBeingUsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(15);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      const fetchUsers = await axios.get('/input-frontend-apps.json');
      const fetchResponse = fetchUsers.data.results;
      const usersWithRegionProperty = Object.keys(fetchResponse).map(user => addRegionPropertyToUser(fetchResponse[user]));
      setUsers(usersWithRegionProperty);
      setFilteredUsers(usersWithRegionProperty);
      setLoading(false);
    }
    fetchAllUsers();
  }, []);

  useEffect(() => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    setCurrentUsers(currentUsers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filteredUsers, currentPage]);

  useEffect(() => {
    let numbers = [];
    const calculatePageNumber = () => {
      for(let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
        numbers.push(i);
      }
      setPageNumbers(numbers);
    }
    calculatePageNumber();
  }, [filteredUsers, usersPerPage]);

  function changePage(event,page) {
    setCurrentPage(page);
  }

  function addRegionPropertyToUser(user) {
    const latitude = user.location.coordinates.latitude;
    const longitude = user.location.coordinates.longitude;

    if(((latitude >= -46.361899 && latitude <= -34.276938) && (longitude >= -15.411580 && longitude <= -2.196998))
      || ((latitude >= -52.997614 && latitude <= -44.428305) && (longitude >= -23.966413 && longitude <= -19.766959))) {
      user['region'] = 0;
    } else if(((latitude >= -54.777426 && latitude <= -46.603598)) && ((longitude >= -34.016466 && longitude <= -26.155681))) {
      user['region'] = 1;
    } else {
      user['region'] = 2;
    }

    return user;
  }

  function updateSearch(text) {
    const searchResult =  users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(text.toLowerCase());
    })
    if(text === '') {
      setFilteredUsers(users);
    }
    setFilteredUsers(searchResult);
    setCurrentPage(1);
  }

  function filterUsers(radio) {
    setRadioIsBeingUsed(true);
    const radioNumber = parseInt(radio);
    const userList = [...users];
    const usersFromRegion = userList.filter(user => user.region === radioNumber);
    setFilteredUsers(usersFromRegion);
  }

  function clearFilter() {
    setRadioIsBeingUsed(false);
    setFilteredUsers(users);
  }

  return (
    <div className="App">
      <Header updateSearch={updateSearch} radioIsBeingUsed={radioIsBeingUsed} />
      <Switch>
        <Route exact path='/' render={() => <Main filteredUsers={filteredUsers} currentUsers={currentUsers} filterUsers={filterUsers} clearFilter={clearFilter} loading={loading} pageNumbers={pageNumbers} changePage={changePage} currentPage={currentPage} />} />
        <Route path="/users/:id" component={UserDetails}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
