import React from 'react'
import { Link } from 'react-router-dom'
export default function Snavbar() {
  return (
    <>
	<div>
	<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> Grievance Maintainance</h3>
    </div>
  </div>
</div>

	</div>
    <div className="header">
		<div className="side-nav">
			<ul className="nav-links">
				<li><Link to="/">
						<i className="fa-solid fa-house-user"></i>
						<p>home</p>
					</Link>
				</li>
				<li><Link to="/stotal">
				<i class="fa fa-folder-o"></i>
						<p>Total complains</p>
					</Link>
				</li>
				<li><Link to="/spending">
						<i className="fa-solid fa-box-open"></i>
						<p>Pending complains</p>
					</Link>
				</li>
				<li><Link to="/logout">
				<i class="fas fa-sign-out-alt"></i>
						<p>Logout</p>
					</Link>
				</li>
			
				
			</ul>
		</div>


	</div>
    </>
  )
}
