import React, { useEffect, useState } from 'react';
import UsersList from './Components/UsersList';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xhwgrmvomynlacfwjfvl.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY; // Use env variable
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('users').select('*');
        if (error) {
          console.error('Supabase Error:', error);
          setError(error.message);
        } else {
          console.log('Fetched users:', data);
          setUsers(data);
        }
      } catch (err) {
        console.error('Fetch Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center font-bold mb-4">Supabase User Preview</h1>
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4">Loading users...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>Error: {error}</p>
            <p className="mt-2">Please check your Supabase configuration and database setup.</p>
          </div>
        ) : (
          <UsersList users={users} />
        )}
      </div>
    </div>
  );
}

export default App;
