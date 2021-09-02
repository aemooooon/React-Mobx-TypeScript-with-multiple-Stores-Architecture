import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from 'antd';
import { UserProp } from '../stores/user';
import { useUserStore } from '../stores/hook';

const { Meta } = Card;

const UserList = () => {

  const userStore = useUserStore();

  useEffect(() => {
    userStore.loadUsers();
    console.log('inside useEffect of Userlist');
  }, [])

  return (
    <div className="container">
      {
        userStore.users.map((user: UserProp) => (
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
  )
}

export default observer(UserList)
