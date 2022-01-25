import React from 'react';
import Loading from '../Loading/Loading';


export default function ResultBar({ isLoading, data, errResponse }) {
  return (
    isLoading ? <Loading /> : (
      <section className='flex flex-col md:items-start md:text-left text-center items-center md:flex-row md:divide-x absolute md:top-44 top-36 z-50 bg-white rounded-md p-5 md:p-8 max-w-screen-lg w-full drop-shadow-2xl content-around'>
        {errResponse ? <div className='text-xl font-bold'>{errResponse}</div> : (
          <>
            <div className='flex-1 h-full pr-2 py-2'>
              <p className='font-bold pb-2 text-xs uppercase text-zinc-500'>IP Address</p>
              <p className='font-bold text-xl'>{data?.ip}</p>
            </div>
            <div className='flex-1 pl-4  py-2 md:px-6 flex flex-col justify-center'>
              <p className='font-bold pb-2 text-xs uppercase text-zinc-500'>Location</p>
              <p className='font-bold text-xl'>{data.location?.city}, {data.location?.region} {data.location?.country}</p>
            </div>
            <div className='flex-1 pl-4 py-2 '>
              <p className='font-bold pb-2 text-xs uppercase text-zinc-500'>Timezone</p>
              <p className='font-bold text-xl'>UTC {data.location?.timezone}</p>
            </div>
            <div className='flex-1 pl-4  py-2'>
              <p className='font-bold pb-2 text-xs uppercase text-zinc-500'>ISP</p>
              <p className='font-bold text-xl'>{data.isp?.slice(0, 11)}{data.isp.length > 11 ? '...' : ''}</p>
            </div>
          </>
        )}
      </section>

    )
  );
}
