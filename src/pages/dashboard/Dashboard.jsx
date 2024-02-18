import React, { useState } from 'react';

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 font-family-karla flex">
      {/* Sidebar */}
      <aside className="relative bg-sidebar bg-blue-500 h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="fas fa-plus mr-3"></i> New Report
          </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <a href="index.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-sticky-note mr-3"></i>
            Blank Page
          </a>
          <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-table mr-3"></i>
            Tables
          </a>
          <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-align-left mr-3"></i>
            Forms
          </a>
          <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-tablet-alt mr-3"></i>
            Tabbed Content
          </a>
          <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
            <i className="fas fa-calendar mr-3"></i>
            Calendar
          </a>
        </nav>
        <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
          <i className="fas fa-arrow-circle-up mr-3"></i>
          Upgrade to Pro!
        </a>
      </aside>

      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        {/* Desktop Header */}
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div className="w-1/2"></div>
          <div className="relative w-1/2 flex justify-end">
            <button onClick={() => setIsOpen(!isOpen)} className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
              <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt="profile" />
            </button>
            {isOpen && <button onClick={() => setIsOpen(false)} className="h-full w-full fixed inset-0 cursor-default"></button>}
            {isOpen && (
              <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
                <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
                <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
              </div>
            )}
          </div>
        </header>

        {/* Mobile Header & Nav */}
        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
          <div className="flex items-center justify-between">
            <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Dropdown Nav */}
          <nav className={isOpen ? 'flex flex-col pt-4' : 'hidden flex-col pt-4'}>
            <a href="index.html" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
              <i className="fas fa-tachometer-alt mr-3"></i>
              Dashboard
            </a>
            <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i className="fas fa-sticky-note mr-3"></i>
              Blank Page
            </a>
            <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i className="fas fa-table mr-3"></i>
              Tables
            </a>
            <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i className="fas fa-align-left mr-3"></i>
              Forms
            </a>
            <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i className="fas fa-tablet-alt mr-3"></i>
              Tabbed Content
            </a>
            <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i className="fas fa-calendar mr-3"></i>
              Calendar
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i className="fas fa-cogs mr-3"></i>
              Support
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i className="fas fa-user mr-3"></i>
              My Account
            </a>
            <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
              <i className="fas fa-sign-out-alt mr-3"></i>
              Sign Out
            </a>
            <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
              <i className="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
            </button>
          </nav>
        </header>

        {/* Content */}
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Dashboard</h1>

            <div className="flex flex-wrap mt-6">
              {/* Charts */}
            </div>

            <div class="w-full mt-6">
                    <p class="text-xl pb-3 flex items-center">
                        <i class="fas fa-list mr-3"></i> Table Example
                    </p>
                    <div class="bg-white overflow-auto">
                        <table class="min-w-full bg-white">
                            <thead class="bg-gray-800 text-white">
                                <tr>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Lian</td>
                                    <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Emma</td>
                                    <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Oliver</td>
                                    <td class="w-1/3 text-left py-3 px-4">Williams</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Isabella</td>
                                    <td class="w-1/3 text-left py-3 px-4">Brown</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="pt-3 text-gray-600">
                        Source: <a class="underline" href="https://tailwindcomponents.com/component/striped-table">https://tailwindcomponents.com/component/striped-table</a>
                    </p>
                </div>
          </main>

          {/* Footer */}
          <footer className="w-full bg-white text-right p-4">
            Built by <a target="_blank" rel="noopener noreferrer" href="https://davidgrzyb.com" className="underline">David Grzyb</a>.
          </footer>
        </div>
      </div>

      {/* Scripts */}
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" integrity="sha256-R4pqcOYV8lt7snxMQO/HSbVCFRPMdrhAFMH+vr9giYI=" crossorigin="anonymous"></script>
    </div>
  );
}

export default Dashboard;
