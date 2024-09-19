

import { useRouter } from 'next/router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



const Shop = () => {

    const router = useRouter();


    return (
      <div className="w-full h-full">
        <NavBar />
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <h1 className='text-6xl'>Shop is closed now</h1>
          
          <button className='mt-10 text-blue-400' onClick={() => router.push("/")}>Go back to home</button>
        </div>
      </div>
    );

}



export default Shop;
