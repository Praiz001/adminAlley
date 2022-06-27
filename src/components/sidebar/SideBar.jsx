import './sidebar.scss'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <h1 className='logo'>PraizAdmin</h1>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>Dashbaord</li>
                <li>Dashbaord</li>
                <li>Dashbaord</li>
                <li>Dashbaord</li>
            </ul>
        </div>
        <div className="bottom">
            bottom
        </div>
    </div>
  )
}

export default SideBar