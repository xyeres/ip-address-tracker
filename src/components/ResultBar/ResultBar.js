import React from 'react';
import Loading from '../Loading/Loading';


export default function ResultBar({ isLoading, data, errResponse }) {
  return (
    isLoading ? <Loading /> : (
      <>
        {errResponse ? errResponse : (
          <section className='flex divide-x bg-white rounded-md p-10 flex-row w-2/3 content-around'>
            <div className='flex-1 pr-2'>
              <p className='font-bold pb-2 text-xs uppercase text-zinc-500'>IP Address</p>
              <p className='font-bold text-xl'>{data?.ip}</p>
            </div>
            <div className='flex-1 pl-4'>
              <p className='font-bold pb-2 text-xs uppercase text-zinc-500'>Location</p>
              <p className='font-bold text-xl'>{data.location?.city}, {data.location?.region} {data.location?.country}</p>
            </div>
            <div className='flex-1 pl-4'>
              <p className='font-bold pb-2 text-xs uppercase text-zinc-500'>Timezone</p>
              <p className='font-bold text-xl'>UTC{data.location?.timezone}</p>
            </div>
            <div className='flex-1 pl-4'>
              <p className='font-bold pb-2 text-xs uppercase text-zinc-500'>ISP</p>
              <p className='font-bold text-xl'>{data.isp?.slice(0, 26)}...</p>
            </div>
          </section>
        )
        }
      </>
    )
  );
}
