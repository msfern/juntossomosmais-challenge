import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route }  from 'react-router-dom';
import Header from './components/Header/index';
import Main from './components/Main/index';
import UserDetails from './components/UserDetails/index';
import Footer from './components/Footer/index';
import NotFound from './components/NotFound/index';
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      const fetchUsers = await axios.get('/frontend-challenge.json');
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

  function addRegionPropertyToUser(user) {
    const latitude = user.location.coordinates.latitude;
    const longitude = user.location.coordinates.longitude;
    const special = {
      minLat: {
        lat1: -46.361899,
        lat2: -52.997614
      },
      maxLat: {
        lat1: -34.276938,
        lat2: -44.428305
      },
      minLon: {
        lon1: -15.411580,
        lon2: -23.966413
      },
      maxLon: {
        lon1: -2.196998,
        lon2: -19.766959
      }
    }

    const normal = {
      minLat: -54.777426,
      maxLat: -46.603598,
      minLon: -34.016466,
      maxLon: -26.155681
    }

    if(((latitude >= special.minLat.lat1 && latitude <= special.maxLat.lat1 ) && (longitude >= special.minLon.lon1  && longitude <= special.maxLon.lon1))
      || ((latitude >= special.minLat.lat2 && latitude <= special.maxLat.lat2 ) && (longitude >=special.minLon.lon2 && longitude <= special.maxLon.lon2))) {
      user['region'] = 0;
    } else if(((latitude >= normal.minLat && latitude <= normal.maxLat)) && ((longitude >= normal.minLon && longitude <= normal.maxLon))) {
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
    <div className={`App ${darkMode ? 'dark-mode' : ''}`} >
      <Header updateSearch={updateSearch} radioIsBeingUsed={radioIsBeingUsed} darkMode={darkMode} setDarkMode={setDarkMode} />
      <Switch>
        <Route exact path='/' render={() => <Main filteredUsers={filteredUsers} currentUsers={currentUsers} filterUsers={filterUsers} clearFilter={clearFilter} loading={loading} pageNumbers={pageNumbers} currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path="/users/:id" component={UserDetails}/>
        <Route path="/users/:id" component={UserDetails}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
