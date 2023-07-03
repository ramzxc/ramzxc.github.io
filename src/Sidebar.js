import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
			 <div className='divider' id='search'>
				<p>search</p>
			 </div>
			 <div className='divider'>
				<p>recent posts</p>
			 </div>
			 <div className='contents'>
				<p>이곳에는 최근에 올린 글들이 표시될 예정입니다.</p>
			 </div>
			 <div className='divider'>
				<p>categories</p>
			 </div>
			 <div className='contents'>
				<p>이곳에는 카테고리들이 표시될 예정입니다.</p>
			 </div>
        </div>
    )
};

export default Sidebar;