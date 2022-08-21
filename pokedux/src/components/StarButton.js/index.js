import React from 'react';
import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const StarButton = ({ isFavorite, onClick }) => {
    const IconToRender = isFavorite ? StarFilled : StarOutlined;
  return (
    <Button icon={<IconToRender />} onClick={onClick} />
  )
}

export default StarButton;