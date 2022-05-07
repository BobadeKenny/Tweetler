import prisma from '../lib/prisma';

export const getStaticProps = async () => {
  const users = await prisma.user.findMany();
  return { props: { users }};
}
const createUser = async () => {
  await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'janed@mail.com',
      username: 'janierocks'
    }
  })
}

export default function Homepage({users})
{
  console.log(users)
  return (
    <div>
      {users}
      <button onClick={createUser}>create</button>
    </div>
  )
}