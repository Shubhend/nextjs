"use client"
import React, { useState, useEffect, Suspense } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>   <h1>Users List</h1>
  <ul>
    {data.map((user) => (
      <li key={user.id}>
        {user.name} ({user.email})
      </li>
    ))}
  </ul></div>;
}

function HomePage() {
  return (
    <div>
      <h1>Next.js Suspense Example</h1>
      <div className={"row col-sm-12 br-2"}>

      <div className={" col-sm-4"}>   first box   </div>

      <div className={" col-sm-6"}> 
      <Suspense fallback={<div>Loading...</div>}>
        <DataFetchingComponent />
      </Suspense>
      </div>

      <div className={"col-sm-2"}>  last box </div>
      </div>
      
    </div>
  );
}



export default HomePage;
