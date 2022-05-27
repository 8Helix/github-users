import { useState, useEffect } from 'react';
import Card from '../components/card/Card';
import { getUsers } from '../http/get';
import { v4 } from 'uuid';

function Dashboard() {
  const arr = [{}, {}, {}, {}, {}, {}, {}, {}];
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    setUsers((prev) => [
      ...prev,
      ...arr.map((item) => {
        return { ...item, pageId: page, loading: true };
      }),
    ]);
    getUsers(page)
      .then((data) => {
        setUsers((prev) => {
          const withoutExtra = prev.filter((item) => item.loading !== true);
          return [
            ...withoutExtra,
            ...data.items.map((item) => {
              return { ...item, pageId: page, loading: false };
            }),
          ];
        });
      })
      .catch((err) => {
        console.log(err.messages);
        setError(err.messages);
      });
  }, [page]);

  return (
    <main className="container">
      {error ? (
        <h2 style={{ color: 'white' }}>{error}</h2>
      ) : (
        Boolean(users.length) && (
          <>
            <div className="dashboard">
              {users.map((user) => (
                <Card key={v4()} user={user} />
              ))}
            </div>
            <div className="button">
              <button
                className="loadButton"
                onClick={() => setPage((prev) => prev + 1)}
              >
                load more
              </button>
            </div>
          </>
        )
      )}
    </main>
  );
}

export default Dashboard;
