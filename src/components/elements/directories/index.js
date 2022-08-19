import React, { useState } from 'react';
import _ from 'lodash';
// components
import DirItem from '../dirItem';
import DirModal from '../dirModal';
// styles
import './style.scss';

const Directories = ({ dirs }) => {
	const [dirItem, setDirItem] = useState([]);
	const [nameFocus, setDirFocus] = useState(null);

	const open = (item) => {
		setDirItem(dirs[item])
	}
	const focus = (item) => {
		setDirFocus(item);
	}
  return (
    <div className='directories'>
			{dirs && Object.keys(dirs).map((el, index) => {
				return <DirItem key={index} item={el} open={open} focus={focus} nameFocus={nameFocus} />
			})}

			{!_.isEmpty(dirItem) && <DirModal visible={true} dirItem={dirItem} setDirItem={setDirItem} />}

    </div>
  )
}

export default Directories;




