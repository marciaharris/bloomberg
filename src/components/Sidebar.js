import Case from './case.png';

export default function SideBar() {
  return (
    <div className="relative">
      <div className=" fixed top-0 bottom-196 w-full right-0 navbar greyOne drop-shadow-md">
        <div className=" navbar-start">
          <div className="fixed top-2 w-10">
            <img className="rounded-full w-10 h-10" alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="navbar-center">
        </div>
        <div className="navbar-end">
          <button className="fixed top-2 right-20 mr-20 btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
            Notifications </button>
          <button className="fixed top-2 bottom-196 right-10 btn btn-ghost btn-circle mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            Search Members </button>
        </div>

      </div>
      <ul className=" fixed drop-shadow-md top-16 bottom-0 left-0 menu xl:menu-vertical w-28 greyOne h-full ">
        <img src={Case}/>
      </ul>
    </div>
  )
}