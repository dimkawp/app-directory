import React, { useEffect, useState } from 'react';
import { Modal, Select  } from 'antd';
import _ from 'lodash';
import { useCookies } from 'react-cookie';
import convertSize from "convert-size";
import Moment from 'react-moment';
// components
import FileItem from '../fileItem';
// styles
import './style.scss';

const { Option } = Select;

const DirModal = ({ visible, dirItem, setDirItem }) => {

	const [focusFile, setFocusFile] = useState({});
	const [sortName, setSortname] = useState('name');
	const [cookies, setCookie] = useCookies(['name']);

	useEffect(() => {
		cookies?.name && setSortname(cookies.name)
	}, []);

	const DirModalFooter = () => {
		return !_.isEmpty(focusFile) && 
		<div className='dir-modal-footer'>
			size - {convertSize(focusFile?.size)} |  
			created - {<Moment format="YYYY MM DD HH:mm">{focusFile?.atime}</Moment>} | 
			edit - {<Moment format="YYYY MM DD HH:mm">{focusFile?.mtime}</Moment>}
		</div>
	}

	const handleChange = (value) => {
		setSortname(value);
		setCookie('name', value, { path: '/' });
	};

	return (
		<Modal
			centered
			visible={visible}
			onCancel={() => setDirItem([])}
			width={1000}
			footer={[<DirModalFooter key={'footer-key'} />]}
		>
			<Select value={sortName} style={{ width: 200, margin: 20 }} onChange={handleChange}>
				<Option value="name">Name</Option>
				<Option value="size">Size</Option>
				<Option value="mtime">Mtime</Option>
				<Option value="atime">Atime</Option>
			</Select>
			<div className='file-container'>
				{dirItem && _.sortBy(dirItem, (o) => { return o[sortName] }).map((file, index) => {
					return <FileItem key={_.uniqueId() + index} item={file} focusFile={focusFile} setFocusFile={setFocusFile} />
				})}
			</div>
		</Modal>
	)
}

export default DirModal;