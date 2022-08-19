import React from 'react';
import classnames from 'classnames';
// img
import dirImg from '../../../assets/img/dir.png';
// styles
import './style.scss';

const DirItem = ({item, open, focus, nameFocus }) => {

	const classes = classnames('dir-item', {'dir-item-active': nameFocus === item ? true : false});

	return (
		<div className={classes} onDoubleClick={() => open(item)} onClick={() => focus(item)}>
			<img src={dirImg} alt='dir' />
			<span className='dir-item__name'>{item}</span>	
		</div>
	)

}

export default DirItem;