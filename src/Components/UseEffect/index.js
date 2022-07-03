import { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './style.module.scss';

import UserCard from '../UserCard';

const List = () => {
  const [users, setusers] = useState([]);
  const [isAllowFetch, setisAllowFetch] = useState(true);
  const [isPending, setisPending] = useState(false);
  const [activeUser, setactiveUser] = useState(null);

  const getUsers = async () => {
    try {
      if (isAllowFetch) {
        setisPending(true);
        const response = await axios.get("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
        setisPending(false);
        if (response.data.length !== 0) {
          setusers([...response.data]);
        }
        return;
      }
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
      setisPending(false);
      setisAllowFetch(false);
    }
  };

  useEffect(() => {
    getUsers();
    return () => {
      setisAllowFetch(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.container}>
      {isPending && <span>load...</span>}
      {!isPending && users.length !== 0 && (
        <div className={classes.usersContainer}>
          {users.map((element, index) => (
            <div
              key={index}
              className={classes.userList}
              onClick={() => setactiveUser(element.id)}
            >
              {element.name}
            </div>
          ))}
        </div>
      )}
      {activeUser !== null && <UserCard userId={activeUser} />}
    </div>
  );
};

export default List;