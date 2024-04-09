import React from 'react';
import { Image, Text } from 'react-native';
import batLogo from '../../../../assets/bat-logo.png';
import { styles } from './BatLogoStyles';

export function BatLogo() {
    return (
    <>

        <Text style={styles.title}>
            Generation Password
        </Text>

        <Image
            source={batLogo}
            style={{

                resizeMode: 'contain',
                height: 250,
                
            }}
            
            />


    </>

    );

    
}