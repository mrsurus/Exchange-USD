import React from 'react'

function Discription() {
  return (
    <div className=' shadow-2xl mt-10  p-10'>
        <div className='text-left font-bold '>
            <p className='mb-3'>Send = আপনি যা দিবেন </p>
            <p className='mb-3'>Receive = আপনি যা পেতে চান </p>
            <p className='mb-3'>(Submit পেজে Total Amount ত যে পরিমান টাকা/ডলার আসে তা পরিশোধ করতে হবে )</p>
            <p className='text-red-600'>NOTE: Skrill/Neteller ৪০ ডলার এর নিচে অর্ডার করলে ডলার এর মোট মূল্যের সাথে অতিরিক্ত ৬০ টাকা সেন্ড ফি হিসেবে অবশ্যই দিতে হবে।   ডলার কেনার আগে Whatsapp নাম্বারে মেসেজ করে ডলার কিনুন ৫-১৫ মিনিটে ডলার পাবেন। </p>
        </div>
    </div>
  )
}

export default Discription