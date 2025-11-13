import { Virtuoso } from 'react-virtuoso';

import { useState, useEffect } from 'react';
 
function AboutUsUsingVirtuoso() {

  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
 
  const loadMore = async () => {

    if (loading) return;

    setLoading(true);

    try {

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5'

      );

      const data = await response.json();

      setUsers(prev => [...prev, ...data]);

      setPage(prev => prev + 1);

    } catch (error) {

      console.error('Error loading users:', error);

    } finally {

      setLoading(false);

    }

  };
 
  // Load initial users

  useEffect(() => {

    loadMore();

  }, []);
 
  return (
<Virtuoso

      style={{ height: '500px' }}

      data={users}

      endReached={loadMore}

      itemContent={(index, user) => (
<div style={{ 

          padding: '20px', 

          borderBottom: '1px solid #eee',

          backgroundColor: '#fff'

        }}>
<h3>{user.name}</h3>
<p>Email: {user.email}</p>
<p>Phone: {user.phone}</p>
</div>

      )}

      components={{

        Footer: () => loading && (
<div style={{ padding: '20px', textAlign: 'center' }}>

            Loading users...
</div>

        )

      }}

    />

  );

}
 
export default AboutUsUsingVirtuoso;
 