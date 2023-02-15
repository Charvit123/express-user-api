import { v4 as uuid } from "uuid";

type User = {
  id: string;
  email: string;
  password: string;
};

const users: User[] = [];

export function getAllUsers(){
  return users.map(user => {
     return {"id": user.id, "email": user.email}
  });
}

export function getById(id:string){
  const user= users.find(user => user.id===id);
  if(user===undefined || user===null)
    return {error:"user is not there"};
  return {
    id:user.id,
    email:user.email
  };
}


export function saveUser(userData: { email: string; password: string }) {
  const id = uuid();
  users.push({
    id,
    email: userData.email,
    password: userData.password,
  });
  return {
    id,
    email: userData.email,
  };
}

export function deleteById(id:string){
  const user= users.find(user => user.id===id);
  if(user===undefined || user===null)
    return {error:"user is not there"};
  const index=users.indexOf(user);
  users.splice(index,1);

  return { };
}


