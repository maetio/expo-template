import React, { useEffect, useState } from "react";
import { BottomModal } from "src/components/wrappers";
import { LoginScreen } from "src/screens";

export interface LoginModalProps {
    isOpen: boolean; // will trigger whether to have modal open or closed
    onClose: () => void;
    // navigation for where to close?
};

export const LoginModal: React.FC<LoginModalProps> = (props) => {
    // state for handling active input
    const [inputActive, setInputActive] = useState(false);

    useEffect(() => {
        setInputActive(!props.isOpen)
    }, [props.isOpen])

    return (
        <BottomModal title="Login or Sign Up" 
            isOpen={props.isOpen} 
            inputActive={inputActive}
            onClose={props.onClose}>
            <LoginScreen isModalOpen={props.isOpen} 
                onEndEditing={() => setInputActive(true)}
                onSubmit={props.onClose}/>
        </BottomModal>
    );
}