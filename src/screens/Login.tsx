import React, { useEffect, useState } from 'react';
import { Center, Box, VStack, Button, Image, Heading } from 'native-base';
import { FormInput } from 'src/components/user-input';
import { KeyboardBehaviorWrapper } from 'src/components/wrappers';
import { anonymousSignIn } from 'src/firebase/api';

export interface LoginScreenProps {
    /*
        Function to call on the submit of the button
    */
    onSubmit?: () => void;
    /* 
        Boolean for when screen nested in modal, used to clear user inputs
    */
    isModalOpen?: boolean | undefined;
    /*
        Will specify if the signup screen is full screen, will render safe area, center it, and create a title.
    */
    main?: boolean | undefined;
    /*
        Callback for when an input has been actively edited
    */
   onEndEditing?: () => void;

};

export const LoginScreen: React.FC<LoginScreenProps> = (props) => {
    // set initial value for full screen to true, if modal not open and main undefined
    const isMain = (props.main) ? !props.isModalOpen : true;

    // react states
    const [email, setEmail] = useState<string>('');
    const [isPasswordVis, setPasswordVis] = useState<boolean>(false);
    const [isConfirmVis, setConfirmVis] = useState<boolean>(false);
    const [isGuestLoading, setIsGuestLoading] = useState<boolean>(false);

    const handleAnonymous = async () => {
        setIsGuestLoading(true);
        
        try {
            const response = await anonymousSignIn();
            console.log(`response for anonym: ${response}`);
        } catch (e: any) {
            console.log(`Error ${e}`);
        }
        setIsGuestLoading(false);
    }

    return (
        <KeyboardBehaviorWrapper bounces={false} centerVertically={isMain} key='asdfasdfas' >
            <Box px="10" w="100%" h="100%" justifyContent={isMain ? "center" : "flex-start"} alignItems="center" safeArea={isMain ? true : undefined}>
                <VStack space={3} alignItems="center" w="100%">
                    {
                        isMain && 
                        <>
                            <Image alignSelf="center" alt='Logo' source={require('assets/icon.png')} style={{ width: 150, height: 150 }}/>
                            <Heading mb={3}>Welcome to Maet!</Heading>
                        </>
                    }
                    <FormInput label="Enter your email" placeholder="name@example.com" isModalOpen={props.isModalOpen} onEndEditing={props.onEndEditing} onChangeText={(text: string) => setEmail(text)} />
                    {/* <Button mt="3" colorScheme="primary" w="100%" disabled>
                        Send me a sign-in link
                    </Button> */}
                    <Button key="Password-Button" w="100%" colorScheme="secondary" onPress={() => setPasswordVis(true)} isDisabled={isPasswordVis} >
                        Enter a password
                    </Button>
                    { 
                        isMain &&
                        <Button w="100%" colorScheme="primary" variant="link" onPress={handleAnonymous} isLoading={isGuestLoading} isLoadingText='Continuing' >
                            Continue as guest
                        </Button>
                    }
                </VStack>
            </Box>
        </KeyboardBehaviorWrapper>
        
    );
}
