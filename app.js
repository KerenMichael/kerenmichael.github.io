const App = () => (
  <div className='text-center p-10'>
    <img src='profile.jpg' alt='Dr. Keren Michael' className='w-40 h-40 rounded-full mx-auto shadow mb-4' />
    <h1 className='text-3xl font-bold'>Dr. Keren Michael</h1>
    <p className='text-md text-gray-600'>Senior Lecturer | Yezreel Valley College</p>
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
