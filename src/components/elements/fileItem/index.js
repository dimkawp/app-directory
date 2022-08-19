import React from 'react';
import classnames from 'classnames';
// img
import fileImg from '../../../assets/img/file.png';
import pdfImg from '../../../assets/img/pdf-file.png';
import wordImg from '../../../assets/img/word-file.png';
// styles
import './style.scss';

const FileItem = ({ item, focusFile, setFocusFile }) => {

	const focus = (item) => {
		setFocusFile(item);
	}

	const fileTypeController = (item) => {
		switch (item.type) {
			case 'application/pdf':
				return <img src={pdfImg} alt='pdf' />
	
			case 'application/msword':
				return <img src={wordImg} alt='word' />
		
			default:
				return <img src={fileImg} alt='file' />;
		}
	}

	const classes = classnames('file-item', {'file-item-active': focusFile?.name === item.name ? true : false});

	return (
		<div className={classes} onClick={() => focus(item)}>
			{fileTypeController(item)}
			<span className='file-item__name' >{item.name}</span>
		</div>
	)
}

export default FileItem;