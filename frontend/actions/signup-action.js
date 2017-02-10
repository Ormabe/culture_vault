import axios from 'axios'

export const createUserForm = (user) =>  ({
  type: 'CREATE_USER',
  user
})
