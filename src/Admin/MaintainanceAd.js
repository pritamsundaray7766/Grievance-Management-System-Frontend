import React from 'react'
import { Link } from 'react-router-dom'
export default function MaintainanceAd() {
  return (
    <>
	<div>
	<div className='text-center'><h2>GrievanceManagementSystem</h2></div>

	</div>
    <div className="header">
		<div className="side-nav">
			<ul className="nav-links">
				<li><Link to="/">
				<i class="fa fa-home"></i>
						<p>home</p>
					</Link>
				</li>
				<li><Link to="/menu">
						<i class="fa fa-cubes" ></i>
						<p>menu</p>
					</Link>
				</li>
				<li><Link to="/send">
						<i class="fa fa-send"></i>
						<p>send complains</p>
					</Link>
				</li>
				<li><Link to="/add">
						<i class="fa fa-users"></i>
						<p>member list</p>
					</Link>
				</li>
			
				<div className="active"></div>
			</ul>
		</div>


	</div>
    </>
  )
}
