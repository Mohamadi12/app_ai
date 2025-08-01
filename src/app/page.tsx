import Guest from "@/components/Guest"
import { checkUser } from "@/lib/checkUser"

const Home = async() => {
  const user = await checkUser()
  if(!user){
    return <Guest />
  }
  return (
    <div>Home</div>
  )
}
 
export default Home 