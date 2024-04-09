import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    appContainer: {

    flex: 1,
    backgroundColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    
    },

    logoContainer:{

    flexDirection:'column',
    borderColor: '#070707',
    borderWidth:4,
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:60,
    paddingTop:20,
    paddingBottom:10,
    backgroundColor:'#b0b0b0'

    },

    inputContainer:{

    width:'80%',
    flexDirection:'column',
    alignItems:'center',

    }

});

export default styles