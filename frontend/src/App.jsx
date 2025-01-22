import React, { useState, useEffect } from 'react';
import { MousePointer, Gift, Star, Crown } from 'lucide-react';
import { backendURL } from './utils/backendUrl';
function App() {
  const [count, setCount] = useState(0);
  const [prizesWon, setPrizesWon] = useState(0);
  const [message, setMessage] = useState('');
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendURL}/api/user`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCount(data.counter);
        setPrizesWon(data.prizesWon);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 100);

    try {
      const response = await fetch(`${backendURL}/api/click`, { method: 'POST' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const oldCount = count;
      setCount(data.counter);
      setPrizesWon(data.prizesWon);


      if (data.counter - oldCount === 10) {
        setMessage('🌟 Lucky! You got +10 points!');
        setTimeout(() => setMessage(''), 2000);
      } else if (data.counter - oldCount === 1) {
        setMessage('');
      }
      if (data.prizesWon > prizesWon) {
        setMessage('🎉 Congratulations! You won a prize!');
        setTimeout(() => setMessage(''), 2000);
      }
    } catch (error) {
      console.error('Error clicking:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-indigo-800 flex items-center justify-center gap-2">
            <MousePointer className="h-8 w-8" />
            Click & Win
          </h1>

          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-sm text-gray-600">Points</p>
              <p className="text-3xl font-bold text-indigo-600 flex items-center justify-center">
                <Star className="h-6 w-6 mr-1" />
                {count}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Prizes</p>
              <p className="text-3xl font-bold text-purple-600 flex items-center justify-center">
                <Gift className="h-6 w-6 mr-1" />
                {prizesWon}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleClick}
          className={`w-full h-32 bg-gradient-to-br from-indigo-500 to-purple-600 
            hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl 
            shadow-lg transition-all duration-100 flex items-center justify-center
            ${isClicking ? 'scale-95' : 'scale-100'}`}
        >
          <div className="text-center">
            <MousePointer className={`h-16 w-16 mb-2 mx-auto transition-transform ${isClicking ? 'scale-90' : 'scale-100'}`} />
            <span className="text-lg font-semibold">Click Me!</span>
          </div>
        </button>

        {message && (
          <div className="animate-bounce text-center py-3 px-4 bg-indigo-100 rounded-lg">
            <p className="text-indigo-800 font-medium text-lg">{message}</p>
          </div>
        )}

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Every click gives you 1 point with a chance for bonus rewards!
          </p>
          <p className="text-sm text-gray-600 mt-1">
            50% chance for +10 points • 25% chance to win a prize
          </p>
        </div>


      </div>
    </div>
  );
}

export default App;