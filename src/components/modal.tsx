import { Transition } from '@headlessui/react';
import React from 'react';
import { Icon } from './icon';

interface ModalProps {
    show?: boolean;
    onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
    return (
        <Transition
            show={props.show}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-bottom bg-dark rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog">
                        <div className="bg-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-300 sm:mx-0 sm:h-10 sm:w-10">
                                    <div className="text-blue-700">
                                        <Icon type="cloud" />
                                    </div>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-light" id="modal-headline">Signin</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-light">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-secondary-dark px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" className="w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-blue-300 text-base font-medium text-dark hover:bg-blue-400 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm waves-effect">
                                Signin
                            </button>
                            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-white text-base font-medium text-dark hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm waves-effect" onClick={props.onClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
}

Modal.defaultProps = {
    show: false
}
