import React, {useState} from 'react';
import qbConnection from "../api/qbittorrent";

function AddModal(props) {

    const [hostAddress, setHostAddress] = useState("");
    const [hostName, setHostName] = useState("");
    const [hostUser, setHostUser] = useState("");
    const [hostPassword, setHostPassword] = useState("");

    const process = (hostAddress, hostName, hostUser, hostPassword) => {
        qbConnection(hostAddress, hostName, hostUser, hostPassword).then((response => {
            if (response === true)
                console.log("Ok")
            else
                console.log("Nok")
        }))
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"/>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div
                    className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div>

                        <div className="mt-3 text-center sm:mt-5">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                Add Client
                            </h3>
                        </div>
                        <div className="mt-10">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="mt-1 p-2">
                                <input type="text" name="name" id="name" value={hostName}
                                       onChange={event => setHostName(event.target.value)}
                                       className="h-10 p-2 shadow-sm border-2 border-opacity-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md"
                                       placeholder="Host1" aria-describedby="name-description"/>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 px-4" id="name-description">Use friendly name for your host</p>
                        </div>
                        <div className="mt-10">
                            <label className="block text-sm font-medium text-gray-700">Host address</label>
                            <div className="mt-1 p-2">
                                <input type="text" name="host" id="host" onChange={event => setHostAddress(event.target.value)} value={hostAddress}
                                       className="border-2 border-opacity-100 h-10 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="https://qbittorrent.yoursite.com or IP"/>
                            </div>
                        </div>
                        <div className="mt-10">
                            <label htmlFor="user" className="block text-sm font-medium text-gray-700">User</label>
                            <div className="mt-1 p-2">
                                <input type="text" name="user" id="user" onChange={event => setHostUser(event.target.value)} value={hostUser}
                                       className="border-2 border-opacity-100 h-10 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                       placeholder="admin"/>
                            </div>
                        </div>
                        <div className="mt-10">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="mt-1 p-2">
                                <input type="text" name="password" id="password" onChange={event => setHostPassword(event.target.value)} value={hostPassword}
                                       className="border-2 border-opacity-100 h-10 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                       placeholder="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                        <button type="button"
                                onClick={() => {process(hostAddress, hostName, hostUser, hostPassword)}}
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                            Add
                        </button>
                        <button type="button"
                                onClick={() => {props.setShowModal(false)}}
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddModal;
