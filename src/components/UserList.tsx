import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from 'antd';
import { User } from '../stores/user';
import { useUserStore } from '../stores/hook';

const { Meta } = Card;

const UserList = () => {

  const userStore = useUserStore();

  useEffect(() => {
    userStore.loadUsers();
  }, [])

  const addUser = (e: any) => {
    e.preventDefault();

    let user: User = {
      id: Math.random(),
      email: 'abc@gmail.com',
      username: 'hua',
      password: 'password',
      phone: '0234598767',
      name: {
        firstname: 'hua',
        lastname: 'wang'
      },
      address: {
        geolocation: {
          lat: '123',
          long: '34',
        },
        city: 'Dunedin',
        street: 'Level Street',
        zipcode: '445000',
        number: 50,
      }
    }

    userStore.addUser(user);

  }

  return (
    <>
      <button onClick={addUser}>Add New User</button>
      <div className="container">
        {
          userStore.users.map((user: User) => (
            <div className="card-item" key={user.id}>
              <Card>
                <Meta
                  title={`${user.id} ${user.name.firstname} ${user.name.lastname} ${user.email}`}
                  description={`${user.address.number} ${user.address.street}, ${user.address.city} ${user.address.zipcode}`}
                />
              </Card>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default observer(UserList)
