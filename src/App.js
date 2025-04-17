import React, { useEffect, useState } from 'react';
import UsersList from './Components/UsersList';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xhwgrmvomynlacfwjfvl.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY; // Use env variable
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (error) {
        console.log('Error:', error);
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">Supabase User Preview</h1>
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default App;
