import React from 'react'

const Navbar = () => {
      const [darkMode, setDarkMode] = useState(false);
    return (
        <div>
            <nav>
                <h1 className=''>AI PDF ASSISTANT READER</h1>
                <div className={darkMode ? 'dark' : 'light'}>
                    <button className='mt-20 px-10 py-20 cursor-pointer bg-green-700 text-gray-600' onClick={() => setDarkMode(!darkMode)}>
                        Toggle Dark Mode
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar