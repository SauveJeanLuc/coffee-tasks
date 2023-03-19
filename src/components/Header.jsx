import coffeelogo from '../assets/coffee-to-go.svg';

export default function Header() {
  return (
    <div className='flex justify-center my-4 dark:bg-gray-800'>
      <img src={coffeelogo} className='w-10 mx-3' alt='logo' />
      <span className='text-coffeeDark text-3xl font-extrabold dark:text-orange-400'>
        Coffee Tasks
      </span>
    </div>
  );
}
