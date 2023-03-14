import { useState } from 'react'
import Table from './components/Table'
import getPeople from './utils/getPeople'
import SearchBar from './components/SearchBar';
import React from 'react'


const users = getPeople();

function App() {

const [dataUsers,setDataUsers]=useState(users)

const handleSearch = (event)=>{
    const regExpFilter=new RegExp(event.target.value,'gi')
    
    const usersFound=users.filter(elem=>{
          const {firstName,lastName,email,amount}=elem
         return regExpFilter.test(''.concat(firstName,' ',lastName,' ',email,' ',amount))
    })
    setDataUsers(usersFound)
                          }

  return (
    <>
    <SearchBar onSearch={handleSearch}  numResults={dataUsers.length}/>
    <Table>
      {dataUsers.map((user,i)=>{
        const isEven = i%2===0
        return (<div className='grid' key={i}>
            <p className={isEven ? 'even':'odd'}>
              {user.firstName}
            </p>
           <p className={isEven ? 'even':'odd'}>
              {user.lastName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.email}
            </p>
            <p className={isEven ? 'even':'odd'}>
              $ {user.amount} MXN
            </p>      
          </div>)
      })}
    </Table>
    </> )
}
export default App