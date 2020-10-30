import React, { useState } from 'react'; 
import LoggedInHeader from '../../Components/LoggedInHeader/LoggedInHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './AddStore.scss';

const AddStore = (props) => { 

  const formSumitted = (e) => { 
    e.preventDefault();
  }

  const inputChangeHandler = (e) => { 
    let elemId = e.target.id;

    switch(elemId) { 
      case 'storeName': 
        setStoreName(e.target.value);
        break;
      case 'attendantName':
        setAttendant({...attendant, name: e.target.value});
        break;
      case 'attendantPin':
        setAttendant({...attendant, pin: e.target.value});
        break;
    }
  }

  let [storeName, setStoreName] = useState('');
  let [attendant, setAttendant] = useState({ 
    name: '',
    pin: 0,
  })
  return ( 
    <div id='AddStorePage'> 
      <LoggedInHeader 
       signOut={props.signOut}
       userImg= {props.userImg}
      />

      <div className="addStoreBody">
        <Sidebar />

        <div className="addStoreMain">
          <div className="heading">
            <h1>Add a new store</h1>
          </div>
            <form 
              onSubmit={formSumitted}
            >
              <div id='storeData'> 
                <label htmlFor='storeName'> 
                  Store Name
                </label>
                <input 
                  id='storeName'
                  type="text"
                  onChange={inputChangeHandler}
                  placeholder='Pota'
                />
              </div>

              <div className="attendantsBox">
                <div id='attendant'>
                  <label htmlFor='attendantName'> 
                    attendant's name
                  </label>
                  <input 
                    id='attendantName'
                    type="text"
                    onChange={inputChangeHandler}
                    placeholder='Jim'
                  />
                </div>

                <div id='attendant'>
                  <label htmlFor='attendantPin'> 
                    attendant's secret pin
                  </label>
                  <input 
                    id='attendantPin'
                    type="number"
                    onChange={inputChangeHandler}
                    placeholder='2938983'
                  />
                </div>
              </div>

              <button
                onClick={formSumitted}
              >
                create store
              </button>
            </form>
        </div>
      </div>
    </div> 
  )
}

export default AddStore;