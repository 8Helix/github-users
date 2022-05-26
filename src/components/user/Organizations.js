import { useEffect, useState } from 'react';
import { getUserData } from '../../http/get';
import Organization from './Organization';

function Organizations({ user }) {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    getUserData(user.organizations_url).then((data) => {
      setOrganizations(data.data);
    });
  });

  return (
    <div className="organizations">
      {organizations.map((item, i) => {
        if (i < 3) {
          return <Organization item={item} key={item.id} />;
        }
      })}
    </div>
  );
}

export default Organizations;
