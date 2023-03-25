import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Messages = () => {
	return (
		<>
			<Header />
			<div className='flex h-[calc(100vh_-_3.5rem)]'>
				<div className='flex-2'>
					<SideBar />
				</div>

				{/* MESSAGES WRAPPER */}
				<div className='flex-1 flex p-4'>
					{/* MESSAGES VERTICAL CONTAINER */}
					<div className='bg-gray-400 w-56 flex flex-col items-center text-center gap-5'>
						<h1 className='border-b-2 border-gray-500 w-full text-2xl font-medium p-4'>Messages</h1>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
						<p className='border-b-2 border-gray-500 w-full'>Jhon Lloyd N. Babon</p>
					</div>

					{/* MESSAGES FILTER WRAPPER */}
					<div className='flex-1 bg-gray-500'>
						{/* FILTER CONTAINER */}
						<div className='flex bg-lime-50 justify-around p-4 text-2xl'>
							<h1>Existing Patients</h1>
							<h1>New Patients</h1>
						</div>

						{/* MESSAGES CONTENT */}
						<div className='flex flex-col bg-sky-100 h-max p-4'>
							{/* NAME OF PATIENTS */}
							<h1>Jhon Lloyd</h1>

							{/* ADMIN MESSAGES */}
							<div className='ml-auto'>
								Good Morning, how can I help you today?
							</div>

							{/* PATIENTS MESSAGES */}
							<div>
								Hello, I just want to ask the location of your clinic?
							</div>

							{/* MESSAGES ACTIONS */}
							<div className='mt-auto'>
								<input type="text" placeholder='Send a message...' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


export default Messages;