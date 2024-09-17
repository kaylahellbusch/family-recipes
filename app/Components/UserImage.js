import Image from 'next/image'
import React from 'react'

const UserImage = ({ user }) => {
  return (
    <Image
      src={user.userImage}
      alt={`profile picture of ${user.userName}`}
      width='30'
      height='30'
      style={{ objectFit: 'contain', borderRadius: '50px' }}
    />
  )
}

export default UserImage
