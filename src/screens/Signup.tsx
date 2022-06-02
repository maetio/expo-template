import React from 'react';
import { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Center, Box, Heading, VStack, Button } from 'native-base';
import { FormInput } from 'components/user-input';


export default function SignupScreen() {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading
                        size="lg"
                        color="coolGray.800"
                        _dark={{
                            color: 'warmGray.50',
                        }}
                        fontWeight="semibold">
                        Welcome
                    </Heading>
                    <Heading
                        mt="1"
                        color="coolGray.600"
                        _dark={{
                            color: 'warmGray.200',
                        }}
                        fontWeight="medium"
                        size="xs">
                        Sign up to continue!
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormInput label="Email" />
                        <FormInput label="Email" />
                        <FormInput label="Email" />
                        <FormInput label="Email" />
                        <FormInput label="Email" />
                        <FormInput label="Password" password={true} />
                        <FormInput label="Confirm Password" password={true} />
                        <Button mt="2" colorScheme="indigo">
                            Sign up
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </TouchableWithoutFeedback>
        
    );
}
